<template>
  <div class="container">
    <div class="panel">
      <div class="logo flex-horizental-center">
        <img src="../../static/img/logo.png">
      </div>
      <div class="title">在解决问题中提升你的境界</div>
      <div class="login-form">
        <div class="input-form Input-wrapper Input-account">
          <input placeholder="你的用户名" class="Input" type="text" value="123">
        </div>
        <div class="input-form Input-wrapper Input-password">
          <input placeholder="密码" class="Input" type="password">
        </div>
        <div class="Button-wrapper">
          <button class="Button login-btn">登陆</button>
        </div>
      </div>
      <div class="bottom">
        <p>没有账号？<a href="#">注册</a></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="sass">
  /* 变量定义 */
  $login-bg-img: "../../static/img/login-bg.png"
  $white: #fff
  $base-color: #0084ff

  html
    /* 1em = 10px */
    font-size: 62.5%
  .container
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    background: url($login-bg-img)
    background-size: 100% 100%
  .panel
    position: absolute
    $width: 34.2rem
    $height: 43rem
    height: $height
    width: $width
    top: 45%
    left: 50%
    margin-left: -$width/2
    margin-top: -$height/2
    background: $white
    border-radius: 5px
    box-shadow: 0px 0px .1rem 0px #ddd
    overflow: hidden
  .logo
    margin-top: 3rem
  .flex-horizental-center
    /* flex布局 */
    display: flex
    display: -webkit-flex
    justify-content: center
  .title
    margin-top: 1rem
    text-align: center
    font-size: 2.2rem
    letter-spacing: 0
    color: $base-color
  .login-form
    padding-top: .5rem
  .Input
    display: block
    width: 100%
    height: 4.8rem
    font-size: 1.4rem
    padding: 0
    background: transparent
    border: none
    outline: none
    resize: none
  .Input-wrapper
    position: relative
    width: 80%
    margin: 0 auto
    height: 4.8rem
    padding: 0
    font-size: 1.4rem
    background: #fff
    border-bottom: .1rem solid #ebebeb
    box-sizing: border-box
    transition: background .2s,border .2s
  .Input-password
    margin-top: 1rem
  .Button-wrapper
    width: 80%
    margin: 0 auto
    margin-top: 2rem
  .Button
    color: #fff
    width: 100%
    background-color: #0084ff
    padding: 0 1.6rem
    font-size: 1.4rem
    line-height: 3rem
    text-align: center
    cursor: pointer
    border: .1rem solid
    border-radius: .3rem

  .bottom
    position: absolute
    display: flex
    display: -webkit-flex
    bottom: 0
    width: 100%
    height: 6rem
    background: #f6f6f6
    box-shadow: 0 0 .1rem 0 #ccc
    align-items: center
    justify-content: center
    p
      display: flex
      display: -webkit-flex
      font-size: 1.6rem
      
</style>


