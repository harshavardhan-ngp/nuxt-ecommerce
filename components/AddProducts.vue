<template>
  <v-row 
    data-app>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-if="isType"
          class="showAll"
          @click="showAll"
        >
          Show All
        </v-btn>
        <v-btn
          v-bind="attrs"
          class="addBtn"
          v-on="on"
        >
          Add +
        </v-btn>
      </template>
      <v-card>
        <v-form ref="form">
          <v-card-text>
            <v-text-field 
              v-model="data.pname"
              :rules="nameRules"
              class="error"
              label="Product Name" 
              required />

            <v-autocomplete 
              :items="countries" 
              v-model="data.ptype" 
              :rules="[v => !!v || 'Type is required']"
              label="Product Type" 
              required />

            <v-text-field 
              v-model="data.price" 
              :rules="[v => !!v || 'Price is required']"
              label="Price" 
              required />

            <v-text-field 
              v-model="data.quantity" 
              :rules="[v => !!v || 'Quantity is required']"
              min="0"
              label="Quantity" 
              type="number" 
              required />


            <v-file-input 
              v-model="image"
              :rules="[v => !!v || 'Image is required']" 
              accept="image/*"
              placeholder="Upload your documents"
              label="File input"
              prepend-icon="mdi-paperclip" 
              @change="imgUpload" />
          
            <div class="btnCenter">
              <v-btn 
                class="btnClose" 
                @click="closeDialog">
                Close
              </v-btn>
              <!-- :disabled="formValid" -->
              <v-btn 
                class="btnSub" 
                @click="handleSubmit">
                Submit
              </v-btn>
            </div>
          </v-card-text>
        </v-form>
      </v-card>
      
    </v-dialog>
  </v-row>
</template>


<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  
  name: 'AddProducts',
  data: () => ({
    valid: true,
    dialog: false,
    countries: ['Accessories', 'Fashion', 'Mobile Phones', 'Laptops'],
    image:[],
    data: {
      img:'',
      pname: null,
      ptype: null,
      price: null,
      quantity: null,
    },
    nameRules: [
        v => !!v || 'Name is required',
      ],
  }),
  computed:{
    ...mapGetters('addProd',['showType', 'hasDuplicate']),
    isType(){
      return this.showType

    }
  },
  methods: {
    ...mapActions('addProd',['appendList', 'setType',]),
    async handleSubmit(e) {
      e.preventDefault()
      if(this.data.img && this.data.pname && this.data.ptype && this.data.quantity>0 && this.data.price){
        // console.log(this.data);
        this.appendList(this.data)
        if(this.hasDuplicate){
        return this.$toast.error('Duplicates are not allowed');     
      }
      this.dialog=false
      this.data={}
      this.image=[]
      this.$refs.form.resetValidation()
      this.$toast.warning('Added Successfully');     
    }
    else if(this.data.quantity<=0){
        return this.$toast.error('Quantity should be 1 or greater');     
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
    showAll(){
      this.setType('')
    },
    closeDialog(){
      // console.log('reset:',this.$refs.form);
      this.$refs.form.resetValidation()
      this.dialog = false;
      this.data={}
      this.image=[]
    }
  },
}
</script>

<style scoped>
.error--text{
  color: orangered !important;
  font-size: 13px !important;
  font-weight: bold !important;
}
.showAll{
  background-color: black !important;
  color: #fff !important;
}
.v-dialog__container {
    display: unset; 
}
.v-dialog__content--active {
  height: 100vh;
    backdrop-filter: blur(3px);
}
.showAll, .addBtn{
  margin:0px 15px
}

.row{
  justify-content: center;
  margin: 10px 30px 10px 10px;
}
.addBtn {
  /* background-color: transparent !important;
  border: 2px solid #00693E; */
  color: black;
	cursor: pointer;
	display: block;
	position: relative;
	border: 2px solid #00693E;
	transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  
}

.addBtn:hover {
  /* background-color: #00693E !important;
  color: white; */
  color: #fff !important;
	background-color: #00693E !important;
	text-shadow: ntwo;
}
.addBtn:hover::before {
  top: 0%;
	bottom: auto;
	height: 100%;
}
.addBtn::before {
  display: block;
	position: absolute;
	left: 0px;
	bottom: 0px;
	height: 0px;
	width: 100%;
	z-index: -1;
	content: '';
	color: #000 !important;
	background: #00693E;
	transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
}

.btnSub,
.btnClose {
  margin: 0 10px;
}

.btnSub {
  border: 2px solid black;
  background-color: transparent !important;
}

.btnSub:hover {
  color: white;
  background-color: black !important;
}

.btnClose {
  background-color: #BA0021 !important;
  color: white !important;
  /* border: 1px solid #e41c38; */
}

.btnCenter {
  display: flex !important;
  flex-direction: row;
  justify-content: center;
}

</style>