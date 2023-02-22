<template>
  <div >
    <v-app>
      <v-layout justify-center>
        
        <v-card class="mt-5">
          <v-card-text>
            <v-text-field
              v-model="pname"
              label="Product Name"
              required
            />

            <v-autocomplete
              :items="countries"
              v-model="ptype"
              label="Product Type"
              required
            />
            <v-text-field
              v-model="price"
              label="Price"
              required
            />
            <v-text-field
              v-model="quantity"
              label="Quantity"
              type="number"
              required
            />
            <v-text-field
              v-model="image"
              type="file"
              required
            />
           
          </v-card-text>
        </v-card>
        <v-btn 
          variant="tonal">
          Submit
        </v-btn>
      </v-layout>
    </v-app>
  </div>
</template>

<script>
export default {
  name:'AddProducts',
  data: () => ({
    image:'',
    countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra'],
    errorMessages: [],
    pname: null,
    ptype: null,
    price: null,
    qunatity: null,
  }),
}
</script>

<style scoped>
.v-btn{
  display: flex !important;
}
.layout{
  display: block !important;
  flex: none !important;
  width: 500px;
  margin: 0 auto;
}
</style>