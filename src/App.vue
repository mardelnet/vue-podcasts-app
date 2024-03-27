<template>
<p>{{ data.feed.title.label }}</p>
<div v-for="x in data.feed.entry">
  <div>{{ x['im:name']['label'] }}</div>
  <div>{{ x['summary']['label'] }}</div>
  <div>{{ x['im:image'][2]['label'] }}</div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        data: null,
      };
    },
    created() {
      this.fetchData()
    },
    methods: {
      async fetchData() {      
        const response = await fetch("https://itunes.apple.com/us/rss/toppodcasts/limit=10/json")
        this.data = await response.json()
        console.log(this.data)
      },    
    }
  };
</script>

<style>
</style>