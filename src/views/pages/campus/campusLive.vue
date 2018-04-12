<template>
  <div class="app campus-live">
    <Row class="liveness-item join" :gutter="16">
      <Col class="liveness-item-user" :lg="2" :md="2" :sm="2" :xs="5">
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
          <Col class="right-content" :lg="20" :md="20" :sm="21" :xs="17">
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
    <Row class="liveness-item solving" :gutter="16">
      <Col class="liveness-item-user" :lg="2" :md="2" :sm="2" :xs="5">
        <img src="../../../static/img/avatar.jpg">
      </Col>
      <Col :lg="20" :md="20" :sm="22" :xs="19">
        <p class="head">
          <router-link to="" class="p-link link">iimT</router-link>
          正在解决问题
          <router-link to="" class="p-link link">1+1=____?</router-link>
        </p>
        <p class="time">刚刚</p>
        <div class="card-container liveness-content-card">
          <Col class="right-content" :lg="20" :md="20" :sm="21" :xs="17">
            <p class="title">
              <router-link class="link user" to="">ssh</router-link>
              /
              <router-link class="link question" to="">1+1=____?</router-link>
            </p>
            <p class="toAnswer">简单的不得了。</p>
            <p class="desc">
              <span><Icon type="eye"></Icon> 2.3k 浏览</span>
              <span><Icon type="checkmark"></Icon>3.5k 已解决</span>
              <span><Icon type="ios-clock"></Icon>2018/3/10-10:23 发布</span>
            </p>
          </Col>
        </div>
      </Col>
    </Row>
    <Row class="liveness-item solved" :gutter="16">
      <Col class="liveness-item-user" :lg="2" :md="2" :sm="2" :xs="5">
        <img src="../../../static/img/avatar.jpg">
      </Col>
      <Col :lg="20" :md="20" :sm="22" :xs="19">
        <p class="head">
          <router-link to="" class="p-link link">iimT</router-link>
          解决了
          <router-link to="" class="p-link link">1+1=____?</router-link>
        </p>
        <p class="time">刚刚</p>
        <div class="card-container liveness-content-card">
          <Col class="right-content" :lg="20" :md="20" :sm="21" :xs="17">
            <p class="title">
              <router-link class="link user" to="">ssh</router-link>
              /
              <router-link class="link question" to="">1+1=____?</router-link>
            </p>
            <p class="toAnswer">简单的不得了。</p>
            <p class="desc">
              <span><Icon type="eye"></Icon> 2.3k 浏览</span>
              <span><Icon type="checkmark"></Icon>3.5k 已解决</span>
              <span><Icon type="ios-clock"></Icon>2018/3/10-10:23 发布</span>
            </p>
          </Col>
        </div>
      </Col>
    </Row>
    <Row class="liveness-item follow" :gutter="16">
      <Col class="liveness-item-user" :lg="2" :md="2" :sm="2" :xs="5">
        <img src="../../../static/img/avatar.jpg">
      </Col>
      <Col :lg="20" :md="20" :sm="22" :xs="19">
        <p class="head">
          <router-link to="" class="p-link link">iimT</router-link>
          关注了
          <router-link to="" class="p-link link">ssh</router-link>
        </p>
        <p class="time">刚刚</p>
        <div class="card-container liveness-content-card">
          <Col class="left-avatar" :lg="3" :md="3" :sm="3" :xs="7">
            <img src="../../../static/img/avatar.png" alt="">
          </Col>
          <Col class="right-content" :lg="20" :md="20" :sm="21" :xs="17">
            <p class="title">
              <router-link class="link user" to="">ssh</router-link>
              <router-link class="link campus" to="">绍兴文理学院</router-link>
            </p>
            <p class="desc">
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

}
</script>
<style lang="sass">
.campus-live
    padding: 0
    .liveness-item
      padding: 1rem
      .head
        padding-top: 1.5rem
      img
        width: 5.5rem
        border-radius: .3rem
      p
        font-size: 1.4rem
        .p-link
          font-weight: bold
          margin: 0 .3rem
          color: #495060
        .p-link:hover
          color: #0084ff
      p.time
        text-align: right
        margin-right: .5rem
        font-size: 1.2rem
        padding-top: .5rem
      .card-container
        box-shadow: none
        border: .1rem solid #e1e4e8
        border-radius: .3rem
        padding: 2rem
      .liveness-content-card
        .left-badge
          img
            width: 5.5rem
    .join
      .right-content
        .campus
          font-size: 1.7rem
          font-weight: bold
          margin-right: 1rem
        .major
          font-size: 1.3rem
        .desc
          padding-top: 2rem
          font-size: 1.7rem
          span
            margin-right: 2rem
            i
              margin-right: .5rem
    .solving
      .right-content
        .title
          font-size: 1.7rem
          font-weight: bold
        p.toAnswer
          padding: 1rem 0
          font-size: q.4rem
        .desc
          font-size: 1.7rem
          span
            margin-right: 2rem
            i
              margin-right: .5rem
    .solved
      .right-content
        .title
          font-size: 1.7rem
          font-weight: bold
        p.toAnswer
          padding: 1rem 0
          font-size: q.4rem
        .desc
          font-size: 1.7rem
          span
            margin-right: 2rem
            i
              margin-right: .5rem
    .follow
      .left-avatar
        img
          width: 5.5rem
      .right-content
        .user
          font-size: 1.7rem
          font-weight: bold
          margin-right: 1rem
        .campus
          font-size: 1.3rem
        .desc
          padding-top: 2rem
          font-size: 1.7rem
          span
            margin-right: 2rem
            i
              margin-right: .5rem

</style>
