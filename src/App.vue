<template>
  <div class="main-container"> 
    <sidebar />
    <router-view></router-view>  
  </div>
  <audio-player />
</template>

<script>
import 'swiper/css';
import Sidebar from './components/Sidebar.vue';
import AudioPlayer from './components/AudioPlayer.vue';

export default {
  components: {
    'sidebar': Sidebar,
    'audio-player': AudioPlayer,
  },
};
</script>

<style>
  body {
    color: white;
    background: black;
    overflow: hidden;
    margin: 0;
    padding: 10px;
    box-sizing: border-box;
    font-family: rabikiso;
  }
  .main-container {
    display: flex;
  }
  .container {
    flex: 1;
    background: #222;
    padding: 10px;
    border-radius: 10px;
    box-sizing: border-box;
    overflow: scroll;
    height: inherit;
    max-height: calc(100vh - 110px);
  }
</style>