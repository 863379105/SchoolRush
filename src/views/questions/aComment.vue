<template>
  <div id="a-comment">
    <Row class="a-comment">
      <Col span="10">
        <router-link to="/home">
          <Avatar shape="square" :src="user.avatar" />
          <span class="name">{{ user.name }}</span>
        </router-link>
      </Col>
      <Col offset="8" span="6">
        <p class="time">{{ time }}</p>
      </Col>
      <Col class="content" span="24">
        <div class="mask" v-if="collapse"></div>
        <p :class="{'collapse': collapse}">{{ comment.content }}</p>
        <p v-if="collapse" class="collapse-container">
          <Button type="text" @click="changeCollapse" icon="chevron-down">展开</Button>
        </p>
      </Col>
      <Col class="methods" span="24">
        <p>
          <Button type="ghost" icon="arrow-up-b">{{ comment.agree }}</Button>
          <Button type="ghost" icon="arrow-down-b"></Button>
          <Button type="text" icon="chatbubble">回复</Button>
          <Button type="text" icon="chatbubbles">查看对话</Button>
          <Button type="text" icon="information-circled">举报</Button>
          <Button class="collapse" v-if="!collapse" type="text" @click="changeCollapse" icon="chevron-up">收起</Button>
        </p>
      </Col>
    </Row>
  </div>
</template>
<script>
import formatTime from "../components/tools/formatTime.js"
export default {
  data() {
    console.log(this.comment.time)
    let Time = formatTime.getDateDiff(this.comment.time)
    console.log(Time)
    return {
      time: Time,
      collapse: true
    }
  },
  methods: {
    changeCollapse() {
      console.log(1)
      this.collapse = !this.collapse
    }
  },
  props: ["user", "comment"],
}
</script>

<style lang="sass">
#a-comment
  .content
    z-index: 5
    position: relative
  .mask
    position: absolute
    top: 3rem
    height: 4rem
    left: 0
    right: 0
    // background: #ccc
    background: linear-gradient(to top, rgba(255,255,255,1) 30%, rgba(255,255,255,0))
    z-index: 10
  .hide
    display: none
  .collapse
    height: 4rem
    overflow: hidden
  .collapse-container
    text-align: center
    margin-top: 1rem
  .methods
    .collapse
      float: right
</style>
<style>
</style>



