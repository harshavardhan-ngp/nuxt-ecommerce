<template>
  <div>
    <AddProducts />
    <v-container >
      <v-row>
        <v-col 
          v-for="(items,ind) in disp" 
          :key="ind">
          <v-card 
            
            style="margin-top: 60px;"
            class="mx-auto" 
            max-width="344">
            <v-img 
              :src="items.img" 
              height="200px" 
              cover/>
          
            <v-card-title>
              {{ items.pname }}
            </v-card-title>
          
            <v-card-subtitle style="padding-bottom: 8px;">
              {{ items.ptype }}
            </v-card-subtitle>
            <div>
              <v-card-text style="padding: 3px 16px;">Price : <span>{{ items.price }}</span></v-card-text>
              <v-card-text style="padding: 3px 16px;">Quantity : <span>{{ items.quantity }}</span></v-card-text>
            </div>
          
            <v-card-actions>
              <v-btn 
                color="orange-lighten-2" 
                variant="text">
                <v-icon>mdi-cart-outline</v-icon>
              </v-btn>
              <v-spacer/>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default{
    computed:{
        disp(){
            console.log(this.$store.state.prodList);
            return this.$store.state.prodList
        }
    }
}
</script>