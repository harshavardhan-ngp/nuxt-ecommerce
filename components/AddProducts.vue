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
import { mapActions } from 'vuex';
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
      cardOne:'start'
    },
    nameRules: [
        v => !!v || 'Name is required',
      ],
  }),
  methods: {
    ...mapActions('addProd',['changeModal', 'appendList', 'setType']),
    handleSubmit(e) {
      e.preventDefault()
      if(this.data.img && this.data.pname && this.data.ptype && this.data.quantity && this.data.price){
        // console.log(this.data);
        this.appendList(this.data)
        this.dialog=false
        this.data={}
        this.image=[]
        this.$refs.form.resetValidation()
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
    modal() {
      this.changeModal()
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
  height: 70%;
    backdrop-filter: blur(3px);
}


.row{
  justify-content: space-between;
  margin: 10px 30px 10px 10px;
}
.addBtn {
  background-color: transparent !important;
  border: 2px solid #00693E;
}

.addBtn:hover {
  background-color: #00693E !important;
  color: white;
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