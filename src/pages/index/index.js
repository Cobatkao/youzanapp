import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'

import 'css/common.css'
import './index.css'

// mint-UI
import {InfiniteScroll} from 'mint-ui'
Vue.use(InfiniteScroll)

import customFooter from 'components/custom-footer.vue'

new Vue({
  el: '#app',
  components: {
    customFooter
  },
  data: {
    lists: null,
    pageNum: 1,
    pageSize: 10,
    notLoading: false,
    allLoaded: false
  },
  created() {
    this.getLists()
  },
  methods: {
    getLists() {
      if (this.allLoaded) return
      this.notLoading = true
      axios.post(url.hotLists, {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then(res => {
        let curLists = res.data.data.lists
        // 判断所有数组是否加载完毕
        if (curLists.length < this.pageSize) {
          this.allLoaded = true
        }
        if (!this.lists) {
          //初次请求
          this.lists = curLists
        } else {
          this.lists = this.lists.concat(curLists)
        }
        this.notLoading = false
        this.pageNum++
      })
    }
  }
})
