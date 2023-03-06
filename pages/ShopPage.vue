<template>
  <div>
    <div>
      <AddProducts />
    </div>
    <v-container >
      <v-row>
        <v-col 
          v-for="(items,ind) in disp"
          :key="ind" 
          lg="3"
          md="4"
          sm="6"
          xs="10"
        >
          <!-- :class="{ flipme: items.cardOne == 'flipped' }"
          class="card" -->
          <v-card 
            :class="[colors[items.genRandom]]"
            width="244"
          >
            <!-- class="mx-auto card__face card__face--front"  -->
            <div>
              <EditProd :prod-id="items.id"/>
              <!-- class="wishlist"  -->
              <!-- <v-icon 
                class="edit"
                @click="flip(items.id)">mdi-file-edit-outline</v-icon> -->
              <v-img 
                :src="items.img"
              />
            </div>
            <v-card-title style="justify-content: space-between;">
              {{ items.pname }}
              <v-card-actions>
                <v-btn 
                  variant="text" 
                  @click="addToCart(items)">
                  <v-icon>mdi-cart-outline</v-icon>
                </v-btn>
                <v-spacer/>
              </v-card-actions>
            </v-card-title>
          
            <v-card-subtitle style="padding-bottom: 8px;">
              {{ items.ptype }}
            </v-card-subtitle>
            <div>
              <v-card-text style="padding: 3px 16px;">Price : <span>{{ items.price }}</span></v-card-text>
              <v-card-text style="padding: 1px 16px 10px;">Available : <span>{{ items.quantity }}</span></v-card-text>
            </div>
          </v-card>
          
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default{
  data() {
    return {
      colors:['aliceblue','antiquewhite','cornsilk','mistyrose','lightsteelblue']
    };
  },
    computed:{
      ...mapGetters('addProd',['showList']),
        disp(){
            return this.showList
        }
    },
    methods:{
      ...mapActions('cart', ['appendCart']),
      ...mapActions('addProd', ['delProd']),
      addToCart(list){
        this.appendCart(list)        
      },
      delItem(id){
        this.delProd(id)
      },
      

    }
}
</script>

<style scoped>
.aliceblue{
  background-color: #8EC5FC;
background-image: linear-gradient(62deg, #8EC5FC 0%, #e4c3fc 50%, #ffffff 100%);


}
.antiquewhite{
  background-color: #FFDEE9;
background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);

}
.cornsilk{
  background-color: #FAACA8;
background-image: linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%);

}
.mistyrose{
  background-color: #85FFBD;
background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);

}
.lightsteelblue{
  background-image: linear-gradient( 92.7deg,  rgba(245,212,212,1) 8.5%, rgba(252,251,224,1) 90.2% );
}

.v-image
{
  margin: auto;
  height: 180px;
  width: 180px;
}
</style>