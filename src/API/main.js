let root = "http://localhost/SchoolRushServer/public/?s="
import axios from 'axios'

//设置axios为form-data
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function (data) {
    let ret = ''
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
}]

var API = {
    User: {
        root: "User",
        Add: "Add",
        updateById: "updateById",
        GetAll: "GetAll"
    }
}

function getService(cls, action) {
    return root + API[cls].root + "." + API[cls][action];
}

function get(url, params) {
    console.log("get")
    console.log(params)
    return axios.get(url, params)
}

function post(url, params) {
    console.log("post")
    console.log(params)
    return axios.post(url, params)
}

export default {
    getService: getService,
    get: get, 
    post: post
}