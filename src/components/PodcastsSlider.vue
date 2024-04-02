<template>
  <div>
    <h2>{{ audioTitle }}</h2>
    <div v-if="audioElements && audioElements.feed">
      <swiper
          v-bind:slides-per-view="6"
          v-bind:space-between="25"
      >
          <swiper-slide 
          v-for="podcast in audioElements.feed.results" 
          v-bind:key="podcast.id"
          >
            <router-link v-bind:to="{ name: 'podcasts', params: { id: podcast.id } }">
              <div>
                <img v-bind:src="podcast.artworkUrl100" />
                <p>{{ podcast.artistName }}</p>
                <h3>{{ podcast.name }}</h3>
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
    SwiperSlide,
  },
  props: [
    'audioTitle',
    'audioElements'
  ],
};
</script>