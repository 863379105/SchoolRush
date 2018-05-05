<template>
  <div class="app" id="group">
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
        <div class="row content-container col-lg-9 col-md-9">
          <div class="gruop-activity card-container">
            <p class="title">我的小组活动</p>

            <p v-for="item in 20" :key="item" class="activity-item">
              <span class="title">
                <router-link to="">进击Node.js基础（二）</router-link>
              </span>
              <span class="right gruop">
                <router-link to="">XXX小组</router-link>
              </span>
              <span class="right time">{{ "10分钟前" }}</span>
              <span class="right complete-num">{{ 3 }}人已完成</span>
            </p>
            <p class="page">
              <Page :total="40" @on-change="changePage" size="small"></Page>
            </p>
          </div>
        </div>

        <!-- 内容部分结束 -->
        <!-- 右侧边栏开始 -->
        <div class="row sidebar-container col-lg-offset-9 col-md-offset-9 col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <group-sidebar></group-sidebar>
        </div>
        <!-- 右侧边栏结束 -->
      </div>
    </div>
    <!-- 导航条下面内容与侧边栏部分结束 -->
  </div>
</template>
<script>
import groupSidebar from "./group/sidebar";
export default {
  methods: {
    changePage(page) {
      console.log("页码"+page)
    }
  },
  components: {
    groupSidebar
  }
};
</script>
<style lang="sass">
#group
  .gruop-activity
    padding: 0 .5rem
    p.title
      font-size: 2.5rem
      font-weight: bold
      padding-top: 2rem
      padding-bottom: 1.5rem
      border-bottom: .1rem solid #eee
    .activity-item
      padding: .8rem 0
      font-size: 1.5rem
      border-bottom: .1rem dashed #ececec
      .right
        margin: 0 1rem
    .page
      text-align: center
      padding: 1rem 0
</style>
