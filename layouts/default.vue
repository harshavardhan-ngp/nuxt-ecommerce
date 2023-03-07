<template>
  <div data-app>
    <v-toolbar 
      class="navbar" 
    >
      <v-toolbar-title class="appName">E-Commerce App</v-toolbar-title>
      <v-spacer/>
      <!-- <v-btn
        class="ma-2 logoutBtn"
        @click="logout"
      >
        LogOut
        <v-icon
          right
        >
          mdi-exit-to-app
        </v-icon>
      </v-btn> -->
      <v-menu
        bottom
        left
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            text
            class="user"
            v-on="on"
          >
            <v-icon>
              mdi-account-circle
            </v-icon>
            <v-icon>
              mdi-menu-down
            </v-icon>
          </v-btn>
        </template>

        <v-list >
          <NuxtLink 
            to="/profile"
            class="menutabs">
            <v-list-item class="menu">
              Profile
            </v-list-item>
          </NuxtLink>
          <v-list-item 
            class="menu" 
            @click="logout">
            Logout
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- <div>
        <span>LogOut</span>
        <v-btn icon>
          <v-icon 
            class="logOff" 
            @click="logout">mdi-exit-to-app</v-icon>
        </v-btn>
      </div> -->
      <template v-slot:extension>
        <v-tabs
          align-with-title
          background-color="#00693E"
        >
          <v-tabs-slider color="yellow"/>
          <v-tab>
            <NuxtLink 
              to="/"
              class="navtabs">
              Home
            </NuxtLink>
          </v-tab>
          <v-tab>
            <NuxtLink 
              to="/shop"
              class="navtabs">
              Shop
            </NuxtLink>
          </v-tab>
          <v-tab>
            <NuxtLink 
              to="/cart" 
              class="navtabs">
              Cart
            </NuxtLink>
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <nuxt />
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: 'tab-2',
      more: [
        'Profile', 'Logout'
      ],
    }
  },
  methods:{
    logout(){
      localStorage.removeItem('email')
      localStorage.removeItem('password')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Tilt+Prism&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');

  .menutabs{
    text-decoration: none;
  }
  .v-menu__content>.v-list{
    background-color: #fff !important;
  }
  .user{
    color: #fff !important;
    /* font-size: 25px !important; */
  }
  .menu{
    cursor: pointer;
    color: #00693E !important;
    font-family: 'Orbitron', sans-serif;
    letter-spacing: 2px;
  }
  .menu:hover{
    color: #00693E !important;
    /* background-color: #00693E; */
    opacity: 0.6;
  }
.logoutBtn{
  color: #fff !important;
  background-color: transparent !important;
  /* border: none ; */
  box-shadow: none;
  font-family: 'Orbitron', sans-serif;
  font-weight:400 ;
  font-size: 13px;
  
}
  .appName{
  font-family: 'Tilt Prism', cursive;
  font-weight:700 ;
  font-size: 35px;
  
}
.logOff{
  color: #fff !important;
}
.v-toolbar,.v-sheet{
  background-color: #00693E !important;
  color: #fff !important;
}
.navtabs{
  width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Orbitron', sans-serif;
    font-weight:bolder ;
    font-size: 14px;
    letter-spacing: 4px;
  }
.v-tab{
  width: 100%;
  max-width: 100%;
}
.v-tab a{
  color: white !important;
  text-decoration: none !important;
}
.v-tab--active:before{
  opacity: 0.11 !important;
}
.v-tab .router-link-exact-active:before{
background-color:white;
}
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