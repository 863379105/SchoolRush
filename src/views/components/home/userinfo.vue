<template>
  <div id="com-app">
    <Col span="24">
      <p class="userinfo-avatar"><img class="circle-img" src="../../../static/img/avatar.jpg" alt="iimT"></p>
      <p class="userinfo-username">iimT</p>
    </Col>
    <Col span="24">
      <p class="userinfo-locate-school">
        <Tag type="border" color="green">浙江</Tag>
        <Tag type="border" color="blue">绍兴文理学院</Tag>
      </p>
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
          568
        </Col>
        <Col class="userhome-data-text" span="24">
          解决问题
        </Col>
      </Col>
      <Col span="8">
        <Col class="userhome-data-num" span="24">
          68.5%
        </Col>
        <Col class="userhome-data-text" span="24">
          通过率
        </Col>
      </Col>
      <Col span="8">
          <Col class="userhome-data-num" span="24">
            8
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
    }
  },
  mounted() {
    this.drawAnswerPie()
    this.drawPie()
  }
  
}
</script>
<style lang="sass">
  #com-app
    p
      text-align: center
  .school-badge
    border-radius: 50%
  .userinfo-avatar
    height: 10rem
    img
      box-shadow: 0 0 1rem 0 #ccc
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

