<template>
  <div class="question-card">
    <div class="row content-container col-lg-9 col-md-9">
      <div class="card-container">
        <div class="card-left-container flex left">
          <div class="flex-container flex">
            <div class="label-container flex">
              <!-- 不用理会下面的报错 -->
              <Tag class="Tag" v-for="item in questionInfo.labelsInfo" :color="getColor(item.id)"> 
                <router-link to="/label">{{ item.name }}</router-link>
              </Tag>
            </div>
            <div class="breadcrumb-container flex">
              <Breadcrumb separator="-">
                <BreadcrumbItem to="/index">{{ questionInfo.majorParentName }}</BreadcrumbItem>
                <BreadcrumbItem to="/index">{{ questionInfo.majorName }}</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </div>
        </div>
        <div class="card-right-container right">
          <p class="title">
            <router-link :to="'/question/'+questionInfo.id">{{ questionInfo.q }}</router-link>
          </p>
          <p class="q-set-info">
            <span>{{ questionInfo.challenges }}人挑战过</span>
            <span>{{ questionInfo.passed }}人已通过</span>
            <span>通过率：{{ questionInfo.passedrate }}</span>
          </p>
          <p class="q-difficulty">
            <span>难度：</span>
            <Rate disabled allow-half v-model="questionInfo.levels"></Rate>
          </p>
          <p class="q-author-say">
            <router-link to="/home"><Avatar size="small" shape="square" :src="questionInfo.useravatar" />
            <span class="author-name">{{ questionInfo.username }}</span></router-link>
            <span class="author-say">{{ questionInfo.toAnswer }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    console.log(this.questionInfo)

    return {}
  },
  props:["tags", "question-info"],
  methods: {
    getColor(id) {
      const colors = ["#FF6666","#ed3f14", "#2d8cf0", "#19be6b", "#ff9900"]
      //let color = colors[parseInt(Math.random() * (colors.length - 1))]
      let color = colors[id % (colors.length)]
      return color
    },
  }
}
</script>
<style lang="sass">
.question-card
  .ivu-tag
    .ivu-tag-text
      a
        color: #fff
</style>
<style>
.a {
  background: #5cadff;
}
</style>


