<template>
  <div class="join-card">
      <Row class="liveness-item join" :gutter="16">
      <Col class="liveness-item-user" :lg="2" :md="2" :sm="2" :xs="4">
        <img src="../../../static/img/avatar.jpg">
      </Col>
      <Col :lg="20" :md="20" :sm="22" :xs="19">
        <p class="head">
          <router-link to="" class="p-link link">iimT</router-link>
          注册并加入了
          <router-link to="" class="p-link link">绍兴文理学院</router-link>
        </p>
        <p class="time">刚刚</p>
        <div class="card-container liveness-content-card">
          <Col class="left-badge" :lg="3" :md="3" :sm="3" :xs="7">
            <img src="../../../static/img/shufe.jpg" alt="">
          </Col>
          <Col class="right-content" offset="1" :lg="19" :md="19" :sm="20" :xs="16">
            <p class="title">
              <router-link class="link campus" to="">绍兴文理学院</router-link>
              <router-link class="link major" to="">计算机科学与技术</router-link>
            </p>
            <p class="desc">
              <span><Icon type="person-stalker"></Icon> 2.3k 成员</span>
              <span><Icon type="paintbrush"></Icon>3.5k 问题</span>
              <span><Icon type="checkmark"></Icon>2.6k 解决</span>
            </p>
          </Col>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    console.log(this.userinfo)
    console.log(this.time)
    console.log(this.campusID)
    console.log(this.majorID)

    return {}
  },
  props: ["userinfo", "time", "campusID", "majorID"],
}
</script>

