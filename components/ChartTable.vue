<template>
  <v-simple-table
    fixed-header
    class="table"
  >
    <template v-slot:default>
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
          <!-- <th>
              Sub-Total
            </th> -->
        </tr>
      </thead>
      <tbody>
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
            <!-- <v-icon 
                class="del" 
                @click="decrease(items.id)" >mdi-minus-box-outline</v-icon> -->
            {{ items.quantity }}
            <!-- <v-icon 
                class="add" 
                @click="increase(items.id)">mdi-plus-box-outline</v-icon> -->
          </td>
          <!-- <td v-if="items.total>0">{{ items.total }}</td>
            <td v-else>
              <v-icon 
                class="remove" 
                @click="remove(items.id)"
              >mdi-delete-circle</v-icon>
            </td> -->
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default{
    data(){
        return{
            getList:[
            {
                id:1,
                img:require("@/assets/iphn.jpeg"),
                pname:'iphone',
                ptype:'Mobile Phones',
                quantity:1,
                price:'12000',
                imgName:'',
                total:''
                }
            ]
        }
    }
}
</script>

<style scoped>
.v-image
{
  margin: auto;
  height: 80px;
  width: 80px;
}
.table{
	max-height: 528px !important;
}
th{
  text-align: center!important;
  background-color: #D4F1F4 !important;
  font-size: 15px !important;
  font-family: 'Ubuntu', sans-serif;
  /* font-family: 'Source Sans Pro', sans-serif; */
  color: #051422 !important;
  text-transform: uppercase;
}
td{
  /* padding: 15px !important; */
  background-color: #D4F1F4 !important;
  text-align: center;
  font-size: 14px !important;
  font-family: 'Ubuntu', sans-serif;
  /* font-family: 'Source Sans Pro', sans-serif; */
  color: #051422 !important;
  border-bottom: solid 1px rgba(255, 255, 255, 0.849);

}
</style>