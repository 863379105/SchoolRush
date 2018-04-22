<template>
  <div id="com-app">
    <Col span="24">
      <p class="userinfo-avatar">
        <img class="circle-img" src="../../../static/img/avatar.jpg" alt="iimT">
        <Icon v-if="isAdmin" @click.native="toSettings" class="settings" type="gear-a"></Icon>
      </p>
      <p class="userinfo-username">iimT</p>
    </Col>
    <Col span="24">
      <p class="userinfo-locate-school">
        <Tag type="border" color="green">浙江</Tag>
        <Tag type="border" color="blue">绍兴文理学院</Tag>
      </p>
    </Col>
    <Col class="user-info-followed" span="12">
      <p class="num">0</p>
      <p class="title">关注了</p>
    </Col>
    <Col class="user-info-follower" span="12">
      <p class="num">0</p>
      <p class="title">关注者</p>
    </Col>
    <Col class="answerPie-container" span="12">
      <!-- 擅长领域的饼图 -->
      <div id="answerPie" :style="{width: '230px', height: '200px', margin: '0 auto'}"></div>
    </Col>
    <Col class="answerPie-container" span="12">
      <!-- 其他数据的饼图 -->
      <div id="Pie" :style="{width: '230px', height: '200px', margin: '0 auto'}"></div>
    </Col>
    <p class="userinfo-qinfo">
      <Col span="8">
        <Col class="userhome-data-num" span="24">
          {{ userInfo.solveInfo.passedNum }}
        </Col>
        <Col class="userhome-data-text" span="24">
          解决问题
        </Col>
      </Col>
      <Col span="8">
        <Col class="userhome-data-num" span="24">
          {{ getUserPassRate() }}
        </Col>
        <Col class="userhome-data-text" span="24">
          通过率
        </Col>
      </Col>
      <Col span="8">
          <Col class="userhome-data-num" span="24">
            {{ userInfo.solveInfo.tobeSolvedNum }}
          </Col>
          <Col class="userhome-data-text" span="24">
            待解决
          </Col>
        </Col>
    </p>
  </div>
</template>
<script>
let echarts = require("echarts/lib/echarts")
// 引入柱状图组件
require("echarts/lib/chart/pie")
// 引入提示框和title组件
require("echarts/lib/component/tooltip")
require("echarts/lib/component/title")

