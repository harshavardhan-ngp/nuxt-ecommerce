<template>
  <v-container fluid>
    <v-app>
      <v-row>
        <v-col lg="8">
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
                  Total
                </th>
              </tr>
            </thead>
            <tbody v-if="getList.length>0">
              <tr
                v-for="(items,ind) in getList"
                :key="ind"
              >
                <td>{{ items.pname }}</td>
                <td><v-img :src=" items.img" /></td>
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
                    @click="remove"
                  >mdi-delete-circle</v-icon>
                </td>
              </tr>
            </tbody>
            <tbody v-else>
              No Items in Cart
            </tbody>
          </table>
        </v-col>
        <v-col lg="4">
          <CheckOut />
        </v-col>
      </v-row>
    </v-app>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default{
    computed:{
        ...mapState('addProd',['prodList']),
        ...mapGetters('cart',['showCart']),
        getList(){
            // console.log(this.showCart);
            return this.showCart
        }
    },
    methods:{
        ...mapActions('cart',['addQuan', 'delQuan', 'removeFromCart']),
        increase(ind){
          const data = this.prodList.find(ele=> ele.id==ind)
          this.addQuan(data)
        },
        decrease(ind){
          const data = this.prodList.find(ele=> ele.id==ind)
            this.delQuan(data)
        },
        remove(){
            this.removeFromCart()
        }
    }
}
</script>

<style scoped>
.add:hover,.del:hover, .remove:hover{
cursor: pointer;
}
.remove{
    font-size: xx-large !important;
    color: #BA0021 !important;
}
.v-image
{
  margin: auto;
  height: 80px;
  width: 80px;
}
.table{
     /* background: -webkit-linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  background: linear-gradient(#84fab0 10%, #8fd3f4 100%);
  font-family: 'Roboto', sans-serif; */
  background-color: #E9E8E7

;
}
.thead{
  background-color: #756e6e62;
 
}
.table{
  width:100%;
  table-layout: fixed;
}

th{
    text-align: center!important;
  padding: 20px 15px;
  font-weight: 500;
  font-size: 17px;
  font-family: 'Source Sans Pro', sans-serif;
  color: #000;
  text-transform: uppercase;
}
td{
  padding: 15px;
  text-align: center;
  vertical-align:middle;
  font-size: 15px;
  font-family: 'Source Sans Pro', sans-serif;
  color: #000;
  border-bottom: solid 1px rgba(255, 255, 255, 0.849);
  /* border-right: solid 1px rgba(255, 255, 255, 0.849); */
  /* border-left: solid 1px rgba(255, 255, 255, 0.849); */
}

</style>