<template>
  <div>
    <!-- 导航条部分开始 -->
    <nav>
      <div class="grid-container nav-container">
        <div class="nav-content col-lg-11 col-md-12 col-sm-12 col-xs-12">
          <div class="left nav-left">
            <div class="logo" @click="toIndex">
              <img class="Img img-auto-fit" src="../../static/img/small-logo.png" alt="SchoolRush">
              <div>SchoolRush</div>
            </div>
            <div class="media-hide-container">
              <div class="nav-title">
                <ul>
                  <li>
                    <router-link to="/index" @click.native="loading">首页</router-link>
                  </li>
                  <li>
                    <router-link to="/rank">排行榜</router-link>
                  </li>
                  <li>
                    <router-link to="/group">小组</router-link>
                  </li>
                  <li>
                    <router-link to="/campus">高校</router-link>
                  </li>
                  
                </ul>
              </div>
              <div class="search-container">
                <Input class="input-search" placeholder="搜索你感兴趣的问题..."></Input>
                <Button type="primary" shape="circle" icon="ios-search"></Button>
              </div>
            </div>
          </div>
          <div class="right nav-right">
            <div class="nav-title right-icon">
              <ul class="flex">
                <li>
                  <Button type="ghost" @click="setQuestion">出题</Button>
                </li>
                <Modal v-model="setupModel" :closable="false" @on-ok="setupSubmit">
                  <v-setup @onAddLabel="setupModel = false" @onSueccess="setupSuccess" @onError="setupFail"></v-setup>
                  <div class="Modal-footer" slot="footer"></div>
                </Modal>
                <li>
                  <Icon size="18px" type="chatbubbles"></Icon>
                </li>
              </ul>
            </div>
            <Dropdown class="dropdown" trigger="click">
              <a class="dropdown-avatar" href="javascript:void(0)">
                <img class="Img img-auto-fit" :src="userInfo.avatar">
              </a>
              <DropdownMenu slot="list">
                <DropdownItem>
                  <router-link class="dropdown-link" :to="'/home/' + userInfo.id">我的主页</router-link>
                </DropdownItem>
                <DropdownItem>
                  <router-link class="dropdown-link" to="/settings">设置</router-link>
                </DropdownItem>
                <DropdownItem>
                  <router-link class="dropdown-link" to="/login">退出</router-link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
    <!-- 导航条部分结束 -->
  </div>
</template>
<script>
import vSetup from "./setup";
export default {
  data() {
    return {
      setupModel: false,
      userInfo: {
        avatar: "",
        id: "",
      }
    };
  },
  methods: {
    setQuestion() {
      //弹出出题框
      //this.setupModel = true;
      this.$router.push("/setup")
    },
    setupSubmit() {
      this.$Notice.success({
        title: "发布成功"
      });
    },
    toIndex() {
      this.$router.push("/index")
    },
    getUserInfo(cb) {
      let uid = localStorage.getItem("uid")
      const that = this

      this.$API.getUserInfo(uid).then((res) => {
        let Uinfo = res.data.data
        localStorage.setItem("userinfo", JSON.stringify(Uinfo))
        that.userInfo = Uinfo
        if(cb) cb()
      })
    },
    setupSuccess() {
      this.setupModel = false
      this.$Message.success('发布成功！')
    },
    setupFail() {
      this.$Message.error('发布失败！')
    },
    loading() { 
      this.$Spin.show()
      this.getUserInfo(() => {
        this.$Spin.hide()
      })
    }
  },
  components: {
    vSetup
  },
  mounted() {
    this.getUserInfo()
  },
};
</script>
<style lang="sass">
  @import "../../static/sass/grid.sass"
  @import "../../static/sass/common.sass"

  $bright-blue: #0084ff
  $nav-height: 5rem
  body
    font-size: 1.6rem
  nav
    position: fixed
    top: 0
    width: 100%
    height: $nav-height
    background: #fff
    box-shadow: 0 .1rem .2rem 0 #ccc
    z-index: 100
  .nav-container
    margin: 0 auto
    height: 100%
  .nav-content
    height: 100%
    padding: 0
  .container
    margin: 0 auto
  .nav-left
    height: 100%
    div
      vertical-align: top
      display: inline-block
  .nav-right
    height: 100%
    ul
        li
          display: flex
          display: -webkit-flex
          justify-content: center
          align-items: center
    .right-icon
        .ivu-icon-chatbubbles
          font-size: 2rem
        .ivu-btn
          font-size: 1.3rem
        ul.flex
          li
            margin-right: 1.5rem
    .nav-title
      margin-top: 1rem
      display: inline-block
      margin-right: 1rem
    .dropdown
      float: right
      height: 100%
      margin-left: 0
      div.ivu-dropdown-rel
        height: 100%
      a.dropdown-avatar
        height: 100%
        img
          margin-top: .7rem
          height: 75%
          border-radius: .3rem
  .logo
    height: 100%
    cursor: default
    div
      margin-left: .3rem
      color: $bright-blue
      font-size: 3rem
      margin-top: 0
      display: inline-block
      line-height: 5rem
  .Img
    vertical-align: top
  .img-auto-fit
    margin-top: .2rem
    height: 90%
  .media-hide-container
    .nav-title
      margin-top: 1em
      margin-left: 1rem
      height: 80%
      ul
        li
          font-size: 1.5rem
          float: left
          margin: 0 1rem
  .search-container
    margin-top: 1rem
    margin-left: 0
    width: 30rem
    height: 80%
  .input-search
    background: #f6f6f6
    font-size: 1.4rem
    margin: 0 .5rem
    width: 20rem
    background: none
    input
      padding: .4rem 1.3rem .3rem 1.3rem
      font-size: 1.4rem
      background: #f6f6f6
      border-radius: 4rem
  .input-search:focus
    outline: none
  .Input
    width: 100%
  .Modal-footer
    height: 0
  .ivu-modal
    .ivu-modal-content
      .ivu-modal-footer
        padding-bottom: 1rem
        border: none
  .ivu-modal-body
    padding: 1rem 1.6rem
    padding-bottom: 0
    
  
  .dropdown-link
    color: #495060
  @media (max-width: 992px)
    .nav-right
      padding-right: .5rem
  @media (max-width: 1030px)
    .nav-left
      .search-container
        display: none
  @media (max-width: 670px)
    .nav-left
      .nav-title
        display: none
  @media (max-width: 500px)
    .nav-right
      .right-icon
        display: none
</style>
<style>
.demo-spin-icon-load{
  animation: ani-demo-spin 1s linear infinite;
}
</style>



