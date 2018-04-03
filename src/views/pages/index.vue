<template>
  <div class="app">
    <!-- 导航条下面内容与侧边栏部分开始 -->
    <div class="container grid-container">
      <div class="grid-no-padding col-lg-11 col-md-12 col-sm-12 col-xs-12">
        <!-- 内容部分开始 -->
        <div class="row content-container col-lg-9 col-md-9">
          <div class="card-container">
            <p>题集</p>
            <p>筛选</p>
          </div>
        </div>
        <div class="row content-container col-lg-9 col-md-9" v-for="n in 6" :key="n">
          <div class="card-container">
            <div class="card-left-container flex left">
              <div class="flex-container flex">
                <div class="label-container flex">
                  <Tag class="Tag" color="red">标签一</Tag>
                  <Tag class="Tag" color="blue">标签一</Tag>
                  <Tag class="Tag" color="yellow">标签一</Tag>
                </div>
                <div class="breadcrumb-container flex">
                  <Breadcrumb separator=">">
                    <BreadcrumbItem to="/index">计算机</BreadcrumbItem>
                    <BreadcrumbItem to="/index">网络</BreadcrumbItem>
                  </Breadcrumb>
                </div>
              </div>
            </div>
            <div class="card-right-container right">
              <p class="title">
                  <router-link to="/question">关于XXXXX的掌握情况</router-link>
              </p>
              <p class="q-set-info">
                <span>10道题</span>
                <span>23586人挑战过</span>
                <span>1536人已通过</span>
                <span>通过率：78%</span>
              </p>
              <p class="q-difficulty">
                <span>难度：</span>
                <Icon type="ios-star" v-for="n in 4" :key="n"></Icon>
              </p>
              <p class="q-author-say">
                <Avatar icon="person" />
                <span class="author-name">iimT</span>
                <span class="author-say">最近自己学了一些关于XXXXX方面的内容，出几道题大家来答答，能一次通过说明你掌握很不错了哟~</span>
              </p>
            </div>
          </div>
        </div>
        <!-- 内容部分结束 -->
        <!-- 右侧边栏开始 -->
        <div class="row sidebar-container col-lg-offset-9 col-md-offset-9 col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <div class="sidebar-item sidebar-userinfo-container">
            <Row type="flex" justify="center" align="middle" class="code-row-bg">
              <Col span="24">
                <p class="userinfo-username">iimT</p>
              </Col>
              <Col span="24">
                <p class="userinfo-locate-school">
                  <Tag type="border" color="green">浙江</Tag>
                  <Tag type="border" color="blue">绍兴文理学院</Tag>
                </p>
              </Col>
              <Col class="answerPie-container" span="24">
                <!-- 擅长领域的饼图 -->
                <div id="answerPie" :style="{width: '230px', height: '200px'}"></div>
              </Col>
              <p class="userinfo-qinfo">
                <Col span="8">
                  <Col class="userinfo-data-num" span="24">
                    568
                  </Col>
                  <Col span="24">
                    解决问题
                  </Col>
                </Col>
                <Col span="8">
                  <Col class="userinfo-data-num" span="24">
                    68.5%
                  </Col>
                  <Col span="24">
                    通过率
                  </Col>
                </Col>
                <Col span="8">
                    <Col class="userinfo-data-num" span="24">
                      8
                    </Col>
                    <Col span="24">
                      待解决
                    </Col>
                  </Col>
              </p>
              
            </Row>
          </div>
          <div class="sidebar-item school sidebar-userinfo-container">
            <Row>
              <p class="userinfo-school">
                  <Col span="24">
                    <img class="school-badge" src="../../static/img/shufe.jpg" alt="shufe">
                    <Col span="24">
                      <Col span="24">
                        <p class="campus-name">上海财经大学</p>
                      </Col>
                      <Col span="24">
                        计算机专业 <Tag type="border" color="green">No.5</Tag>
                      </Col>
                    </Col>
                  </Col>
                </p>
                <p class="userinfo-user-school">
                  <Col span="24">
                    <Col span="8">
                      <Col class="userinfo-data-num" span="24">
                        6%
                      </Col>
                      <Col span="24">
                        贡献
                      </Col>
                    </Col>
                    <Col span="8">
                      <Col class="userinfo-data-num" span="24">
                        99+
                      </Col>
                      <Col span="24">
                        校园排行
                      </Col>
                    </Col>
                    <Col span="8">
                      <Col class="userinfo-data-num" span="24">
                        5.6K
                      </Col>
                      <Col span="24">
                        成员
                      </Col>
                    </Col>
                  </Col>
                </p>
              </Row>
          </div>
          <div class="sidebar-item sidebar-fastto-container">
            侧边栏快捷入口
          </div>
          <div class="sidebar-info-container">
            <p>侵权举报网上有害信息举报专区</p>
            <p>违法和不良信息举报：010-82716601</p>
            <p>儿童色情信息举报专区</p>
            <p>联系我们 © 2018 SchoolRush</p>
          </div>
        </div>
        <!-- 右侧边栏结束 -->
      </div>
    </div>
    <!-- 导航条下面内容与侧边栏部分结束 -->
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
      tagColors: ["blue", "red", "yellow", "green"],

    };
  },
  methods: {

    drawAnswerPie() {
      // 绘制个人擅长图表
      let myChart = echarts.init(document.getElementById("answerPie"));
      myChart.setOption({
        series: {
          type: "pie",
          center: ["50%", "53%"],
          radius: ["45%","68%"],
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
        },
        title: {
          text: "擅长领域",
          x: "center",
          textStyle: {
            fontSize: 14,
            fontWeight: 'normal',
            color: "#000",
            fontFamily: "'Microsoft YaHei','serif' , 'monospace', 'Arial', 'Courier New'",
          }
        }
      });
    },
    getUserInfo() {
      let uid = localStorage.getItem("uid")
      let url = this.$API.getService("User", "getById")
      let that = this

      this.$API.post(url, {id:uid})
      .then((res) => {
        let Uinfo = res.data.data
        localStorage.setItem("userinfo", JSON.stringify(Uinfo))
        for(let i in Uinfo){
          if(!Uinfo[i]) {
            that.jumpToSettings()
            break
          }
        }
      })
      .catch((err) => {
        console.log(err)
      })
    },
    jumpToSettings() { //跳转到设置页面
      this.$Notice.info({
          title: '个人信息不全',
          desc: "请先补全信息，便于筛选你的题目..."
      });

      this.$router.push("./settings")
    }
  },
  mounted() {
    this.drawAnswerPie()
    //获取用户信息
    this.getUserInfo()
    
  }
};
</script>
<style lang="sass">
  $bright-blue: #0084ff
  .container
    margin: 0 auto
  .content-container
    float: left
    padding: 0
    margin: 0
    padding-right: .5rem
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
  .school
    margin-top: 1rem
    padding: 1.5rem 0
  .sidebar-userinfo-container
    p
      text-align: center
    .userinfo-data-num
      font-size: 2.3rem
      font-weight: bold
    .userinfo-username
      padding: .5rem 0
      padding-top: 2rem
      font-size: 2rem
      font-weight: bold
    .userinfo-locate-school,.userinfo-qinfo,.userinfo-school,.userinfo-user-school
      padding: .5rem 0
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
      a
        color: #555
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


