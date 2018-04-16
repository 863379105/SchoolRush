<template>
  <div class="app question">
    <!-- 导航条下面内容与侧边栏部分开始 -->
    <div class="container grid-container">
      <div class="grid-no-padding col-lg-11 col-md-12 col-sm-12 col-xs-12">
        <!-- 内容部分开始 -->
        <div class="row content-container col-lg-9 col-md-9">
          <div class="card-container">
            <a-select v-if="qType==1"></a-select>
            <a-judge v-else-if="qType==2"></a-judge>
            <a-blank v-else></a-blank>
          </div>
          <div class="card-container">
            <comment></comment>
          </div>
        </div>
        <!-- 内容部分结束 -->
        <!-- 右侧边栏开始 -->
        <div class="row sidebar-container col-lg-offset-9 col-md-offset-9 col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <div class="sidebar-item sidebar-userinfo-container">
            <Row type="flex" justify="center" align="middle" class="code-row-bg">
              <Col span="24"><p class="title">出题人</p></Col>
              <Col span="24">
                <p><img class="avatar square-img" src="../../static/img/avatar.jpg"></p>
                <p class="userinfo-username">iimT</p>
              </Col>
              <Col span="24">
                <p class="share-q">分享了 <span>655</span> 个问题</p>
              </Col>
              <Col class="user-info-followed" span="12">
                <p class="num">67</p>
                <p class="title">关注了</p>
              </Col>
              <Col class="user-info-follower" span="12">
                <p class="num">34</p>
                <p class="title">关注者</p>
              </Col>
              <Col span="24">
                <p class="userinfo-locate-school">
                  <Tag type="border" color="green">浙江</Tag>
                  <Tag type="border" color="blue">绍兴文理学院</Tag>
                </p>
              </Col>
              <p class="userinfo-qinfo">
                <Col span="8">
                  <Col class="userinfo-data-num" span="24"> 568
                  </Col>
                  <Col span="24"> 解决问题
                  </Col>
                </Col>
                <Col span="8">
                  <Col class="userinfo-data-num" span="24"> 68.5%
                  </Col>
                  <Col span="24"> 通过率
                  </Col>
                </Col>
                <Col span="8">
                  <Col class="userinfo-data-num" span="24"> 8
                  </Col>
                  <Col span="24"> 待解决
                  </Col>
                </Col>
              </p>
            </Row>
          </div>
          <div class="sidebar-item latest-passed sidebar-userinfo-container">
            <Row type="flex" justify="center" align="middle" class="code-row-bg">
              <Col span="24"><p class="title">最新通过</p></Col>
              <p class="latest-passed-user" v-for="n in 6" :key="n">
                <Col span="8">
                  <img class="square-img" src="../../static/img/avatar.png">
                </Col>
                <Col span="16"> 用户名
                  <Tag type="border" color="red">绍兴文理学院</Tag>
                </Col>
              </p>
            </Row>
          </div>
          <div class="sidebar-info-container">
            <p>侵权举报网上有害信息举报专区</p>
            <p>违法和不良信息举报：010-82716601</p>
            <p>儿童色情信息举报专区</p>
            <p>联系我们 © 2018 SchoolRush</p>
          </div>
        </div>
        <!-- 右侧边栏结束 -->
      </div>
    </div>
    <!-- 导航条下面内容与侧边栏部分结束 -->
  </div>
</template>
<script>
//引入答题组件
import answerSelect from "../questions/answerSelect"
import answerJudge from "../questions/answerJudge"
import answerBlank from "../questions/answerBlank"
import comment from "../questions/comments"

export default {
  data() {
    return {
      qType: 3
    };
  },
  methods: {
    getUserInfo() {
    },
  },
  mounted() {
    //获取用户信息
    this.getUserInfo();
  },
  components: {
    aSelect: answerSelect,
    aJudge: answerJudge,
    aBlank: answerBlank,
    Comment: comment,
  }
};
</script>
<style lang="sass">
.question
  .sidebar-container
    .sidebar-userinfo-container
      .user-info-followed,.user-info-follower
        padding: 1rem 0
        p.title
          font-size: 1.6rem
        p.num
          font-size: 2.3rem
          font-weight: bold
$bright-blue: #0084ff
.container
  margin: 0 auto
.content-container
  float: left
  padding: 0
  margin: 0
  padding-right: .5rem
  margin-bottom: 1rem
.sidebar-container
  float: right
  margin-left: 0
  padding: 0
  margin: 0
  padding-left: .5rem
  position: absolute
  right: 0
  .sidebar-item
    border-radius: .3rem
    box-shadow: 0 0 .3rem 0 #ccc
    background: #fff
.latest-passed
  margin-top: 1rem
  .latest-passed-user
    margin: .5rem
    img
      height: 5rem
.sidebar-userinfo-container
  p
    text-align: center
    img.avatar
      height: 7rem
      margin-bottom: -2.5rem
      margin-top: 1rem
  p.title
    padding: .4rem 0
    border-bottom: .1rem solid #e7e7e7
  p.share-q
    margin: 1rem 0
    margin-top: -.5rem
    span
      font-size: 2.3rem
      font-weight: bold
  .userinfo-data-num
    font-size: 2.3rem
    font-weight: bold
  .userinfo-username
    padding: .5rem 0
    padding-top: 2rem
    font-size: 2rem
    font-weight: bold
  .userinfo-locate-school,.userinfo-qinfo,.userinfo-school,.userinfo-user-school
    padding: .5rem 0
  .userinfo-school
    padding-top: 1rem
.sidebar-fastto-container
  margin-top: 1rem
  height: 20rem
.sidebar-info-container
  height: 15rem
  border-radius: .3rem
  margin-top: 1rem
  color: #8590a6
  font-size: 1.4rem
.card-container
  pdding-bottom: 1rem
  border-radius: .3rem
  box-shadow: 0 0 .3rem 0 #ccc
  background: #fff
  overflow: hidden
.card-left-container
  justify-content: center
  flex-direction: column
  position: absolute
  left: 0
  top: 0
  bottom: 0
  width: 25%
  border-right: .1rem solid #e9e9e9
  box-sizing: border-box
  .flex-container
    flex-direction: column
    .label-container
      flex-wrap: wrap
      justify-content: center
      $tag-height: 2.3rem
      .Tag
        border-radius: .1rem
        height: $tag-height
        line-height: $tag-height
        padding: 0 1rem
        font-size: 1.4rem
    .breadcrumb-container
      padding-top: 3rem
      font-size: 1.6rem
      justify-content: center
      *
        font-size: 1.6rem
      .ivu-breadcrumb-item-separator
        color: #888
.card-right-container
  width: 75%
  padding: 1rem 1.5rem
  p
    padding-top: .5rem
  .title
    font-size: 2.5rem
  .q-set-info
    span
      margin-right: .5rem
  .q-difficulty
  .q-author-say
    .author-name
      padding-left: .5rem
    .author-say
      font-size: 1.3rem
      background: #ececec
      border-radius: .3rem
      padding: .3rem .5rem
    .author-name:after
      content: '：'
.Img
  vertical-align: top
.img-auto-fit
  margin-top: .2rem
  height: 90%
.Input
  width: 100%
.school-badge
  width: 5rem
  border-radius: 50%
.campus-name
  font-size: 1.8rem
  font-weight: bold
.answerPie-container
  padding-top: .5rem
  #answerPie
    margin: 0 auto
@media (max-width: 992px)
  .sidebar-container
    display: none
  .content-container
    float: none
    padding: 0
  .nav-right
    padding-right: .5rem
@media (max-width: 960px)
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