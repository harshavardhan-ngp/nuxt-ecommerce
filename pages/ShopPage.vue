<template>
  <div>
    <AddProducts />
    <v-container >
      <v-row>
        <v-col 
          v-for="(items,ind) in disp"
          :key="ind" 
          :class="{ flipme: items.cardOne == 'flipped' }"
          class="card"
          lg="3"
          md="4"
          sm="6"
          xs="10"
        >
          <!-- @click="items.cardOne == 'start' ? (items.cardOne = 'flipped' ) : (items.cardOne = 'start' )" -->
          <v-card 
            style="margin-top: 60px;"
            class="mx-auto card__face card__face--front" 
            width="244"
            max-height="600">
            <div>
              <v-icon 
                class="wishlist" 
                @click="flip(items.id)">mdi-pencil-circle-outline</v-icon>
              <v-img 
                :src="items.img"
              />
            </div>
            <v-card-title style="justify-content: space-between;">
              {{ items.pname }}
              <v-card-actions>
                <v-btn 
                  color="orange-lighten-2"
                  variant="text" 
                  @click="addToCart(items,ind)">
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
          <v-card 
            style="margin-top: 60px;"
            class="mx-auto card__face card__face--back" 
            width="244"
            height="340">
            <v-icon 
              class="wishlist" 
              @click="flip(items.id)">mdi-arrow-left-circle</v-icon>
            
            <div class="delUpt">
              <v-btn class="updt">Update</v-btn>
              <v-btn 
                class="del" 
                @click="delItem(items.id)">Delete</v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default{
  // data() {
  //   return {
  //     cardOne: "start"
  //   };
  // },
    computed:{
        disp(){
            // console.log(this.$store.state.addProd.prodList);
            let data= this.$store.state.addProd.prodList
            console.log('data:',data);
            return data
        }
    },
    methods:{
      ...mapActions('cart', ['appendCart']),
      ...mapActions('addProd', ['flipCard', 'delProd']),
      addToCart(list,ind){
        // let data={...list, list[quantity]=1}
        list['id']=ind
        this.appendCart(list)        
      },
      flip(id){
        this.flipCard(id)
      },
      delItem(){
        this.delProd()
      }
    }
}
</script>

<style scoped>
.delUpt{
  height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.del{
  border: 2px solid #BA0021;
  color: #BA0021 !important;
  background-color:transparent !important;
}

.del:hover{
  background-color: #BA0021 !important;
  color: white !important;
}
.updt:hover{
  background-color: #FFD800 !important;
  color: white !important;
}
.updt{
  border: 2px solid #FFD800;
  color: #FFD800 !important;
  background-color:transparent !important;
}
.card {
  transition: transform 1s;
  transform-style: preserve-3d;
  position: relative;
}
.card__face {
  
  position: absolute;
  font-weight: bold;
  font-size: 40px;
  backface-visibility: hidden;
}

.card__face--back {
  transform: rotateY(180deg);
}
.flipme {
  transform: rotateY(180deg);
}
.wishlist{
position: absolute !important;
/* float: right; */
font-size: 27px;
}
.wishlist:hover{
  cursor: pointer;
  color: #BA0021;
}
.v-image
{
  margin: auto;
  height: 180px;
  width: 180px;
}
</style>