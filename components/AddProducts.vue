<template>
  <div data-app>
    <v-btn 
      class="addBtn" 
      @click="modal">
      Add +
    </v-btn>
    <v-container 
      v-if="showModal" 
      class="modal">
      <!-- <v-app> -->
      <v-layout justify-center>

        <v-card class="mt-5">
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
              v-model="image" 
              placeholder="Upload your documents" 
              label="File input"
              prepend-icon="mdi-paperclip" 
              @change="imgUpload" />
            <!-- <v-text-field
              v-model="image"
              type="file"
              required
              /> -->
            <div class="btnCenter">
              <v-btn 
                class="btnSub" 
                @click="handleSubmit">
                Submit
              </v-btn>
              <v-btn 
                class="btnClose" 
                @click="modal">
                Close
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-layout>
      <!-- </v-app> -->
    </v-container>
  </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  
  name: 'AddProducts',
  data: () => ({
    countries: ['Accessories', 'Fashion', 'Mobile Phones', 'Laptops'],
    image:[],
    data: {
      img:'',
      pname: null,
      ptype: null,
      price: null,
      quantity: null,
    }
  }),
  computed: {
    ...mapGetters('addProd',['isModal']),
    showModal() {
      return this.isModal
      // return this.$store.getters['addProd/isModal']
    }
  },
  methods: {
    ...mapActions('addProd',['changeModal', 'appendList']),
    handleSubmit(e) {
      e.preventDefault()
      console.log(this.data);
      this.appendList(this.data)
      this.data={}
      this.image=[]
      this.changeModal()
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
      console.log("e:",this.data)
    },
    modal() {
      this.changeModal()
    }
  },
}
</script>

<style scoped>
.modal {
  backdrop-filter: blur(7px);
  position: absolute;
  z-index: 1;
  max-width: 100%;
}

.addBtn {
  margin: 10px 30px 10px 10px;
  float: right;
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


.layout {
  display: block !important;
  flex: none !important;
  width: 500px;
  margin: 0 auto;
}
</style>