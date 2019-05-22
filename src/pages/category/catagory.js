import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'

import 'css/common.css'
import './catagory.css'

import CustomFooter from 'components/CustomFooter.vue'

new Vue({
    el: "#app",
    data() {
        return {
            topList: null,
            topIndex: 0,
            subData: null,
            rankata: null
        }
    },
    methods: {
        getTopList() {
            axios.get(url.topList).then(res => {
                this.topList = res.data.data.lists
            }).catch(err => {
                console.info(err)
            })
        },
        getSubList(index, id) {
            this.topIndex = index
            //默认请求综合排行
            if (index === 0) {
                this.getRank()
            } else {
                //点击其他类后请求
                axios.get(url.subList, {id}).then(res => {
                    this.subData = res.data.data.data
                }).catch(err => {
                    console.info(err)
                })
            }
        },
        getRank() {
            axios.get(url.rank).then(res => {
                this.rankata = res.data.data.data
            }).catch(err => {
                console.info(err)
            })
        }
    },
    created() {
        this.getTopList()
        this.getSubList(0)
    },
    components: {
        CustomFooter
    }
})