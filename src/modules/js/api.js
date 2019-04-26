let url = {
  hotLists: '/index/hotLists'
};

let baseUrl = 'https://www.easy-mock.com/mock/5cbedc472b8e596c3bd450c4/youzan';
for (let key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = baseUrl + url[key];
  }
}

export default url;
