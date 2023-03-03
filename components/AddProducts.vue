<template>
  <v-row 
    justify="center" 
    data-app>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          class="addBtn"
          v-on="on"
        >
          Add +
        </v-btn>
      </template>
      <v-card >
        <v-card-text>
          <v-text-field 
            v-model="data.pname" 
            label="Product Name" 
            required />

          <v-autocomplete 
            :items="countries" 
            v-model="data.ptype" 
            label="Product Type" 
            required />

          <v-text-field 
            v-model="data.price" 
            label="Price" 
            required />

          <v-text-field 
            v-model="data.quantity" 
            label="Quantity" 
            type="number" 
            required />


          <v-file-input 
            placeholder="Upload your documents" 
            label="File input"
            prepend-icon="mdi-paperclip" 
            @change="imgUpload" />
          
          <div class="btnCenter">
            <v-btn 
              class="btnClose" 
              @click="dialog = false">
              Close
            </v-btn>
            <v-btn 
              class="btnSub" 
              @click="handleSubmit">
              Submit
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
      
    </v-dialog>
  </v-row>
</template>


<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  
  name: 'AddProducts',
  data: () => ({
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
    }
  }),
  methods: {
    ...mapActions('addProd',['changeModal', 'appendList']),
    handleSubmit(e) {
      e.preventDefault()
      // console.log(this.data);
      this.appendList(this.data)
      this.dialog=false
      this.data={}
      this.image=[]
    },
    imgUpload(e) {
      // console.log(e);
      const reader = new FileReader()

      let rawImg;
      reader.onloadend =(e) => {
        rawImg = reader.result;
        this.data.img=e.target.result
        // console.log('e:',e);
      }
      // this.data.image=rawImg
      reader.readAsDataURL(e)
      // console.log("e:",this.data)
    },
    modal() {
      this.changeModal()
    }
  },
}
</script>

<style scoped>
.v-dialog__container {
    display: unset; 
}
.v-dialog__content--active {
  height: 70%;
    backdrop-filter: blur(3px);
}


.row{
  justify-content: flex-end;
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