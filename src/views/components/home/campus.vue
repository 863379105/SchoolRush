<template>
  <div id="com-app">
    <p class="userinfo-school">
      <Col span="24">
        <img class="campus-badge" src="../../../static/img/shufe.jpg" alt="shufe">
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
    <Col class="campus-chart" span="6">
      <ul class="campus-chart-item">
        <li>医学</li>
        <li>计算机</li>
        <li>经济</li>
        <li>物理</li>
        <li>天文学</li>
      </ul>
    </Col>
    <Col class="campus-chart" type="flex" justify="center" style="float: left" span="16">
      <div class="campus-chart-item">
        <Progress :percent="95" hide-info status="success"></Progress>
        <Progress :percent="75" hide-info status="active"></Progress>
        <Progress :percent="45" hide-info status="active"></Progress>
        <Progress :percent="30" hide-info status="active"></Progress>
        <Progress :percent="8" hide-info status="wrong"></Progress>
      </div>
    </Col>
    <p class="userinfo-user-school">
      <Col span="24">
        <Col span="8">
          <Col class="userhome-data-num" span="24">
            6%
          </Col>
          <Col class="userhome-data-text" span="24">
            贡献
          </Col>
        </Col>
        <Col span="8">
          <Col class="userhome-data-num" span="24">
            99+
          </Col>
          <Col class="userhome-data-text" span="24">
            校园排行
          </Col>
        </Col>
        <Col span="8">
          <Col class="userhome-data-num" span="24">
            5.6K
          </Col>
          <Col class="userhome-data-text" span="24">
            成员
          </Col>
        </Col>
      </Col>
    </p>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="sass">
#com-app
  p
    text-align: center
.campus-badge
  border-radius: 50%
  height: 10rem
  box-shadow: 0 0 1rem 0 #ccc
.campus-name
  font-size: 2.3rem
  font-weight: bold
  line-height: 5rem
ul.campus-chart-item
  margin-top: .2rem
  li
    font-size: 1.4rem
    line-height: 2.4rem
    padding-right: 1rem
    text-align: right
.campus-chart
  height: 20rem
.campus-chart-item
  padding-top: 4.5rem
</style>
