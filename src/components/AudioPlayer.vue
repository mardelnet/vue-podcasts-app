<template>
  <div class="audio-container">
    <audio controls>
      <source src="https://nyt.simplecastaudio.com/521189a6-a4f6-404d-85cf-455a989a10a4/episodes/4cafa159-57ae-49c6-88da-e492b70e2437/audio/128/default.mp3/default.mp3_ywr3ahjkcgo_24bd8331839556f37ad0b57b34976da0_48468483.mp3?aid=rss_feed&awCollectionId=521189a6-a4f6-404d-85cf-455a989a10a4&awEpisodeId=4cafa159-57ae-49c6-88da-e492b70e2437&feed=xl36XBC2&hash_redirect=1&x-total-bytes=48468483&x-ais-classified=streaming&listeningSessionID=0CD_382_91__cdc15a85e4b19d2bb4633d801ad5406910392f6d" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script>
export default {
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
.audio-container {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100px;
  background: black;
  padding: 10px;
  box-sizing: border-box;
}
audio {
  width: 100%;
}
</style>