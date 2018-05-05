<template>
  <div id="group-sidebar">
    <div class="sidebar-item sidebar-userinfo-container">
            <Row type="flex" justify="center" align="middle" class="code-row-bg">
              <Col span="24">
              <p class="userinfo-avatar">
                <Avatar shape="square" size="large" :src="userInfo.avatar" />
              </p>
              <p class="userinfo-username">{{ userInfo.name}}</p>
              </Col>
              <Col span="24">
              <p class="userinfo-locate-school">
                <Tag color="green">{{ userInfo.campusInfo.locate }}</Tag>
                <Tag color="blue">{{ userInfo.campusInfo.name }}</Tag>
              </p>
              </Col>
              <Col class="user-info-followed" span="12">
              <p class="num">0</p>
              <p class="title">关注了</p>
              </Col>
              <Col class="user-info-follower" span="12">
              <p class="num">0</p>
              <p class="title">关注者</p>
              </Col>
            </Row>
          </div>
          <div class="sidebar-item sidebar-mygroup-container">
            <p class="title">我加入的小组</p>
            <Row :gutter="16">
              <Col v-for="item in 8" class="group-item" :key="item" span="8">
                <Avatar shape="square" size="large" icon="person"  @click="toGroup" src="http://p6a87gauo.bkt.clouddn.com/user_1.png" />
                <p @click="toGroup">XXX小组</p>
              </Col>
            </Row>
          </div>
          <div class="sidebar-item sidebar-fastto-container">
              <ul class="fastto">
                <li><p><Icon type="disc"></Icon><router-link to="/challenge">挑战</router-link></p></li>
                <li><p><Icon type="checkmark-circled"></Icon>已通过</p></li>
                <li><p><Icon type="hammer"></Icon>正在解决</p></li>
                <li><p><Icon type="pricetags"></Icon>关注的标签</p></li>
                <li><p><Icon type="university"></Icon>关注的学校</p></li>
              </ul>
          </div>
          <div class="sidebar-info-container">
            <p>侵权举报网上有害信息举报专区</p>
            <p>违法和不良信息举报：010-82716601</p>
            <p>儿童色情信息举报专区</p>
            <p>联系我们 © 2018 SchoolRush</p>
          </div>
  </div>
</template>
<script>
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/pie");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  data() {
    return {
      userInfo: {
        avatar: "",
        campusID: "",
        campusInfo: {},
        describe: "",
        email: "",
        gender: "",
        id: "",
        identify: "",
        majorID: "",
        majorInfo: {},
        name: "",
        tel: "",
        vice: "",
        solveInfo: {},
      },
    }
  },
  methods: {
    getUserInfo() {
      let uid = localStorage.getItem("uid");
      let url = this.$API.getService("User", "getById");
      let that = this;

      this.$API
        .post(url, {
          id: uid
        })
        .then((res) => {
          let Uinfo = res.data.data
          for(var i in Uinfo) {
            that.$set(that.userInfo, i, Uinfo[i])
          }
          localStorage.setItem("userinfo", JSON.stringify(Uinfo));
          for (let i in Uinfo) {
            if (!Uinfo[i]) {
              that.jumpToSettings();
              break;
            }
          }

          //that.getAllMajor();
        })
        .catch(err => {
          console.log(err);
        });
    },
    getUserPassRate() {
      let solved = this.userInfo.solveInfo
      if(solved.tobeSolvedNum + solved.passedNum == 0) return "0%"
      let hund = solved.passedNum/(solved.tobeSolvedNum + solved.passedNum) * 10000
      let intNum = parseInt(hund)
      return intNum/100 + "%"
    },
    toGroup() {
      this.$router.push("/agroup/1")
    }
  },
  mounted() {
    //TODO: 头像与昵称点击只有一个跳转
    this.getUserInfo()
  }
}
</script>
<style lang="sass">
#group-sidebar
  .sidebar-userinfo-container
    .user-info-followed,.user-info-follower
      p.title
        font-size: 1.6rem
      p.num
        font-size: 2.3rem
        font-weight: bold
    .userinfo-avatar
      .ivu-avatar-large
        width: 7rem
        height: 7rem
        margin-top: 2rem
    .userinfo-username
      padding: .5rem 0
      padding-top: 1rem
      font-size: 2rem
      font-weight: bold
  .sidebar-mygroup-container
    margin-top: 1rem
    p.title
      font-size: 1.5rem
      padding: .5rem 0
      padding-left: 1rem
      border-bottom: .1rem solid #eee
    .group-item
      margin: .5rem 0
      .ivu-avatar-large
        margin: 0 auto
        display: block
        width: 4rem
        height: 4rem
        cursor: pointer
      p
        cursor: pointer
        margin-top: .3rem
        font-size: 1.4rem
        text-align: center
</style>
