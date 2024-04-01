<template>
  <div class="main-container"> 
    <sidebar />
    <div class="container">
      <router-view></router-view>  
    </div>
  </div>
</template>

<script>
import 'swiper/css';
import Sidebar from './components/Sidebar.vue';

export default {
  components: {
    'sidebar': Sidebar,
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
    max-height: calc(100vh - 20px);
  }
</style>