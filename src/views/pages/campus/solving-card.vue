<template>
  <div class="solving-card">
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
  </div>
</template>
