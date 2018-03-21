<template>
  <div class="app">
    <!-- 导航条部分开始 -->
    <nav>
      <div class="grid-container nav-container">
        <div class="nav-content col-lg-11 col-md-12 col-sm-12 col-xs-12">
          <div class="left nav-left">
            <div class="logo">
              <img class="Img img-auto-fit" src="../../static/img/small-logo.png" alt="SchoolRush">
              <div>SchoolRush</div>
            </div>
            <div class="media-hide-container">
              <div class="nav-title">
                <ul>
                  <li>首页</li>
                  <li>发现问题</li>
                </ul>
              </div>
              <div class="search-container">
                <!-- <input type="text" class="Input input-search search" placeholder="搜索你感兴趣的问题..."> -->
                <Input class="input-search" placeholder="搜索你感兴趣的问题..."></Input>
                <Button type="primary" shape="circle" icon="ios-search"></Button>
              </div>
            </div>
          </div>
          <div class="right nav-right">
            <div class="nav-title right-icon">
                <ul>
                  <li><i class="ivu-icon ivu-icon-checkmark"></i></li>
                  <li><i class="ivu-icon ivu-icon-compass"></i></li>
                </ul>
              </div>
            <Dropdown class="dropdown" trigger="click">
              <a class="dropdown-avatar" href="javascript:void(0)">
                  <img class="Img img-auto-fit" src="../../static/img/avatar.jpg">
              </a>
              <DropdownMenu slot="list">
                  <DropdownItem>我的主页</DropdownItem>
                  <DropdownItem>设置</DropdownItem>
                  <DropdownItem>退出</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
    <!-- 导航条部分结束 -->
    <!-- 导航条下面内容与侧边栏部分开始 -->
    <div class="container grid-container">
      <div class="grid-no-padding col-lg-11 col-md-12 col-sm-12 col-xs-12">
        <!-- 内容部分开始 -->
        <div class="row content-container col-lg-9 col-md-9" v-for="n in 4" :key="n">
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
        <div class="row sidebar-container col-lg-3 col-md-3">
          <div class="sidebar-con-container">
            侧边栏内容部分
          </div>
          <div class="sidebar-info-container">
            侧边栏信息部分
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
  
}
</script>
<style lang="sass">
  @import "../../static/sass/grid.sass"
  @import "../../static/sass/common.sass"

  $bright-blue: #0084ff
  $nav-height: 5rem
  body
    font-size: 1.6rem
  nav
    width: 100%
    height: $nav-height
    background: #fff
    box-shadow: 0 .1rem .2rem 0 #ccc
  .nav-container
    margin: 0 auto
    height: 100%
  .nav-content
    box-shadow: 0 0 .3rem 0 #ccc
    height: 100%
    padding: 0
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
  .sidebar-con-container
    height: 40rem
    border-radius: .3rem
    box-shadow: 0 0 .3rem 0 #ccc
  .sidebar-info-container
    height: 15rem
    border-radius: .3rem
    background: #ddd
    margin-top: 1.5rem
  .card-container
    pdding-bottom: 1rem
    border-radius: .3rem
    box-shadow: 0 0 .3rem 0 #ccc
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

  .nav-left
    height: 100%
    div
      vertical-align: top
      display: inline-block
  .nav-right
    height: 100%
    .nav-title
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
  .nav-title
    margin-top: 1.5rem
    margin-left: 2rem
    height: 80%
    ul
      li
        font-size: 1.5rem
        float: left
        margin: 0 1.5rem
  .search-container
    margin-top: 1rem
    margin-left: 2rem
    width: 30rem
    height: 80%
  .input-search
    background: #f6f6f6
    font-size: 1.4rem
    margin: 0 .5rem
    width: 25rem
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
  @media (max-width: 992px)
    .sidebar-container
      display: none
    .content-container
      float: none
      padding: 0
    .nav-right
      padding-right: .5rem
  @media (max-width: 870px)
    .nav-left
      .media-hide-container
        display: none
  @media (max-width: 500px)
    .nav-right
      .right-icon
        display: none
</style>


