<template>
  <div class="main-container"> 
    <sidebar />
    <router-view></router-view>  
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