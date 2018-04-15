<template>
  <div id="select">
    <p class="title">问题内容？</p>
    <ul>
      <li class="A" :class="{wrong: wrongs.A,checked:selected=='A'}" @click="checked('A')">{{ question.options[0].content }}</li>
      <li class="B" :class="{wrong: wrongs.B,checked:selected=='B'}" @click="checked('B')">{{ question.options[1].content }}</li>
      <li class="C" :class="{wrong: wrongs.C,checked:selected=='C'}" @click="checked('C')">{{ question.options[2].content }}</li>
      <li class="D" :class="{wrong: wrongs.D,checked:selected=='D'}" @click="checked('D')">{{ question.options[3].content }}</li>
    </ul>
    <p class="btn-wrap">
      <Button v-if="!isSubmit" class="btn" size="large" shape="circle" type="info" @click="submit">提交</Button>
      <Button v-if="isRight" class="btn" size="large" shape="circle" type="success" @click="back">回答正确，返回首页</Button>
      <Button v-if="isFalse" class="btn" size="large" shape="circle" type="error">回答错误，请重新选择</Button>
    </p>
    <p class="toAnswer">
      <span>出题人:{{ question.toAnswer }}</span>
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
        A: false,
        B: false,
        C: false,
        D: false
      },
      question: {
        content: "这是问题的内容",
        options: [
          {
            content: "选项3",
          },
          {
            content: "选项4",
          },
          {
            content: "选项2",
          },
          {
            content: "选项1",
          },
        ],
        correct: "C",
        toAnswer: "这是一道送分题，超级简单"
      }
    }
  },
  methods: {
    checked(val) {
      if(this.isRight) return
      this.resetBtn()
      this.resetItem()
      if(val == this.selected) {
        this.selected = ""
        return
      }
      this.selected = val
    },
    submit() {
      this.isSubmit = true
      console.log("提交答案")
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
    li.A:before
      content: "A ."
      padding-right: 1rem
      margin-right: 1rem
      height: 100%
    li.B:before
      content: "B ."
      padding-right: 1rem
      margin-right: 1rem
      height: 100%
    li.C:before
      content: "C ."
      padding-right: 1rem
      margin-right: 1rem
      height: 100%
    li.D:before
      content: "D ."
      padding-right: 1rem
      margin-right: 1rem
      height: 100%
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
</style>

