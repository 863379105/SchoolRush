<template>
  <div class="app" id="agroup">
    <!-- 导航条下面内容与侧边栏部分开始 -->
    <div class="container grid-container">
      <div class="grid-no-padding col-lg-11 col-md-12 col-sm-12 col-xs-12">
        <!-- 内容部分开始 -->
        <div class="row content-container col-lg-9 col-md-9">
          <div class="gruop-activity card-container">
            <div class="gruop-info">
              <p>
                <Avatar shape="square" size="large" icon="person" src="http://p6a87gauo.bkt.clouddn.com/user_1.png" />
                <span class="name">XXX小组</span>
                <span class="is-memeber" v-if="isMember">我是这个小组的成员  <Button @click="quit" type="ghost">退出小组</Button></span>
                <span class="is-memeber" v-else><Button @click="join" type="primary">加入小组</Button></span>
                <span class="right">组长 <router-link to="/home/1">iimT</router-link></span>
                <span class="right">创建于{{ "1018-4-23" }}</span>

                <Modal
                  v-model="isJoin"
                  title="确认加入该小组吗？"
                  :loading="loading"
                  @on-ok="joinOK">
                </Modal>
                <Modal
                  v-model="isQuit"
                  title="确认退出该小组吗"
                  :loading="loading"
                  @on-ok="quitOK">
                </Modal>
              </p>
            </div>
            <div class="introduce-container">
              <p></p>
              <markdown-html :markdown="introduce"></markdown-html>
            </div>
            <p class="title">最近活动</p>

            <p v-for="item in 20" :key="item" class="activity-item">
              <span class="title">
                <router-link to="">进击Node.js基础（二）</router-link>
              </span>
              <span class="right gruop">
                <router-link to="">XXX小组</router-link>
              </span>
              <span class="right time">{{ "10分钟前" }}</span>
              <span class="right complete-num">{{ 3 }}人已完成</span>
            </p>
            <p class="page">
              <Page :total="40" @on-change="changePage" size="small"></Page>
            </p>
          </div>
        </div>

        <!-- 内容部分结束 -->
        <!-- 右侧边栏开始 -->
        <div class="row sidebar-container col-lg-offset-9 col-md-offset-9 col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <agroup-sidebar></agroup-sidebar>
        </div>
        <!-- 右侧边栏结束 -->
      </div>
    </div>
    <!-- 导航条下面内容与侧边栏部分结束 -->
  </div>
</template>
<script>
import agroupSidebar from "./groupsidebar"
import markdownHtml from "../../common/markdown-html"
export default {
  data() {
    return {
      isJoin: false,
      isQuit: false,
      isMember: true,
      loading: true,
      introduce: "## 小组介绍\n> #### 我是iimT, 一个固执的技术直男。\n>#### 我的微信公众号 : iimT\n个人博客： [iimT的个人博客](https://www.iimt.me/)"
    }
  },
  methods: {
    changePage(page) {
      console.log("页码" + page)
    },
    hasJoin() {
      //判断用户是否已加入该小组
    },
    join() {
      this.isJoin = true
    },
    quit() {
      this.isQuit = true
    },
    joinOK() {
      setTimeout(() => {
          this.isJoin = false;
      }, 1000)
    },
    quitOK() {
      setTimeout(() => {
          this.isQuit = false;
      }, 1000)
    },
  },
  components: {
    agroupSidebar,markdownHtml
  },
  mounted() {
    this.hasJoin()
  }
};
</script>
<style lang="sass">
#agroup
  .gruop-activity
    padding: 0 .5rem
    .gruop-info
      padding: 1rem 0
      margin-bottom: 1rem
      border-bottom: .1rem solid #fff
      .ivu-avatar-large
        width: 5rem
        height: 5rem
      span.name
        padding-left: 1rem
        font-size: 2rem
        font-weight: bold
      .is-memeber
        // margin-top: 2rem
        font-size: 1.2rem
        padding-left: 2rem
        button
          margin-left: .5rem
      .right
        margin: 2rem 1rem
        font-size: 1.4rem
    p.title
      font-size: 1.5rem
      font-weight: bold
      padding-top: 2rem
      padding-bottom: 1.5rem
      border-bottom: .1rem solid #eee
    .activity-item
      padding: .8rem 0
      font-size: 1.5rem
      border-bottom: .1rem dashed #ececec
      .right
        margin: 0 1rem
    .page
      text-align: center
      padding: 1rem 0
    .introduce-container
      margin-top: .5rem
      border-radius: .5rem
      background: #eee
      padding: 2rem
</style>
