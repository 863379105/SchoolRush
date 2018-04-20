<template>
  <div id="select">
    <p class="title">{{ question.q }}</p>
    <ul>
      <li class="A" :class="{wrong: wrongs.A,checked:selected=='A'}" @click="checked('A')">{{ question.options.A }}</li>
      <li class="B" :class="{wrong: wrongs.B,checked:selected=='B'}" @click="checked('B')">{{ question.options.B }}</li>
      <li class="C" :class="{wrong: wrongs.C,checked:selected=='C'}" @click="checked('C')">{{ question.options.C }}</li>
      <li class="D" :class="{wrong: wrongs.D,checked:selected=='D'}" @click="checked('D')">{{ question.options.D }}</li>
    </ul>
    <p class="btn-wrap">
      <Button :disabled="btnDisable" class="btn" size="large" shape="circle" :type="btnType" @click="submit">
        <Spin size="large" v-if="loading"></Spin>
        <span v-if="!loading">{{ btnText }}</span>
      </Button>
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
      loading: false,
      btnType: "info",
      btnText: "提交",
      btnDisable: false
    }
  },
  methods: {
    checked(val) {
      //被选中时
      if(this.isRight || this.btnDisable) return
      this.resetBtn()
      this.resetItem()
      if(val == this.selected) {
        this.selected = ""
        return
      }
      this.selected = val
    },
    submit() {
      if(this.isRight) this.back()
      if(this.selected == "") {
        this.btnDisable = true
        let num = 2
        this.btnText = "请选择选项(3)"
        let timer = setInterval(() => {
          if(num == 0) {
            this.resetBtn()
            clearInterval(timer)
            return
          }
          this.btnText = "请选择选项"
          this.btnText = this.btnText + "(" + num + ")"
          num--
        }, 1000)
        return
      }
      this.isSubmit = true
      let data = {
        uid: this.question.user.id,
        qid: this.question.id,
      }
      if(this.selected == this.question.correct) {
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
      //将选项的红色标记去掉
      this.wrongs[this.selected] = false
    },
    resetItem() {
      this.$set(this.wrongs, this.selected, "")
    },
    back() {
      this.$router.push("/index")
    },
  },
  props: ["question", "handeling"],
  watch: {
    handeling(now, old) {
      if(old == false && now == true) {
        //由false变为true
        this.loading = true
        return
      }
      this.loading = false
      if(this.isFalse)
        this.wrongs[this.selected] = true
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
      if(!old && now) {
        this.btnText = "回答错误，请重新选择(5)"
        let num = 5
        this.btnDisable = true
        let timer = setInterval(() => {
          if(num == 0) {
            this.resetBtn()
            clearInterval(timer)
            return
          }
          this.btnText = "回答错误，请重新选择" + "(" + num + ")"
          num--
        }, 1000)
      }
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

