<template>
  <v-container>
    <v-card
      class="mx-auto"
      style="background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);;"
    >
      <h1>Total</h1>
      <table class="table">
        <thead class="thead">
          <tr>
            <th>
              Name
            </th>
            <th>
              Image
            </th>
            <th>
              Type
            </th>
            <th>
              Unit-Price
            </th>
            <th>
              Quantity
            </th>
            <th>
              Sub-Total
            </th>
          </tr>
        </thead>
        <tbody v-if="getList.length>0">
          <tr
            v-for="(items,ind) in getList"
            :key="ind"
          >
            <td style="text-transform: capitalize;">{{ items.pname }}</td>
            <td><v-img 
              :src=" items.img"/></td>
            <td>{{ items.ptype }}</td>
            <td>{{ items.price }}</td>
            <td>
              <v-icon 
                class="del" 
                @click="decrease(items.id)" >mdi-minus-box-outline</v-icon>
              {{ items.quantity }}
              <v-icon 
                class="add" 
                @click="increase(items.id)">mdi-plus-box-outline</v-icon>
            </td>
            <td v-if="items.total>0">{{ items.total }}</td>
            <td v-else>
              <v-icon 
                class="remove" 
                @click="remove(items.id)"
              >mdi-delete-circle</v-icon>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="total">
        <h4>Total:</h4>
        <span>{{ getTotal }}</span>
      </div>
    </v-card>
  </v-container>
</template>

<!-- v-if="items.total>0"  -->
<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default{
    computed:{
        // ...mapState('addProd',['prodList']),
        ...mapGetters('cart',['showCart', 'total']),
        getList(){
            // console.log(this.showCart);
            return this.showCart
        },
        getTotal(){
            let total=0
            this.showCart.forEach(ele => {
            // this.total+=ele.total
            total+=ele.total
        });
            return total
        }
    },
}
</script>

<style scoped>
.v-image
{
  margin: auto;
  height: 80px;
  width: 80px;
}
.total{
    display: flex;
    justify-content: flex-end;
    /* text-align: right; */
}
.table{
    width: 100%;
}
.total h4, .total span{
  padding: 0px 10px;
}
th{
    /* text-align: left !important;; */
  padding: 20px 15px;
  font-weight: bold;
  font-size: 18px;
  color: #000;
  font-family: 'Source Sans Pro', sans-serif;
  text-transform: uppercase;
}
td{
  padding: 15px;
  text-align: center;
  /* vertical-align:middle; */
  font-weight: 400;
  font-size: 15px;
  font-family: 'Source Sans Pro', sans-serif;
  color: #000;
  
}
</style>