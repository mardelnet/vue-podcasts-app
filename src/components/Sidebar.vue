<template>
  <div class="sidebar-container">
    <div>
      <router-link v-bind:to="{ name: 'home' }">
        Home 
      </router-link>
      Search    
    </div>
    <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum.
    </div>
  </div>
</template>

<style scoped>
.sidebar-container {
    flex: 0 0 100%;
    max-width: 350px;
}
.sidebar-container > div {
    background: #222;
    margin: 0 10px 10px;
    padding: 20px;
    border-radius: 10px;
    box-sizing: border-box;
}
</style>
