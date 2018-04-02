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


//接口地址定义
var API = {
    User: {
        root: "User",
        add: "Add",
        updateById: "updateById",
        getAll: "getAll",
        login: "login",
        getById: "getById",
    },
    Campus: {
        root: "Campus",
        getAll: "getAll",
    },
    Major: {
        root: "Major",
        getAll: "getAll",
    }
}

//根据类名与动作名获取接口地址
function getService(cls, action) {
    let root = "http://localhost/SchoolRushServer/public/?s="
    return root + API[cls].root + "." + API[cls][action];
}

//get方法
function get(url, params) {
    console.log("get")
    console.log(params)
    return axios.get(url, params)
}
//post方法
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