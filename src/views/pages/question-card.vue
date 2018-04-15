<template>
  <div class="app question-card">
    <div class="row content-container col-lg-9 col-md-9">
      <div class="card-container">
        <div class="card-left-container flex left">
          <div class="flex-container flex">
            <div class="label-container flex">
              <Tag class="Tag" v-for="item in tags" :color="getColor()">{{ item.name }}</Tag>
            </div>
            <div class="breadcrumb-container flex">
              <Breadcrumb separator="-">
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
  </div>
</template>
<script>
export default {
  props:["tags", "question-info"],
  methods: {
    getColor() {
      const colors = ["#ed3f14", "#2d8cf0", "#19be6b", "#ff9900"]
      let color = colors[parseInt(Math.random() * (colors.length - 1))]
      console.log(color)
      return color
    }
  }
}
</script>
