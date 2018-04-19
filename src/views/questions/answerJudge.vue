<template>
  <div id="select">
    <p class="title">{{ question.content }}</p>
    <ul>
      <li class="T" :class="{wrong: wrongs.T,checked:selected=='T'}" @click="checked('T')">正确</li>
      <li class="F" :class="{wrong: wrongs.F,checked:selected=='F'}" @click="checked('F')">错误</li>
    </ul>
    <p class="btn-wrap">
      <Button v-if="!isSubmit" class="btn" size="large" shape="circle" type="info" @click="submit">提交</Button>
      <Button v-if="isRight" class="btn" size="large" shape="circle" type="success" @click="back">回答正确，返回首页</Button>
      <Button v-if="isFalse" class="btn" size="large" shape="circle" type="error">回答错误，请重新选择</Button>
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
      selected: "",
      isSubmit: false,
      isRight: false,
      isFalse: false,
      wrongs: {
        T: false,
        F: false,
      },
      question: {
        id: 1,
        content: "这是问题的内容？",
        correct: "T", //正确答案
        toAnswer: "这是一道简单的送分题"
      },
      //TODO: 选择错误之后 需要等待5秒钟时候才能重新选择
    }
  },
  methods: {
    checked(val) {
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
      this.$set(this.wrongs, this.selected, "")
    },
    back() {
      this.$router.push("./index")
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
  ul
    li
      width: 100%
      margin: 1rem 0
      font-size: 2rem
      border: .2rem solid #fff
      background: #2d8cf0
      color: #fff
      padding: 1.5rem 3rem
      border-radius: 4rem
      cursor: pointer
    li:hover
      background: #5cadff
    li.checked
      background: #19be6b
    li.checked:hover
      background: #19be6b
    li.wrong
      background: #ed3f14
    li.wrong:hover
      background: #ed3f14
    li.T:before
      content: "√"
      padding-right: 1rem
      margin-right: 1rem
      height: 100%
    li.F:before
      content: "×"
      padding-right: 1rem
      margin-right: 1rem
      height: 100%
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
</style>

