<template>
  <div class="app campus-live">
    <join-card :userinfo="1" time="just" :campusID="1" :majorID="2"></join-card>
    <followed-card :userinfo="1" time="just" :questionID="1"></followed-card>
    <solved-card :userinfo="1" time="just" :followedID="1"></solved-card>
    <solvind-card :userinfo="1" time="just" :questionID="1"></solvind-card>
  </div>
</template>
<script>
import joinCard from "./join-card"
import followedCard from "./followed-card"
import solvedCard from "./solved-card"
import solvindCard from "./solving-card"
export default {
  components: {
    joinCard,
    followedCard,
    solvedCard,
    solvindCard,
  }
}
</script>