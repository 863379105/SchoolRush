<template>
  <div id="select">
    <p class="title">填空题<span>直接输入你的答案，检测到答案正确后，输入框会变为绿色</span></p>
      <p class="question">
        {{ question.q.pre }}
        <input type="text" v-model="answer" :disabled="isRight || btnDisable" class="answer" :class="{'answer-right': isRight && !loading}" placeholder="请输入你的答案">
        {{ question.q.suf }}
      </p>
    <p class="btn-wrap">
     <Button :disabled="btnDisable" class="btn" size="large" shape="circle" :type="btnType" @click="submit">
        <Spin size="large" v-if="loading"></Spin>
        <span v-if="!loading">{{ btnText }}</span>
      </Button>
    </p>
    <p class="toAnswer">
      <span>出题人: {{ question.toAnswer }}</span>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      answer: "",
      isSubmit: false,
      isRight: false,
      isFalse: false,
      loading: false,
      btnType: "info",
      btnText: "提交",
      btnDisable: false,
    }
  },
  methods: {
    submit() {
      this.answer = this.answer.trim()
      if(this.isRight) {
        this.back()
        return
      }
      if(this.answer == "") {
        this.btnText = "请填写答案后提交(3)"
        let num = 2
        this.btnDisable = true
        let timer = setInterval(() => {
          if(num == 0) {
            this.resetBtn()
            clearInterval(timer)
            return
          }
          this.btnText = "请填写答案后提交" + "(" + num + ")"
          num--
        }, 1000)
        return
      }
      let data = {
        uid: this.question.user.id,
        qid: this.question.id,
      }
      if(this.answer == this.question.correct) {
        //用户答题正确
        data.result = true
        this.isRight = true
      } else {
        //用户答题错误
        data.result = false
        this.isFalse = true
      }
      console.log(data)
      this.$emit("onAnswer", data)
    },
    resetBtn() {
      this.isSubmit     = false
      this.isRight      = false
      this.isFalse      = false
      this.btnType      = "info",
      this.btnText      = "提交",
      this.btnDisable   = false
    },
    back() {
      this.$router.push("./index")
    }
  },
  props: ["question", "handeling"],
  watch: {
    handeling(now, old) {
      if(old == false && now == true) {
        console.log("加载。。。")
        //由false变为true
        this.loading = true
        return
      }
      this.loading = false
    },
    loading(now, old) {
      if(!now && this.isRight) {
        this.btnType = "success"
        this.btnText = "回答正确，返回首页"
      }
      if(!now && this.isFalse) {
        this.btnType = "error"
      }
    },
    isFalse(now, old) {
      //选择错误之后要等待5才能继续
      if(now) {
        this.btnText = "回答错误，请重新作答(5)"
        let num = 5
        this.btnDisable = true
        let timer = setInterval(() => {
          if(num == 0) {
            this.resetBtn()
            this.answer = ""
            clearInterval(timer)
            return
          }
          this.btnText = "回答错误，请重新作答" + "(" + num + ")"
          num--
        }, 1000)
      }
    }
  },
}
</script>
<style lang="sass">
#select
  padding: 2rem
  p.title
    font-size: 2.2rem
    padding-bottom: 1rem
    border-bottom: .1rem solid #e7e7e7
    span
      padding: .5rem 1rem
      margin-left: 2rem
      font-size: 1.4rem
      background: #e9e9e9
  p.question
    width: 100%
    margin: 1rem 0
    font-size: 2rem
    border: .2rem solid #fff
    padding: 1.5rem 3rem
    cursor: pointer
  input
    width: auto
    text-align: center
    border: none
    margin-left: 1rem
    background: #2d8cf0
    padding: .5rem 2rem
    border-radius: .4rem
    color: #fff
  input:focus
    outline: none
  input.wrong
    background: #ff9900
  input.answer-right
    background: #19be6b
  p.btn-wrap
    text-align: center
    button.btn
      padding: 1rem 3rem
      font-size: 2rem
      height: 5.1rem
      overflow: hidden
  .toAnswer
    margin-top: 1rem
    padding: 1.5rem 0
    font-size: 1.8rem
    border-top: .1rem solid #e9e9e9
    span
      background: #e9e9e9
      font-size: 1.7rem
      padding: 1rem 2rem
      border-radius: .5rem

  input.answer::-webkit-input-placeholder
      color: #efefef
  input.answer:-moz-placeholder
      color: #efefef
  input.answer::-moz-placeholder
      color: #efefef
  input.answer:-ms-input-placeholder
      color: #efefef
</style>