export default {
  data() {
    return {
      isAdmin: false,
      userInfo: {
        avatar: "",
        campusID: "",
        campusInfo: {},
        describe: "",
        email: "",
        gender: "",
        id: "",
        identify: "",
        majorID: "",
        majorInfo: {},
        name: "",
        tel: "",
        vice: "",
        solveInfo: {},
      },
    }
  },
  methods: {
    drawAnswerPie() {
      // 绘制个人擅长图表
      let myChart = echarts.init(document.getElementById("answerPie"));
      myChart.setOption({
        title: {
          text: "擅长领域",
          left: 'center',
          textStyle: {
            fontSize: "16",
            fontWeight: "normal"
          }
        },
        series: {
          type: "pie",
          center: ["50%", "55%"],
          radius: ["35%","75%"],
          avoidLabelOverlap: false,
          labelLine: {
            normal: {
              show: false
            }
          },
          label: {
            normal: {
              show: false,
              position: "center",
            formatter: "{b} : {d}%"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "17",
                textBorderColor: "#fff",
                textBorderWidth: "3",
                textShadowOffsetY: "0",
                textShadowOffsetX: "0",
                textShadowBlur: "15",
                textShadowColor: "#ccc"
              }
            }
          },
          data: [
            { name: "计算机科学与技术", value: 1000, selected: true },
            { name: "网络工程", value: 900 },
            { name: "自动化", value: 851 },
            { name: "金融", value: 851 },
            { name: "软件工程", value: 851 }
          ],
          itemStyle: {
            //阴影
            normal: {
              shadowBlur: 10,
              shadowColor: "rgba(0, 0, 0, 0.5)",
              color: function (o){
                  let color = ["#2db7f5","#19be6b","#f90", "#2d8cf0","#ed3f14"]
                  return color[o.dataIndex]
              }
            }
          }
        }
      })
    },
    drawPie() {
      // 绘制个人擅长图表
      let myChart = echarts.init(document.getElementById("Pie"));
      myChart.setOption({
        title: {
          text: "其他饼图",
          left: 'center',
          textStyle: {
            fontSize: "16",
            fontWeight: "normal"
          }
        },
        series: {
          type: "pie",
          center: ["50%", "55%"],
          radius: ["35%","75%"],
          avoidLabelOverlap: false,
          labelLine: {
            normal: {
              show: false
            }
          },
          label: {
            normal: {
              show: false,
              position: "center",
            formatter: "{b} : {d}%"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "18",
                textBorderColor: "#fff",
                textBorderWidth: "3",
                textShadowOffsetY: "0",
                textShadowOffsetX: "0",
                textShadowBlur: "15",
                textShadowColor: "#ccc"
              }
            }
          },
          data: [
            { name: "计算机科学与技术", value: 1500 },
            { name: "网络工程", value: 600 },
            { name: "自动化", value: 851 },
            { name: "金融", value: 851, selected: true},
            { name: "软件工程", value: 851 }
          ],
          itemStyle: {
            //阴影
            normal: {
              shadowBlur: 10,
              shadowColor: "rgba(0, 0, 0, 0.5)",
              color: function (o){
                  let color = ["#2db7f5","#19be6b","#f90", "#2d8cf0","#ed3f14"]
                  return color[o.dataIndex]
              }
            }
          }
        }
      })
    },
    toSettings() {
      this.$router.push("/settings")
    },
    judgeAdmin() {
      let user = JSON.parse(localStorage.getItem("userinfo"))
      if(user.id == this.uid)
        this.isAdmin = true
    },
    getUserInfo() {
      let uid = localStorage.getItem("uid");
      let url = this.$API.getService("User", "getById");
      let that = this;

      this.$API
        .post(url, {
          id: uid
        })
        .then((res) => {
          let Uinfo = res.data.data
          for(var i in Uinfo) {
            that.$set(that.userInfo, i, Uinfo[i])
          }
          //画饼图
          that.drawAnswerPie()
          that.drawPie()
          localStorage.setItem("userinfo", JSON.stringify(Uinfo))
        })
        .catch(err => {
          console.log(err);
        });
    },
    getUserPassRate() {
      let solved = this.userInfo.solveInfo
      if(solved.tobeSolvedNum + solved.passedNum == 0) return "0%"
      let hund = solved.passedNum/(solved.tobeSolvedNum + solved.passedNum) * 10000
      let intNum = parseInt(hund)
      return intNum/100 + "%"
    },
  },
  mounted() {
    this.getUserInfo()
    this.judgeAdmin()
  },
  props: ["uid"]
}
</script>
<style lang="sass">
#com-app
  p
    text-align: center
  .user-info-followed,.user-info-follower
    padding: 1rem 0
    p.title
      font-size: 1.6rem
      border-bottom: .1rem solid #e6e6e6
      padding-bottom: .5rem
    p.num
      font-size: 2.3rem
      font-weight: bold
.school-badge
  border-radius: 50%
.userinfo-avatar
  height: 10rem
  position: relative
  img
    box-shadow: 0 0 1rem 0 #ccc
  .settings
    position: absolute
    padding: 1rem 1.5rem
    right: .5rem
    top: 0
    font-size: 2rem
    cursor: pointer
    border-radius: .5rem
  .settings:hover
    background: #e6e6e6
.answerPie-container
  margin-top: 1rem
.userinfo-username
  font-size: 2.3rem
  font-weight: bold
  line-height: 5rem
.userinfo-qinfo
  display: block
.userhome-data-num
  font-size: 2.3rem
  font-weight: bold
  margin-top: 2rem
.userhome-data-text
  font-size: 1.4rem
#answerPie
  float: right
#Pie
  float: left
</style>

