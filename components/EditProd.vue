<template>
  
  <v-dialog
    v-model="dialog"
    data-app
    max-width="400px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-icon 
        v-bind="attrs"
        class="edit"
        v-on="on"
        @click="getEdit"
      >mdi-square-edit-outline</v-icon>
       
    </template>
    <v-card>
      <v-toolbar
        class="toolbar"
        dark
        color="primary"
      >
        <v-btn
          icon
          dark
          @click="dialog = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <div class="delUpt">
        <v-dialog
          v-model="formDialog"
          persistent
          max-width="600px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn 
              v-bind="attrs"
              class="updt"
              v-on="on"
              @click="updtBtn"
            >Update</v-btn>

          </template>
          <v-card >
            <v-form ref="form">
              <v-card-text v-if="data.length>0">
                <v-text-field 
                  v-model="data[0].pname" 
                  :rules="[v => !!v || 'Name is required']"
                  label="Product Name" 
                  required />

                <!-- :items="countries"  -->
                <v-autocomplete 
                  :items="countries" 
                  :rules="[v => !!v || 'Type is required']"
                  v-model="data[0].ptype" 
                  label="Product Type" 
                  required />

                <v-text-field 
                  v-model="data[0].price" 
                  :rules="[v => !!v || 'Price is required']"
                  label="Price" 
                  required />

                <v-text-field 
                  v-model="data[0].quantity" 
                  :rules="[v => !!v || 'Quantity is required']"
                  label="Quantity" 
                  type="number" 
                  required />

                <v-file-input 
                  v-model="data[0].imgName"
                  :rules="[v => !!v || 'Image is required']"
                  accept="image/*"
                  placeholder="Upload your documents" 
                  label="File input"
                  prepend-icon="mdi-paperclip" 
                  @change="imgUpload"
                />
                <!-- @change="imgUpload"  -->
          
                <div class="btnCenter">
                  <v-btn 
                    class="btnClose" 
                    @click="dialog = false, formDialog=false, data={}">
                    Close
                  </v-btn>
                  <v-btn 
                    class="btnSub" 
                    @click="handleSubmit"
                  >
                    Update
                  </v-btn>
                </div>
              </v-card-text>
            </v-form>
          </v-card>
        </v-dialog>
        <v-btn 
          class="del" 
          @click="delBtn"
        >Delete</v-btn>
      </div>
    </v-card>
        
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  
  name: 'AddProducts',
  props:{
    prodId:{
        type:Number,
        required: true
    },
  },
  data: () => ({
    image:'',
    countries: ['Accessories', 'Fashion', 'Mobile Phones', 'Laptops'],
    data: {
      img:[],
      pname: null,
      ptype: null,
      price: null,
      quantity: null,
      cardOne:'start'
    },
    dialog: false,
    formDialog: false,
  }),
  computed:{
    ...mapGetters('addProd',['editProd']),

    },
  methods:{
    ...mapActions('addProd', ['delProd', 'updtProd', 'updtList']),
    delBtn(){
        this.delProd(this.prodId)
    },
    handleSubmit(e) {
      e.preventDefault()
      console.log('submit:',this.data[0]);
      if(this.data[0].img && this.data[0].pname && this.data[0].ptype && this.data[0].quantity && this.data[0].price){
        // console.log(this.data);
        this.updtList(this.data[0])
        this.dialog=false
        this.data={}
        this.image=[]
        this.$refs.form.resetValidation()
      }
      // this.appendList(this.data)
      // this.image=[]
    },
    imgUpload(e) {
      // console.log(e);
      const reader = new FileReader()

      let rawImg;
      reader.onloadend =(e) => {
        rawImg = reader.result;
        this.data[0].img=e.target.result
        // console.log('e:',e);
      }
      // this.data.image=rawImg
      reader.readAsDataURL(e)
      // console.log("e:",this.data)
    },
    updtBtn(){
        this.data=this.editProd
            console.log('data:',this.data);

        // this.updtProd(this.prodId)
    },
    getEdit(){
        this.updtProd(this.prodId)
    },
},

}
</script>

<style scoped>
.edit:hover{
  cursor: pointer;
  color: black;
}
.v-dialog__content--active {
  height: 70%;
    backdrop-filter: blur(3px);
}
.delUpt{
    background-color: #272727;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.del{
    border: 2px solid #BA0021;
    margin-bottom: 10px;
  color: #BA0021 !important;
  background-color:transparent !important;
}

.del:hover{
  background-color: #BA0021 !important;
  color: white !important;
}
.updt:hover{
  background-color: #FFD800 !important;
  color: white !important;
}
.updt{
    margin-bottom: 10px;
  border: 2px solid #FFD800;
  color: #FFD800 !important;
  background-color:transparent !important;
}
.v-sheet.v-toolbar:not(.v-sheet--outlined){
    box-shadow: none;
}
.v-sheet .v-toolbar__content{
    height: 37px !important;
    padding: 0px !important; 
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