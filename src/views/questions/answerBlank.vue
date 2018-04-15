<template>
  <div id="select">
    <p class="title">填空题<span>直接输入你的答案，检测到答案正确后，输入框会变为绿色</span></p>
      <p class="question">
        {{"空格之前"}}
        <input type="text" v-model="answer" :disabled="isRight" class="answer" :class="{'answer-right': isRight}" placeholder="请输入你的答案">
        {{"空格之后"}}
      </p>
    <p class="btn-wrap">
      <Button v-if="isRight" class="btn" size="large" shape="circle" type="success" @click="back">回答正确，返回首页</Button>
    </p>
    <p class="toAnswer">
      <span>{{ "出题人: 这是一道简单题，送分题" }}</span>
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
      question: {
        id: 1,
        pre: "问题前半部分",
        suf: "问题后半部分",
        correct: "3", //正确答案
        toAnswer: "这是一道简单的送分题"
      },
    }
  },
  methods: {
    fillin(val) {
      if(this.isRight) return
      this.resetBtn()
      this.resetItem()
      if(val == this.selected){
        this.selected = ""
        return
      }
      this.selected = val
    },
    submit() {
      this.isSubmit = true
      if(this.selected == this.question.correct)
        this.isRight = true
      else{
        this.wrongs[this.selected] = true
        this.isFalse = true
      }
      console.log(this.selected)
    },
    resetBtn() {
      this.isSubmit = false
      this.isRight = false
      this.isFalse = false
    },
    resetItem() {
      this.hasWrong = false
    },
    back() {
      this.$router.push("./index")
    }
  },
  watch: {
    answer(newVal, oldVal) {
      console.log(newVal)
      if(newVal == this.question.correct)
        this.isRight = true
    }
  }
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
    color: #ddd
input.answer:-moz-placeholder
    color: #ddd
input.answer::-moz-placeholder
    color: #ddd
input.answer:-ms-input-placeholder
    color: #ddd
</style>

