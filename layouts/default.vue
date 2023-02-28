<template>
  <div>
    <div class="header">
      <button>
        Shop
      </button>
    </div>
    <div class="main">
      
      <nuxt/>
    </div>
    <div class="footer"/>
  </div>
</template>

<style>
.v-application--wrap{
  min-height: 0 !important;
}
.main{
  padding-top: 55px;
  padding-bottom: 55px;
}
.header{
  z-index: 1;
  position: fixed;
  height: 55px;
  width: 100%;
  font-size: 18px;
  line-height: 55px;
  color: white;
  text-align: center;
  background-color: #ACE1AF;

}
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  height: 55px;
  width: 100%;
  font-size: 18px;
  line-height: 55px;
  color: white;
  text-align: center;
  background-color: black;
}
</style>