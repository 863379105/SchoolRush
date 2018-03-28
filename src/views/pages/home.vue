<template>
  <div class="app">
    <div class="container grid-container">
      <div class="grid-no-padding col-lg-11 col-md-12 col-sm-12 col-xs-12">
        <Row>
          <div class="user-card card" style="background-image: '../../static/img/user-home-bg.jpg'">
            <Row type="flex" justify="center">
              <Col class="userinfo-panel" type="flex" justify="center" :lg="12" :md="12" :sm="12" :xs="24">
                <v-userinfo-com></v-userinfo-com>
              </Col>
              <Col type="flex" justify="center" :lg="12" :md="12" :sm="12" :xs="24">
                <v-campusinfo-com></v-campusinfo-com>
              </Col>
            </Row>
          </div>
          <Col class="calendarHeatMap-container card" span="24">
            <Col style="margin: -2rem 0;height: 16rem;" span="3">
              <div class="liveness-left">
                  近一年活跃
              </div>
            </Col>
            <Col span="21">
              <!-- 用户活跃的热点图 -->
              <div id="calendarHeatMap" :style="{width: '730px', height: '120px', margin: '0 auto'}"></div>
            </Col>
              <div class="heatMapTip">
                <ul>
                  <li class="low">低</li>
                  <li class="square lv1"></li>
                  <li class="square lv2"></li>
                  <li class="square lv3"></li>
                  <li class="square lv4"></li>
                  <li class="high">高</li>
                </ul>
              </div>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>
<script>
import vUserinfoCom from "../components/home/userinfo.vue";
import vCampusinfoCom from "../components/home/campus.vue";

let echarts = require("echarts/lib/echarts")
// 引入柱状图组件
require("echarts/lib/chart/heatmap")
// 引入提示框和title组件
require("echarts/lib/component/tooltip")
require("echarts/lib/component/title")

export default {
  data() {
    return {}
  },
  methods: {
    getVirtulData(year) {
      year = year || '2017';
      var date = +echarts.number.parseDate(year + '-01-01');
      var end = +echarts.number.parseDate((+year + 1) + '-01-01');
      var dayTime = 3600 * 24 * 1000;
      var data = [];
      for (var time = date; time < end; time += dayTime) {
          data.push([
              echarts.format.formatTime('yyyy-MM-dd', time),
              Math.floor(Math.random() * 1000)
          ]);
      }
      return data;
    },
    drawCalendarHeatMap() {
      // 绘制个人擅长图表
      let myChart = echarts.init(document.getElementById("calendarHeatMap"));
      let option = {
        tooltip: {
            position: 'top'
        },
        visualMap: {
            show: false,
            min: 1,
            max: 500,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            top: 'top',
            inRange: {
                color: ['#efefef', '#0084ff']
            },
        },
        calendar: [
        {
          left: "25",
          top: "20",
          range: '2017',
          cellSize: [13, 13],
          splitLine: false,
          itemStyle: {
              normal: {
                  color: "#ddd" ,
                  borderColor: "#fff",
                  borderWidth: 2
              }
          },
          yearLabel: {
              show: false
          },
          dayLabel: {
              firstDay: 1,
              nameMap: 'cn'
          },
        }],

        series: [{
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: 0,
            data: this.getVirtulData(2017),
            itemStyle: {
                normal: {
                    color: '#ff0000'
                }
            }
        }]
      }
      myChart.setOption(option)
    }
  },
  mounted() {
    this.drawCalendarHeatMap()
  },
  components: {
    vUserinfoCom,
    vCampusinfoCom
  }
};
</script>
<style lang="sass">
  .card
    border-radius: .3rem
    box-shadow: 0 0 0.3rem 0 #ccc
  .user-card
    padding: 2rem 0
    background-color: #fff
    //background: url("../../static/img/user-home-bg.jpg") no-repeat
    background-size: cover
    height: 30rem
    width: 100%
    height: 100%
  .calendarHeatMap-container
    overflow: hidden
    padding: 2rem 0
    paddint-bottom: 3rem
    margin: 1rem 0
    background: #fff
    overflow: hidden
    position: relative
    .heatMapTip
      position: absolute
      bottom: 1rem
      right: 5%
    .liveness-left
      top: 0
      bottom: 0
      height: 100%
      border-right: .1rem solid #ccc
      text-align: center
      line-height: 16rem
      font-size: 1.6rem
    ul
      li
        float: left
        margin: 0 .1rem
        font-size: 1.2rem
        line-height: 1.2rem
      .low
        margin-right: 1rem
      .high
        margin-left: 1rem
    .square
      width: 1.2rem
      height: 1.2rem
    .lv1
      background: #DFE8F0
    .lv2
      background: #9FCBF4
    .lv3
      background: #72B7F7
    .lv4
      background: #0084FF
  .userinfo-panel
    border-right: .2rem dotted #ccc
  @media (max-width: 768px)
    .calendarHeatMap-container
      display: none
</style>
