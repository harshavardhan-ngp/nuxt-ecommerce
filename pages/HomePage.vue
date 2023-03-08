<template>
  <div>
    <v-carousel
      :show-arrows="false"
      height="460"
      cycle
      interval="1800"
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        contain
        reverse-transition="fade-transition"
        transition="fade-transition"
      />
    </v-carousel>
   
    <v-container 
      max-width="750">
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          lg="3"
          md="4"
          sm="6"
          class="homeCard"
          @click="getType(card.title)"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            />
            <v-card-title v-text="card.title"/>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- </v-card> -->
  </div>
</template>

  <script>
import { mapActions } from 'vuex';

  export default {
    data () {
      return {
        cards: [
        { title: 'Laptops', src: require('@/assets/bannerLap.jpg'), flex: 3 },
        { title: 'Accessories', src: require('@/assets/bannerAcces.jpg'), flex: 3 },
        { title: 'Fashion', src: require('@/assets/bannerFash.jpg'), flex: 3 },
        { title: 'Mobile Phones', src: require('@/assets/bannerPhn.jpg'), flex: 3 },
      ],
        items: [
          {
            src: require('@/assets/bannerLap.jpg'),
          },
          {
            src: require('@/assets/bannerAcces.jpg'),
          },
          {
            src: require('@/assets/bannerFash.jpg'),
          },
          {
            src: require('@/assets/bannerPhn.jpg'),
          },
        ],
      }
    },
    methods:{
        ...mapActions('addProd',['setType']),
        getType(type){
            console.log('type:',type);
            this.setType(type)
            this.$router.push('/shop')

        }
    }
  }
</script>

<style>
.homeCard{
    cursor: pointer;
    opacity: 0.5;
}
.homeCard:hover{
    opacity: 1;
}
</style>