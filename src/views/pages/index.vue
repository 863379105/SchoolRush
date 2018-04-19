<template>
  <div class="app index">
    <!-- 导航条下面内容与侧边栏部分开始 -->
    <div class="container grid-container">
      <div class="grid-no-padding col-lg-11 col-md-12 col-sm-12 col-xs-12">
        <!-- 内容部分开始 -->
        <!-- 筛选模块 弃用 <div class="row content-container col-lg-9 col-md-9">
          <div class="card-container index-filter">
            <Row :gutter="16">
              <Col :lg="7" :md="7" :sm="7" :xs="15">
                <RadioGroup v-model="filterType" type="button" style="width:100%">
                  <Radio label="选择"></Radio>
                  <Radio label="判断"></Radio>
                  <Radio label="填空"></Radio>
                </RadioGroup>
              </Col>
              <Col :lg="10" :md="10" :sm="11" :xs="15">
                <Select v-model="filterMajor" filterable>
                  <Option v-for="item in majorData" :value="item.value" :key="item.label">{{ item.label }}</Option>
                </Select>
              </Col>
              <Col :lg="7" :md="7" :sm="6" :xs="15">
                <span>难度</span>
                <Rate allow-half v-model="filterLevel"></Rate>
              </Col>
            </Row>
          </div
        </div>  -->
        <question-card v-for="q in questions" :question-info="q"></question-card>
        <!-- 内容部分结束 -->
        <!-- 右侧边栏开始 -->
        <div class="row sidebar-container col-lg-offset-9 col-md-offset-9 col-lg-3 col-md-3 col-sm-3 col-xs-3">
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
                <Tag color="green">浙江</Tag>
                <Tag color="blue">{{ userInfo.campusName}}</Tag>
              </p>
              </Col>
              <Col class="user-info-followed" span="12">
                <p class="num">67</p>
                <p class="title">关注了</p>
              </Col>
              <Col class="user-info-follower" span="12">
                <p class="num">34</p>
                <p class="title">关注者</p>
              </Col>
              <Col class="answerPie-container" span="24">
              <!-- 擅长领域的饼图 -->
              <div id="answerPie" :style="{width: '230px', height: '200px'}"></div>
              </Col>
              <p class="userinfo-qinfo">
                <Col span="8">
                <Col class="userinfo-data-num" span="24"> 568
                </Col>
                <Col span="24"> 解决问题
                </Col>
                </Col>
                <Col span="8">
                <Col class="userinfo-data-num" span="24"> 68.5%
                </Col>
                <Col span="24"> 通过率
                </Col>
                </Col>
                <Col span="8">
                <Col class="userinfo-data-num" span="24"> 8
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
                <Col span="24">
                <img class="school-badge" src="../../static/img/shufe.jpg" alt="shufe">
                <Col span="24">
                <Col span="24">
                <p class="campus-name">上海财经大学</p>
                </Col>
                <Col span="24"> 计算机专业
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
                <Col class="userinfo-data-num" span="24"> 5.6K
                </Col>
                <Col span="24"> 成员
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

  import questionCard from "./question-card.vue"
  
  export default {
    data() {
      return {
        tagColors: ["blue", "red", "yellow", "green"],
        filterType: 0,
        filterMajor: "",
        filterLevel: 0,
        majorData: [],
        userInfo: {},
        questions: {},
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
            data: [{
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
                  let color = ["#2db7f5", "#19be6b", "#f90", "#2d8cf0", "#ed3f14"]
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
  
        this.$API.post(url, {
            id: uid
          })
          .then((res) => {
            let Uinfo = res.data.data
            that.userInfo = Uinfo
            localStorage.setItem("userinfo", JSON.stringify(Uinfo))
            for (let i in Uinfo) {
              if (!Uinfo[i]) {
                that.jumpToSettings()
                break
              }
            }

            that.getAllMajor()
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
      },
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
      getQuestionPage() {
        const that = this
        const url  = this.$API.getService("Question", "GetPageInformation")

        this.$API.post(url, {
          page: 1,
          num: 20
        }).then((res) => {
          console.log(res.data.data)
          that.questions = res.data.data
        })
      }
    },
    mounted() {
      this.drawAnswerPie()
      //获取用户信息
      this.getUserInfo()
      this.getQuestionPage()
    },
    components: {
      questionCard,
    }
  };
</script>

<style lang="sass">
.index
  .sidebar-container
    .sidebar-userinfo-container
      .user-info-followed,.user-info-follower
        padding: 1rem 0
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

$bright-blue: #0084ff
.container
  margin: 0 auto
.sidebar-userinfo-container
  .userinfo-username
    padding: .5rem 0
    padding-top: 1rem
    font-size: 2rem
    font-weight: bold
.card-left-container
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
      padding-top: 1rem
      font-size: 1.6rem
      justify-content: center
      *
        font-size: 1.6rem
      .ivu-breadcrumb-item-separator
        color: #888
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


