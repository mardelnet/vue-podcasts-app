<template>
  <div v-if="data && data.feed">
    <swiper
      v-bind:slides-per-view="5"
      v-bind:space-between="50"
    >
      <swiper-slide 
        v-for="podcast in data.feed.entry" 
        v-bind:key="podcast.id.attributes['im:id']"
      >
        <podcast-item 
          v-bind:podcast-name="podcast['im:name'].label"
          v-bind:podcast-summary="podcast.summary.label"
          v-bind:podcast-image-url="podcast['im:image'][2].label"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import PodcastItem from './components/PodcastItem.vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
    'podcast-item': PodcastItem
  },
  methods: {
    async fetchData() {      
      const response = await fetch("https://itunes.apple.com/us/rss/toppodcasts/limit=10/json")
      this.data = await response.json()
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

<style>
  body {
    color: white;
    background: black
  }
</style>