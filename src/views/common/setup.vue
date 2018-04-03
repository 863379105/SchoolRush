<template>
  <div>
    <Tabs value="select">
      <TabPane label="选择题" name="select">
        <v-select></v-select>
      </TabPane>
      <TabPane label="判断题" name="judge">
        <v-judge></v-judge>
      </TabPane>
      <TabPane label="填空题" name="blank">
        <v-blank></v-blank>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
import vSelect from "../questions/select"
import vJudge from "../questions/judge"
import vBlank from "../questions/blank"
export default {
  data() {
    return {
    }
  },
  components: {
    vSelect, vJudge, vBlank
  }
};
</script>
