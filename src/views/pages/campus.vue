<template>
  <div class="app campus">
    <div class="container grid-container">
      <div class="grid-no-padding col-lg-11 col-md-12 col-sm-12 col-xs-12">
        <div class="row content-container col-lg-9 col-md-9">

          <div class="card-container">
            <Tabs>
              <TabPane label="校园动态"><campus-live></campus-live></TabPane>
              <TabPane label="学院动态"><major-live></major-live></TabPane>
            </Tabs>
          </div>
        </div>
        <div class="row sidebar-container col-lg-offset-9 col-md-offset-9 col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <div class="sidebar-item sidebar-userinfo-container">
            <Row type="flex" justify="center" align="middle" class="code-row-bg">
              <Col span="24">
              <p class="userinfo-username">用户在学校的数据</p>
              </Col>
              <Col span="24">
              <p class="userinfo-locate-school">
                <Tag type="border" color="green">浙江</Tag>
                <Tag type="border" color="blue">绍兴文理学院</Tag>
              </p>
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
                <p class="campus-name">学校的数据</p>
                </Col>
                <Col span="24"> 计算机专业
                <Tag type="border" color="green">No.5</Tag>
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
      </div>
    </div>
  </div>
</template>
<script>
import campusLive from "./campus/campusLive"
import majorLive from "./campus/majorLive"
export default {
  components: {
    campusLive, majorLive
  }
}
</script>
<style lang="sass">
.campus
  .sidebar-userinfo-container
    .userinfo-username
      padding: .5rem 0
      padding-top: 2rem
      font-size: 2rem
      font-weight: bold
</style>
