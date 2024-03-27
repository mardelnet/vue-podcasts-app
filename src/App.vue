<template>
  <div v-if="data && data.feed">
    <swiper
      :slides-per-view="3"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="podcast in data.feed.entry" :key="podcast.id.attributes['im:id']">
        <img v-bind:src="podcast['im:image'][2].label" />
        <div>{{ podcast['im:name'].label }}</div>
        <div>{{ podcast.summary.label }}</div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
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
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>
