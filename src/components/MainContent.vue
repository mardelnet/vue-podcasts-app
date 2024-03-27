<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
    .container {
        flex: 1;
        background: #222;
        margin: 5px;
        padding: 10px;
        border-radius: 10px;
        box-sizing: border-box;
    }
</style>
