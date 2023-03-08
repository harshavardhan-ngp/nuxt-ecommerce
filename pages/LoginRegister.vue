<template>
  <div>
    <div 
      :class="'loginForm'">
      <v-sheet 
        width="300" 
        class="form">
        <v-form v-if="!registerActive">
          <h2 style="margin-bottom: 30px;">Sign In</h2>
          <v-text-field 
            v-model="login.uname" 
            class="text-field" 
            label="User Name" 
            type="text" />
          <v-text-field 
            v-model="login.password" 
            label="Password" 
            type="password" />
          
          <v-btn 
            class="logBtn"
            color="primary" 
            @click="onSubmit">
            Login
          </v-btn>
          <p class="mt-4">Don't have an account? <span
            @click="registerActive = !registerActive, isSubmitted = false">Sign up here</span>
          </p>
        <!-- </NuxtLink> -->
        </v-form>

        <!-- REGISTRATION -->
    
        <v-form v-else>
          <h2 style="margin-bottom: 30px;">Sign Up</h2>
          <v-text-field 
            v-model="reg.uname" 
            class="text-field" 
            label="User Name" 
            type="text" />
          <v-text-field 
            v-model="reg.password" 
            label="Password" 
            type="password" />

          <v-text-field 
            v-model="cnfpassword" 
            label="Confirm Password" 
            type="password" />
          <v-btn 
            class="logBtn"
            color="primary" 
            @click="onRegister">
            Register
          </v-btn>
          <p class="mt-4">Already have an account? <span
            @click="registerActive = !registerActive, isSubmitted = false">Sign in</span>
          </p>
        </v-form>
      </v-sheet>
    </div>
  </div>
</template>
  
  <script>
  import{mapGetters, mapActions} from 'vuex'
  export default {
    data() {
      return {
        login: {
          uname: '',
          password: ''
        },
        reg: {
          uname: '',
          password: '',
        },
        cnfpassword: '',
        registerActive: false
      }
    },
    layout: 'login',
    computed:{
      ...mapGetters('login',['showCredential']),
    },
    methods: {
      ...mapActions('login',['register']),
      onSubmit(e) {
        e.preventDefault()
        if(this.showCredential.uname=== this.login.uname && this.showCredential.password=== this.login.password)
        {
          console.log(this.showCredential,':',this.login);
          localStorage.setItem('uname', this.login.uname)
          localStorage.setItem('password', this.login.password)
          this.$router.push('/')
        }
        else{
        this.$toast.error('Incorrect Credentials!!');
      }
        // this.$toaster('signIN','success')
      },
      onRegister(e){
        e.preventDefault()
        if(this.reg.password !=this.cnfpassword){
          return this.$toast.error('Incorrect Credentials!!');
        }
        this.register(this.reg)
        // this.$router.push('/login')
        this.registerActive=!this.registerActive
        // localStorage.setItem('uname', this.reg.uname)
        // localStorage.setItem('password', this.reg.password)
        
      }
    }
  
  }
  </script>
  
  <style scoped>
  .mt-4{
    margin-top: 13px;
  }
  span {
    cursor: pointer;
    text-decoration: underline;
    color: blue;
}
  .form{
    background-color: transparent !important;

  }
  .logBtn{
    color:#343434 !important;
    border: 1px solid #343434;
    background-color: white;
  }
  .logBtn:hover{
    color:#fff !important;
    /* border: 1px solid #343434; */
    background-color: #343434;
  }
  .loginForm {
    min-height: 100vh;
    display: flex;
    justify-content: flex-end;
    margin: 0 15%;
    align-items: center;
    text-align: center;
  }

  
  </style>