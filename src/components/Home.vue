<template>
  <div class="container">
    <podcasts-slider audio-title="Top Albums" v-bind:audio-elements="albums" />
    <podcasts-slider audio-title="Top Podcasts" v-bind:audio-elements="podcasts" />
    <podcasts-slider audio-title="Top Audio Books" v-bind:audio-elements="audioBooks" />
  </div>
</template>

<script>
import PodcastsSlider from './PodcastsSlider.vue';

export default {
  components: {
    'podcasts-slider': PodcastsSlider,
  },
  methods: {
    async fetchData(apiUrl) {
      const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`);
      const jsonResponse = await response.json();
      return JSON.parse(jsonResponse.contents);
    },
    async fetchAllData() {
      const albumsPromise = this.fetchData("https://rss.applemarketingtools.com/api/v2/us/music/most-played/10/albums.json");
      const podcastsPromise = this.fetchData("https://rss.applemarketingtools.com/api/v2/us/podcasts/top/10/podcasts.json");
      const audioBooksPromise = this.fetchData("https://rss.applemarketingtools.com/api/v2/us/audio-books/top/10/audio-books.json");

      const [albums, podcasts, audioBooks] = await Promise.all([albumsPromise, podcastsPromise, audioBooksPromise]);
      
      this.albums = albums;
      this.podcasts = podcasts;
      this.audioBooks = audioBooks;
    },
  },
  data() {
    return {
      albums: null,
      podcasts: null,
      audioBooks: null,
    }
  },
  created() {
    this.fetchAllData();
  },
};
</script>
