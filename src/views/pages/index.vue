<template>
  <div class="app">
    <!-- 导航条部分开始 -->
    <nav>
      <div class="grid-container nav-container">
        <div class="nav-content col-xs-offset-1 col-lg-11 col-md-11 col-sm-11 col-xs-11">
          <div class="left nav-left">
            <div class="div-inline logo">
              <img class="Img img-auto-fit" src="../../static/img/small-logo.png" alt="SchoolRush">
              <div>SchoolRush</div>
            </div>
            <div class="div-inline search-container">
              <input type="text" class="Input input-search">
            </div>
          </div>
          <div class="right nav-right">
            右边部分
          </div>
        </div>
      </div>
    </nav>
    <!-- 导航条部分结束 -->
    <!-- 导航条下面内容与侧边栏部分开始 -->
    <div class="container grid-container">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <!-- 内容部分开始 -->
        <div class="row content-container col-lg-8">
          <div class="card-container">
            卡片内容样式
          </div>
        </div>
        <!-- 内容部分结束 -->
        <!-- 右侧边栏开始 -->
        <div class="row sidebar-container col-lg-4">
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
    margin: 0 1.5rem
    height: 100%
  .container
    margin: 0 auto
    margin-top: 1rem
  .sidebar-container
    width: 30%
    margin-left: 1rem
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
    height: 20rem
    margin: .5rem 0
    border-radius: .3rem
    box-shadow: 0 0 .3rem 0 #ccc
  .nav-left
    height: 100%
  .div-inline
    display: inline-block
  .logo
    height: 100%
    div
      margin-left: .3rem
      color: $bright-blue
      font-size: 3rem
      margin-top: 0
      display: inline-block
      line-height: 5rem
      vertical-align: top
  .Img
    vertical-align: top
  .img-auto-fit
    height: 100%
  .search-container
    margin-top: 0
    width: 30rem
    height: 80%
  .input-search
    font-size: 1.4rem
    padding: .5rem .8rem
    border: none
    margin-left: .5rem
    border-radius: .3rem
    box-shadow: 0 0 .3rem 0 #ccc
  .input-search:focus
    outline: none
  .Input
    width: 100%
</style>


