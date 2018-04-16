<template>
  <div id="comment">
    <!-- 问题页面的评论组件 -->
    <p class="total"><span>{{ 89 }}</span> 条经验</p>
    <div class="container">
      <a-comment :user="user" :comment="comment"></a-comment>
    </div>
  </div>
</template>
<script>
import aComment from "./aComment"
export default {
  data() {
    return {
      user: {
        avatar: "https://i.loli.net/2017/08/21/599a521472424.jpg",
        name: "iimT"
      },
      comment: {
        id: "1",
        content: "设置属性 options 对象中的 shortcuts 可以设置快捷选项，详见示例代码。其中 value 为函数，必须返回一个日期，如果是 daterange 类型，需要返回一个数组。value 接收任何正确的日期格式，比如 2016-12-24 或 12/24/16 都是正确的。设置属性 options 对象中的 shortcuts 可以设置快捷选项，详见示例代码。其中 value 为函数，必须返回一个日期，如果是 daterange 类型，需要返回一个数组。value 接收任何正确的日期格式，比如 2016-12-24 或 12/24/16 都是正确的。",
        time: "2018-04-16 19:36:32",
        agree: 45,
        disagree: 3,
      }
    }
  },
  components: {
    aComment
  }
}
</script>

<style lang="sass">
#comment
  padding: 2rem
  .container
    margin-top: 0
  .a-comment
    padding: 2rem 0
    border-bottom: .1rem solid #eee
  .total
    padding-bottom: 1rem
    font-size: 1.8rem
    font-weight: bold
  .name
    margin-left: .5rem
    color: #495060
  .name:hover
    color: #2d8cf0
  .time
    text-align: right
  .content
    padding: 2rem
    padding-bottom: 1rem
    p.coolapse
      font-size: 1.7rem
      background: #fff
</style>

