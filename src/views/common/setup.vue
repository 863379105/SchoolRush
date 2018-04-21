<template>
  <div>
    <Tabs value="select">
      <TabPane label="选择题" name="select">
        <v-select @onAddLabel="handelAddLabel" @submitQ="handelSubmit" :major-data="majorData" :label-data="labelData"></v-select>
      </TabPane>
      <TabPane label="判断题" name="judge">
        <v-judge @onAddLabel="handelAddLabel" @submitQ="handelSubmit" :major-data="majorData" :label-data="labelData"></v-judge>
      </TabPane>
      <TabPane label="填空题" name="blank">
        <v-blank @onAddLabel="handelAddLabel" @submitQ="handelSubmit" :major-data="majorData" :label-data="labelData"></v-blank>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
import vSelect from "../questions/select"
import vJudge from "../questions/judge"
import vBlank from "../questions/blank"
import utils from "../components/tools/utils"
export default {
  data() {
    return {
      majorData: [],
      labelData: [],
    }
  },
  components: {
    vSelect, vJudge, vBlank
  },
  methods:{
    getAllMajor() {
      let that = this
      let url = this.$API.getService("Major", "getAll")

      this.$API.post(url)
      .then((res) => {
        that.majorData = res.data.data
      })
      .catch((err) => {
        console.log(err)
        this.$Notice.error({
          title: "专业数据获取失败",
          desc: "请检查网络，或联系管理员提交BUG"
        })
      })
    },
    getAllLabel() {
      let that = this
      let url = this.$API.getService("Label", "getAll")

      this.$API.post(url)
      .then((res) => {
        that.labelData = res.data.data
      })
      .catch((err) => {
        console.log(err)
        this.$Notice.error({
          title: "专业数据获取失败",
          desc: "请检查网络，或联系管理员提交BUG"
        })
      })
    },
    handelAddLabel() {
      this.$emit("onAddLabel")
    },
    handelSubmit(question) {
      let Question = utils.copy(question)
      //添加问题
      let user = JSON.parse(localStorage.getItem("userinfo"))
      let labels = Question.labels
      delete Question.labels
      let first = true

      Question.uid = user.id
      Question.labels = ""
      for(var i in labels) {
        if(first) {
          first = false
          Question.labels += labels[i]
          continue
        }
        Question.labels += "," + labels[i]
      }
      
      //上传到服务器
      const that = this
      const url = this.$API.getService("Question", "add")

      this.$API.post(url, Question).then((res) => {
        console.log(res)
        that.$emit("onSueccess")
      }).catch((err) => {
        console.log(err)
        that.$emit("onError")
      })
    },
  },
  mounted() {
    this.getAllMajor()
    this.getAllLabel()
  },
};
</script>
