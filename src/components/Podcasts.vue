<template>
  <div class="container">
    <div v-if="!data">
      Loading... 
    </div>
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
          <button @click="handleClick(podcastData.episodeUrl)">
            Play Podcast
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { usePodcastStore } from '../store';

export default {
  methods: {
    async fetchData() {
      const podcastId = this.$route.params.id
      const apiUrl = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20"` 
      const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`)
      const jsonResponse = await response.json()
      this.data = await JSON.parse(jsonResponse.contents);
      console.log(this.data)
    },   
    handleClick(episodeUrl) {
      usePodcastStore().setCurrentEpisodeUrl(episodeUrl);
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