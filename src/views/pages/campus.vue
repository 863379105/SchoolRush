<template>
  <!-- 高校通用页面 -->
  <div class="app campus">
    <div class="container grid-container">
      <div class="grid-no-padding col-lg-11 col-md-12 col-sm-12 col-xs-12">
        <div class="row content-container col-lg-9 col-md-9">

          <div class="card-container">
            <Tabs>
              <TabPane label="校园动态"><campus-live></campus-live></TabPane>
            </Tabs>
          </div>
        </div>
        <div class="row sidebar-container col-lg-offset-9 col-md-offset-9 col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <sidebar></sidebar>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import campusLive from "./campus/campusLive"
import majorLive from "./campus/majorLive"
import sidebar from "../common/sidebar"
export default {
  components: {
    campusLive, majorLive,sidebar
  }
}
</script>