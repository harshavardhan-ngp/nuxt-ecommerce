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
      methodName: "start"
    };
  },
    computed:{
      ...mapGetters('addProd',['showList']),
        disp(){
            // console.log(this.$store.state.addProd.prodList);
            let data= this.showList
            // console.log('data:',data);
            return data
        }
    },
    methods:{
      ...mapActions('cart', ['appendCart']),
      ...mapActions('addProd', ['delProd']),
      addToCart(list,ind){
        // let data={...list, list[quantity]=1}
        list['id']=ind
        this.appendCart(list)        
      },
      delItem(id){
        this.delProd(id)
      },

    }
}
</script>

<style scoped>

.v-image
{
  margin: auto;
  height: 180px;
  width: 180px;
}
</style>