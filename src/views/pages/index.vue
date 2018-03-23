<template>
  <div class="app">
    <!-- 导航条下面内容与侧边栏部分开始 -->
    <div class="container grid-container">
      <div class="grid-no-padding col-lg-11 col-md-12 col-sm-12 col-xs-12">
        <!-- 内容部分开始 -->
        <div class="row content-container col-lg-9 col-md-9">
          <div class="card-container">
            <p>题集</p>
            <p>筛选</p>
          </div>
        </div>
        <div class="row content-container col-lg-9 col-md-9" v-for="n in 6" :key="n">
          <div class="card-container">
            <div class="card-left-container flex left">
              <div class="flex-container flex">
                <div class="label-container flex">
                  <Tag class="Tag" color="red">标签一</Tag>
                  <Tag class="Tag" color="red">标签一</Tag>
                  <Tag class="Tag" color="red">标签一</Tag>
                </div>
                <div class="breadcrumb-container flex">
                  <Breadcrumb separator=">">
                    <BreadcrumbItem to="/index">计算机</BreadcrumbItem>
                    <BreadcrumbItem to="/index">网络</BreadcrumbItem>
                  </Breadcrumb>
                </div>
              </div>
            </div>
            <div class="card-right-container right">
              <p class="title">关于XXXXX的掌握情况</p>
              <p class="q-set-info">
                <span>10道题</span>
                <span>23586人挑战过</span>
                <span>1536人已通过</span>
                <span>通过率：78%</span>
              </p>
              <p class="q-difficulty">  
                <span>难度：</span>
                <Icon type="ios-star" v-for="n in 4" :key="n"></Icon>
              </p>
              <p class="q-author-say">
                <Avatar icon="person" />
                <span class="author-name">iimT</span>
                <span class="author-say">最近自己学了一些关于XXXXX方面的内容，出几道题大家来答答，能一次通过说明你掌握很不错了哟~</span>
              </p>
            </div>
          </div>
        </div>
        <!-- 内容部分结束 -->
        <!-- 右侧边栏开始 -->
        <div class="row sidebar-container col-lg-offset-9 col-md-offset-9 col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <div class="sidebar-item sidebar-userinfo-container">
            侧边栏用户数据
          </div>
          <div class="sidebar-item sidebar-fastto-container">
            侧边栏快捷入口
          </div>
          <div class="sidebar-info-container">
            侧边栏网站信息
          </div>
        </div>
        <!-- 右侧边栏结束 -->
      </div>
    </div>
    <!-- 导航条下面内容与侧边栏部分结束 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    setQuestion() {
      console.log("跳转到出题页面")
    }
  }
  
}
</script>
<style lang="sass">

  $bright-blue: #0084ff
  body
    font-size: 1.6rem
  .container
    margin: 0 auto
    margin-top: 1rem
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
  .sidebar-userinfo-container
    height: 25rem
  .sidebar-fastto-container
    margin-top: 1rem
    height: 20rem
  .sidebar-info-container
    height: 15rem
    border-radius: .3rem
    background: #ddd
    margin-top: 1rem
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


