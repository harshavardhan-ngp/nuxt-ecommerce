<template>
  <div>
    <div class="header">
      <NuxtLink 
        class="hmebtn" 
        to="/">
        <button>
          Shop
        </button>
      </NuxtLink>
      <NuxtLink 
        class="hmebtn" 
        to="/cart">
        <button>
          Cart
        </button>
      </NuxtLink>
      <NuxtLink 
        class="hmebtn" 
        to="/wishlist">
        <button>
          Wishlist
        </button>
      </NuxtLink>
    </div>
    <div class="main">
      
      <nuxt/>
    </div>
    <div class="footer"/>
  </div>
</template>

<style scoped>
.hmebtn{
  padding: 0 15px;
}
.main{
  padding-top: 55px;
  padding-bottom: 55px;
}
.header{
  display: flex;
  justify-content: space-evenly;
  z-index: 1;
  position: fixed;
  height: 55px;
  width: 100%;
  font-size: 18px;
  line-height: 55px;
  color: white;
  text-align: center;
  background-color: #00693E;

}
.header a{
color: white;
font-weight: bold;
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