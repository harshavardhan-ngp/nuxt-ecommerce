<template>
  <v-container>
    <div class="total">
      <h4>Total:</h4>
      <span>{{ getTotal }}</span>
    </div>
    <v-simple-table
      fixed-header
      class="table"
    >
      <template v-slot:default>
        <!-- <v-card
      class="mx-auto"
      style="background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);;"
    > -->
        <thead >
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
      </template>
    </v-simple-table>
    
    <!-- </v-card> -->
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default{
    computed:{
        ...mapState('addProd',['prodList']),
        ...mapGetters('cart',['showCart', 'total']),
        getList(){
            console.log(this.showCart);
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
    methods:{
        ...mapActions('cart',['addQuan', 'delQuan', 'removeFromCart']),
        increase(ind){
          const data = this.prodList.find(ele=> ele.id==ind)
          // console.log('addQUAN:',data);
          if(data.quantity==0)
          return this.$toast.error('No Stocks Left !!');
          this.addQuan(data)
        },
        decrease(ind){
          const data = this.prodList.find(ele=> ele.id==ind)
            this.delQuan(data)
        },
        remove(ind){
            this.removeFromCart(ind)
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vast+Shadow&display=swap');
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
.total{
  font-family: 'Vast Shadow', cursive;
  font-size: xx-large;
    display: flex;
    justify-content: flex-end;
    /* margin: 10px; */
    padding: 15px;
    /* text-align: right; */
}
.total h4, .total span{
  padding: 0px 10px;
}
.table{
	max-height: 528px;
  /* background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%); */
}
.v-data-table {
	overflow: auto;
}
.v-data-table /deep/ .v-data-table__wrapper {
	overflow: unset;
}

th{
  text-align: center!important;
  padding: 20px 15px !important;
  font-weight: 500 !important;
  font-size: 20px !important;
  font-family: 'Source Sans Pro', sans-serif;
  color: #000 !important;
  text-transform: uppercase;
  /* background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%) !important; */
}
td{
  padding: 15px !important;
  text-align: center;
  font-size: 17px !important;
  font-family: 'Source Sans Pro', sans-serif;
  color: #000 !important;
  border-bottom: solid 1px rgba(255, 255, 255, 0.849);

}

</style>