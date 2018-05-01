<template>
  <div class="sidebar">
    <div class="sidebar-item sidebar-userinfo-container">
            <Row type="flex" justify="center" align="middle" class="code-row-bg">
              <Col span="24">
              <p class="userinfo-avatar">
                <Avatar shape="square" size="large" :src="userInfo.avatar" />
              </p>
              <p class="userinfo-username">{{ userInfo.name}}</p>
              </Col>
              <Col span="24">
              <p class="userinfo-locate-school">
                <Tag color="green">{{ userInfo.campusInfo.locate }}</Tag>
                <Tag color="blue">{{ userInfo.campusInfo.name }}</Tag>
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
              <Col class="answerPie-container" span="24">
              <!-- 擅长领域的饼图 -->
              <div id="answerPie" :style="{width: '230px', height: '200px'}"></div>
              </Col>
              <p class="userinfo-qinfo">
                <Col span="8">
                <Col class="userinfo-data-num" span="24"> {{ userInfo.solveInfo.passedNum }}
                </Col>
                <Col span="24"> 解决问题
                </Col>
                </Col>
                <Col span="8">
                <Col class="userinfo-data-num" span="24"> {{ getUserPassRate() }}
                </Col>
                <Col span="24"> 通过率
                </Col>
                </Col>
                <Col span="8">
                <Col class="userinfo-data-num" span="24"> {{ userInfo.solveInfo.tobeSolvedNum }}
                </Col>
                <Col span="24"> 待解决
                </Col>
                </Col>
              </p>

            </Row>
          </div>
          <div class="sidebar-item school sidebar-userinfo-container">
            <Row>
              <p class="userinfo-school">
                <Col span="24" class="user-info-school-badge">
                  <Avatar shape="square" size="large" :src="userInfo.campusInfo.badge" />
                <Col span="24">
                <Col span="24">
                <p class="campus-name">{{ userInfo.campusInfo.name }}</p>
                </Col>
                <Col span="24"> {{ userInfo.majorInfo.name }}
                <Tag color="green">No.5</Tag>
                </Col>
                </Col>
                </Col>
              </p>
              <p class="userinfo-user-school">
                <Col span="24">
                <Col span="8">
                <Col class="userinfo-data-num" span="24"> 6%
                </Col>
                <Col span="24"> 贡献
                </Col>
                </Col>
                <Col span="8">
                <Col class="userinfo-data-num" span="24"> 99+
                </Col>
                <Col span="24"> 校园排行
                </Col>
                </Col>
                <Col span="8">
                <Col class="userinfo-data-num" span="24">{{ userInfo.campusInfo.members }}
                </Col>
                <Col span="24"> 成员
                </Col>
                </Col>
                </Col>
              </p>
            </Row>
          </div>
          <div class="sidebar-item sidebar-fastto-container">
              <ul class="fastto">
                <li><p><Icon type="checkmark-circled"></Icon>已通过</p></li>
                <li><p><Icon type="hammer"></Icon>正在解决</p></li>
                <li><p><Icon type="pricetags"></Icon>关注的标签</p></li>
                <li><p><Icon type="university"></Icon>关注的学校</p></li>
              </ul>
          </div>
          <div class="sidebar-info-container">
            <p>侵权举报网上有害信息举报专区</p>
            <p>违法和不良信息举报：010-82716601</p>
            <p>儿童色情信息举报专区</p>
            <p>联系我们 © 2018 SchoolRush</p>
          </div>
  </div>
</template>
<script>
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/pie");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  data() {
    return {
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
        series: {
          type: "pie",
          center: ["50%", "53%"],
          radius: ["45%", "68%"],
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
                textShadowBlur: "5",
                textShadowColor: "#ccc"
              }
            }
          },
          data: [
            {
              name: "计算机科学与技术",
              value: 1000,
              selected: true
            },
            {
              name: "网络工程",
              value: 900
            },
            {
              name: "自动化",
              value: 851
            },
            {
              name: "金融",
              value: 851
            },
            {
              name: "软件工程",
              value: 851
            }
          ],
          itemStyle: {
            //阴影
            normal: {
              shadowBlur: 10,
              shadowColor: "rgba(0, 0, 0, 0.5)",
              color: function(o) {
                let color = [
                  "#2db7f5",
                  "#19be6b",
                  "#f90",
                  "#2d8cf0",
                  "#ed3f14"
                ];
                return color[o.dataIndex];
              }
            }
          }
        },
        title: {
          text: "擅长领域",
          x: "center",
          textStyle: {
            fontSize: 14,
            fontWeight: "normal",
            color: "#000",
            fontFamily:
              "'Microsoft YaHei','serif' , 'monospace', 'Arial', 'Courier New'"
          }
        }
      });
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
          localStorage.setItem("userinfo", JSON.stringify(Uinfo));
          for (let i in Uinfo) {
            if (!Uinfo[i]) {
              that.jumpToSettings();
              break;
            }
          }

          //that.getAllMajor();
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
    }
  },
  mounted() {
    this.getUserInfo()
  }
}
</script>
<style lang="sass">
.ivu-col
  margin: 0
.sidebar-container
  .sidebar-userinfo-container
    .user-info-followed,.user-info-follower
      padding: 1rem 0
      padding-bottom: 0
      border-bottom: .1rem solid #eee
      p.title
        font-size: 1.6rem
      p.num
        font-size: 2.3rem
        font-weight: bold
    .userinfo-avatar
      .ivu-avatar-large
        width: 7rem
        height: 7rem
        margin-top: 2rem
  .user-info-school-badge
      .ivu-avatar-large
        width: 7rem
        height: 7rem
        margin-bottom: 1rem
.sidebar-container
  float: right
  margin-left: 0
  padding: 0
  margin: 0
  padding-left: .5rem
  position: absolute
  right: 0
  .sidebar-item
    border-radius: .3rem
    box-shadow: 0 0 .3rem 0 #ccc
    background: #fff
.latest-passed
  margin-top: 1rem
  .latest-passed-user
    margin: .5rem
    img
      height: 5rem
.sidebar-userinfo-container
  p
    text-align: center
    img.avatar
      height: 7rem
      margin-bottom: -2.5rem
      margin-top: 1rem
  p.title
    padding: .4rem 0
    border-bottom: .1rem solid #e7e7e7
  p.share-q
    margin: 1rem 0
    margin-top: -.5rem
    span
      font-size: 2.3rem
      font-weight: bold
  .userinfo-data-num
    font-size: 2.3rem
    font-weight: bold
  .userinfo-username
    padding: .5rem 0
    padding-top: 1rem
    font-size: 2rem
    font-weight: bold
  .userinfo-locate-school,.userinfo-qinfo,.userinfo-school,.userinfo-user-school
    padding: .5rem 0
  .userinfo-qinfo
    width: 100%
  .userinfo-school
    padding-top: 1rem
.sidebar-fastto-container
  margin-top: 1rem
  height: 20rem
.sidebar-info-container
  height: 15rem
  border-radius: .3rem
  margin-top: 1rem
  color: #8590a6
  font-size: 1.4rem
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
    .author-say
      font-size: 1.3rem
      background: #ececec
      border-radius: .3rem
      padding: .3rem 0
.answerPie-container
  #answerPie
    margin: 0 auto
@media (max-width: 992px)
  .sidebar-container
    display: none
</style>
