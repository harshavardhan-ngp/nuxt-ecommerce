<template>
  <div>
    <AddProducts />
    <v-container >
      <v-row>
        <v-col 
          v-for="(items,ind) in disp"
          :key="ind" 
          lg="3"
          md="4"
          sm="6"
        >
          <v-card 
            style="margin-top: 60px;"
            class="mx-auto" 
            width="244"
            max-height="600">
            <v-img 
              :src="items.img"
            />
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
              <v-card-text style="padding: 1px 16px 10px;">Quantity : <span>{{ items.quantity }}</span></v-card-text>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default{
    computed:{
        disp(){
            // console.log(this.$store.state.addProd.prodList);
            return this.$store.state.addProd.prodList
        }
    },
    methods:{
      ...mapActions('cart', ['appendCart']),
      addToCart(list,ind){
        // let data={...list, list[quantity]=1}
        list['id']=ind
        this.appendCart(list)        
      }
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