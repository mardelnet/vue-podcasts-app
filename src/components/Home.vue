<template>
  <div class="container">
    <h2>Top Podcasts</h2>
    <div v-if="data && data.feed">
    <swiper
        v-bind:slides-per-view="5"
        v-bind:space-between="25"
    >
        <swiper-slide 
        v-for="podcast in data.feed.entry" 
        v-bind:key="podcast.id.attributes['im:id']"
        >
          <router-link v-bind:to="{ name: 'podcasts', params: { id: podcast.id.attributes['im:id'] } }">
            <div>
              <img v-bind:src="podcast['im:image'][2].label" />
              <h3>{{ podcast['im:name'].label }}</h3>
              <p>{{ podcast.summary.label.substr(0, 50) }}...</p>
            </div>
          </router-link>
        </swiper-slide>
    </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    async fetchData() {      
      const response = await fetch("https://itunes.apple.com/us/rss/toppodcasts/limit=10/json")
      this.data = await response.json()
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