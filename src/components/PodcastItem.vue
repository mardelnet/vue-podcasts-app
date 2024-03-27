<template>
  <div>
    <img v-bind:src="podcastImageUrl" />
    <h3>{{ podcastName }}</h3>
    <p>{{ podcastSummary.substr(0, 50) }}...</p>
  </div>
</template>

<script>
export default {
  props: [
    'podcastName',
    'podcastSummary',
    'podcastImageUrl',
  ]
};
</script>

<style scoped>
    p {
        color: #bbb;
    }
</style>
