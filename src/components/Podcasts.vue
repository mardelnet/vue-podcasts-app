<template>
    <h2 v-if="data && data.results[0]">
      {{ data.results[0].artistName }}
    </h2>
    <table v-if="data && data.results">
      <tr v-for="podcastData in data.results">
        <td>
          {{ podcastData.trackName }}
        </td>
        <td>
          {{ podcastData.shortDescription }}
        </td>
        <td>
          {{ podcastData.trackTimeMillis }}
        </td>
        <td>
          <a href="{{ podcastData.episodeUrl }}">
            Listen
          </a>
        </td>
      </tr>
    </table>
</template>

<script>
import PodcastItem from './PodcastItem.vue'

export default {
  components: {
    'podcast-item': PodcastItem,
  },
  methods: {
    async fetchData() {
      const apiUrl = "https://itunes.apple.com/lookup?id=917918570&media=podcast&entity=podcastEpisode&limit=20"  
      const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`)
      const jsonResponse = await response.json()
      this.data = await JSON.parse(jsonResponse.contents);
      console.log(this.data)
    },    
  },
  data() {
    return {
      data: null
    }
  },
  created() {
    this.fetchData()
  },
};
</script>

<style scoped>
</style>