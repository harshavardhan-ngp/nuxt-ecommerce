<template>
  <v-form ref="form">
    <v-card-text>
      <v-text-field 
        class="textFont"
        label="Product Name" 
        required />

      <v-autocomplete 
        :items="countries"
        class="textFont" 
        label="Product Type" 
        required />

      <v-text-field 
        v-model="data.price"
        class="textFont" 
        label="Price" 
        required />

      <v-text-field 
        v-model="data.quantity"
        class="textFont" 
        min="0"
        label="Quantity" 
        type="number" 
        required />

      <!-- <v-file-input 
              v-model="image"
              accept="image/*"
              placeholder="Upload your documents"
              label="File input"
              prepend-icon="mdi-paperclip" 
              @change="imgUpload" /> -->
          
      <!-- <div class="btnCenter"> -->
      <v-btn 
        class="btnSub" 
        @click="handleSubmit">
        Submit
      </v-btn>
      <!-- </div> -->
    </v-card-text>
  </v-form>
</template>

<script>
export default{
    data: () => ({
    countries: ['Accessories', 'Fashion', 'Mobile Phones', 'Laptops'],
    image:[],
    data: {
      img:'',
      pname: null,
      ptype: null,
      price: null,
      quantity: null,
    },
  }),
  methods:{
    async handleSubmit(e) {
      e.preventDefault()
      if(this.data.img && this.data.pname && this.data.ptype && this.data.quantity>0 && this.data.price){
        console.log(this.data);
        // this.appendList(this.data)
    //     if(this.hasDuplicate){
    //     return this.$toast.error('Duplicates are not allowed');     
    //   }
      this.data={}
      this.image=[]
      this.$refs.form.resetValidation()
    //   this.$toast.warning('Added Successfully');     
    }
    else if(this.data.quantity<=0){
        // return this.$toast.error('Quantity should be 1 or greater');     
      }
    },
    imgUpload(e) {
      this.data['imgName']=e
      const reader = new FileReader()
      let rawImg
      reader.onloadend =(e) => {
        rawImg = reader.result;
        this.data.img=e.target.result
      }
      reader.readAsDataURL(e)
      // console.log("e:",this.data)
    },
  }
}
</script>

<style scoped>
.textFont{
    font-family: 'Ubuntu', sans-serif;
    color: #051422 !important;
    /* font-size: 14px; */
}
.btnSub{
    font-family: 'Ubuntu', sans-serif;
    border: 2px solid #051422 !important;
    border-radius: 10px !important;
    color: #fff !important;
    background-color: #051422 !important;
}
.btnSub:hover{
    color: #051422 !important;
    background-color: #fff !important;
}
</style>