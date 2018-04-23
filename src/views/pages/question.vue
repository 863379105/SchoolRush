<template>
  <!-- 题目通用页面 -->
  <div class="app question">
    <!-- 导航条下面内容与侧边栏部分开始 -->
    <div class="container grid-container">
      <div class="grid-no-padding col-lg-11 col-md-12 col-sm-12 col-xs-12">
        <!-- 内容部分开始 -->
        <div class="row content-container col-lg-9 col-md-9">
          <div v-if="found" class="card-container">
            <a-select :question="question" @onAnswer="handelAnswer" :handeling="handeling" @ v-if="question.type==1"></a-select>
            <a-judge :question="question" @onAnswer="handelAnswer" :handeling="handeling" v-else-if="question.type==2"></a-judge>
            <a-blank :question="question" @onAnswer="handelAnswer" :handeling="handeling" v-else-if="question.type==3"></a-blank>
          </div>
          <div v-if="found" class="card-container">
            <comment :qid="$route.params.id"></comment>
          </div>
          <not-found v-if="!found"></not-found>
        </div>
        <!-- 内容部分结束 -->
        <!-- 右侧边栏开始 -->
        <div class="row sidebar-container col-lg-offset-9 col-md-offset-9 col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <sidebar></sidebar>
        </div>
        <!-- 右侧边栏结束 -->
      </div>
    </div>
  </div>
</template>
<script>
//引入答题组件
import answerSelect from "../questions/answerSelect"
import answerJudge from "../questions/answerJudge"
import answerBlank from "../questions/answerBlank"
import comment from "../questions/comments"
import sidebar from "../common/sidebar"
import notFound from "./404"

export default {
  data() {
    //this.$route.params.id 就是浏览器中传过来的参数
    return {
      question: {},
      found: true,
      handeling: false
    };
  },
  methods: {
    getLatestPassed() {

    },
    handelAnswer(data){
      //当子组件传过来用户提交题目时
      let action = "PassedQuestion"
      if(!data.result) {
        //用户回答错误
        action = "SolveQuestion"
      }
      delete data["result"] //删除一个键 轻量化传入后台的数据

      const that = this
      const url = this.$API.getService("Usertoq", action)

      this.handeling = true
      this.$API.post(url, data).then((res) => {
        setTimeout(() => {
          that.handeling = false
        },1500)
      })
      console.log(data)
    },
    getQuestion() {
      let id = this.$route.params.id
      const that = this
      const url = this.$API.getService("Question", "getById")

      this.$API.post(url,{id: id})
      .then((res) => {
        console.log(res.data.data)
        if(res.data.data.res == false) {
          that.found = false
          return
        }
        that.question = res.data.data
      })
    }
  },
  mounted() {
    //获取题目类型
    this.getQuestion()
  },
  components: {
    aSelect: answerSelect,
    aJudge: answerJudge,
    aBlank: answerBlank,
    Comment: comment,
    sidebar,
    notFound,
  }
};
</script>
<style lang="sass">
.question
  .q-content
    background: #e6e6e6
    padding: 2rem
    margin-top: 1rem
    border-radius: .5rem
$bright-blue: #0084ff
.container
  margin: 0 auto
.content-container
  float: left
  padding: 0
  margin: 0
  padding-right: .5rem
  margin-bottom: 1rem
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
.school-badge
  width: 5rem
  border-radius: 50%
.campus-name
  font-size: 1.8rem
  font-weight: bold
.answerPie-container
  padding-top: .5rem
  #answerPie
    margin: 0 auto
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