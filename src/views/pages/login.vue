<template>
  <div class="login-container">
    <div class="panel">
      <div class="logo flex-horizental-center">
        <img src="../../static/img/logo.png">
      </div>
      <div class="login-title">设计问题来分享你擅长的知识</div>
      <div v-if="isLoginPanel" class="login-form">
        <div class="input-form Input-wrapper Input-account">
          <input v-model="loginInfo.username.value" :placeholder="loginInfo.username.placeholder" :class="{warn:loginInfo.username.va}" class="Input" type="text" value="123">
        </div>
        <div class="input-form Input-wrapper Input-password">
          <input v-model="loginInfo.password.value" :placeholder="loginInfo.password.placeholder" :class="{warn:loginInfo.password.va}" class="Input" type="password">
        </div>
        <div class="Button-wrapper">
          <button class="Button login-btn" @click="login">登陆</button>
        </div>
      </div>
      <div v-else class="login-form">
        <div class="input-form Input-wrapper Input-email">
          <input v-model="registerInfo.email.values" :placeholder="registerInfo.email.placeholder" :class="{warn:registerInfo.email.va}" class="Input" type="email">
        </div>
        <div class="input-form Input-wrapper Input-account">
          <input v-model="registerInfo.username.value" :placeholder="registerInfo.username.placeholder" :class="{warn:registerInfo.username.va}" class="Input" type="text">
        </div>
        <div class="input-form Input-wrapper Input-password">
          <input v-model="registerInfo.password.value" :placeholder="registerInfo.password.placeholder" :class="{warn:registerInfo.password.va}" class="Input" type="password">
        </div>
        <div class="input-form Input-wrapper Input-password">
          <input v-model="registerInfo.validpass.value" :placeholder="registerInfo.validpass.placeholder" :class="{warn:registerInfo.validpass.va}" class="Input" type="password">
        </div>
        <div class="Button-wrapper">
          <button class="Button login-btn" @click="register">注册</button>
        </div>
      </div>
      <div class="bottom">
        <p v-if="isLoginPanel">没有账号？<a @click="triggleLogin" href="#">注册</a></p>
        <p v-else>已有账号？<a @click="triggleLogin" href="#">登陆</a></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginInfo: {
        username: {
          value: '',
          va: false,
          placeholder: '邮箱'
        },
        password: {
          value: '',
          va: false,
          placeholder: '密码'
        },
      },
      registerInfo: {
        email: {
          value: '',
          va: false,
          placeholder: '邮箱'
        },
        username: {
          value: '',
          va: false,
          placeholder: '用户名'
        },
        password: {
          value: '',
          va: false,
          placeholder: '密码'
        },
        validpass: {
          value: '',
          va: false,
          placeholder: '确认密码'
        }
      },
      isLoginPanel: false
    }
  },
  methods: {
    triggleLogin() {
      this.isLoginPanel = !this.isLoginPanel
    },
    login() {
      let validRes = this.valid(this.loginInfo)
      if(validRes) {
        this.$router.replace("/index")
      }
    },
    register() {
      let validRes = this.valid(this.registerInfo)
      console.log(validRes)
      console.log(this.registerInfo)
    },
    valid(obj) {
      console.log(obj)
      let flag = true
      for (let i in obj) {
        if(obj[i].value == "") {
          flag = false
          this.$set(obj[i], 'va', true)
          let placeholder = obj[i].placeholder
          if(placeholder.indexOf("请输入") == -1)
            this.$set(obj[i], 'placeholder', '请输入' + obj[i].placeholder)
        }
      }
      if(!obj.hasOwnProperty("validpass")) return flag
      if(obj.password.value.trim() != "" && obj.password.value.trim() != obj.validpass.value.trim()) {
        //密码不为空 而且两次输入密码不同
        flag = false
        //置空两个密码输入框
        this.$set(obj.password, "value", "")
        this.$set(obj.validpass, "value", "")
        //提示框的颜色变成红色
        this.$set(obj.password, 'va', true)
        this.$set(obj.validpass, 'va', true)

        this.$set(obj.validpass, "placeholder", "两次输入的密码不一致")
      }
      return flag
    }
  }
}
</script>
<style lang="sass">
  @import "../../static/sass/common.sass"
  /* 变量定义 */
  $login-bg-img: "../../static/img/login-bg.png"
  $white: #fff
  $base-color: #0084ff

  .login-container
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    background: url($login-bg-img)
    background-size: 100% 100%
  .panel
    position: absolute
    $width: 43.2rem
    $height: 43rem
    width: $width
    top: 45%
    left: 50%
    margin-left: -$width/2
    margin-top: -$height/2
    background: $white
    border-radius: 5px
    box-shadow: 0px 0px .1rem 0px #ddd
    overflow: hidden
  .flex-horizental-center
    /* flex布局 */
    display: flex
    display: -webkit-flex
    justify-content: center
  .login-title
    margin-top: 1rem
    text-align: center
    font-size: 2.2rem
    letter-spacing: 0
    color: $base-color
  .login-form
    padding-top: .5rem
    display: block
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
    margin-bottom: 8rem
  .Button
    color: #fff
    width: 100%
    background-color: #0084ff
    padding: .3rem 1.6rem
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


