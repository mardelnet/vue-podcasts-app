<template>
  <div class="main-container">
    <sidebar />
    <main-content>
      <h2>Top Podcasts</h2>
      <div v-if="data && data.feed">
        <swiper
          v-bind:slides-per-view="5"
          v-bind:space-between="20"
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
    </main-content>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import PodcastItem from './components/PodcastItem.vue';
import Sidebar from './components/Sidebar.vue';
import MainContent from './components/MainContent.vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
    'podcast-item': PodcastItem,
    'sidebar': Sidebar,
    'main-content': MainContent,
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
  .main-container {
    display: flex;
  }
  .swiper {
    height: 100%;
    max-height: 100vw;
    min-height: 0;
    min-width: 0;
    max-width: 100vw;
    width: 100%;
    overflow: hidden;
  }
  .swiper {
    display: grid;
  }
  .swiper-wrapper {
    min-width: 0;
  }
</style>