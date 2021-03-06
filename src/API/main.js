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
        GetGoodAtRankTop: "GetGoodAtRankTop",
    },
    Campus: {
        root: "Campus",
        getAll: "getAll",
        getById: "getById",
    },
    Major: {
        root: "Major",
        getAll: "getAll",
    },
    Question: {
        root: "Question",
        GetPageInformation: "GetPageInformation",
        getTypeById: "getTypeById",
        getById: "getById",
        add: "add",
        getUserQuestion: "getUserQuestion",
    },
    Usertoq: {
        root: "Usertoq",
        Add: "Add",
        PassedQuestion: "PassedQuestion",
        SolveQuestion: "SolveQuestion",
    },
    Label: {
        root: "Label",
        getAll: "getAll",
    },
    Upload: {
        root: "Upload",
        UploadImg: "UploadImg",
        base64UploadQNY: "base64UploadQNY",
    },
    Comment: {
        root: "Comments",
        add: "add",

    },
    Userliveness: {
        root: "Userliveness",
        getLivenessById: "getLivenessById",
    }
}

//根据类名与动作名获取接口地址
function getService(cls, action) {
    let root = "http://localhost/SchoolRushServer/public/?s="
    return root + API[cls].root + "." + API[cls][action];
}
//返回axios对象

function getAxios() {
    return axios
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

//--------------其他方法

function getUserInfo(uid) {
    let url = getService("User", "getById")
    return post(url, { id: uid})
}

export default {
    getService,
    get, 
    post,
    getUserInfo,
    getAxios,
}