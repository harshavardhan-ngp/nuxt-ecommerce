<template>
  <div class="contain">
    <nuxt/>
  </div>
</template>

<style scoped>
.contain{
    background: url('~@/assets/bg.jpg') no-repeat center center;
    background-size: cover;
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: -1;
}
</style>