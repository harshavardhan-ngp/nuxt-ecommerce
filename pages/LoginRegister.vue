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
            v-model="login.email" 
            class="text-field" 
            label="Email" 
            type="email" />
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
            v-model="reg.email" 
            class="text-field" 
            label="Email" 
            type="email" />
          <v-text-field 
            v-model="reg.password" 
            label="Password" 
            type="password" />

          <v-text-field 
            v-model="reg.cnfpassword" 
            label="Confirm Password" 
            type="password" />
          <v-btn 
            class="logBtn"
            color="primary" 
            @click="onRegister">
            Register
          </v-btn>
          <p class="mt-4">Don't have an account? <span
            @click="registerActive = !registerActive, isSubmitted = false">Sign up here</span>
          </p>
        </v-form>
      </v-sheet>
    </div>
  </div>
</template>
  
  <script>

  export default {
    data() {
      return {
        login: {
          email: '',
          password: ''
        },
        reg: {
          email: '',
          password: '',
          cnfpassword: '',
        },
        registerActive: false
      }
    },
    layout: 'login',
    methods: {
      onSubmit(e) {
        e.preventDefault()
        localStorage.setItem('email', this.login.email)
        localStorage.setItem('password', this.login.password)
        this.$router.push('/')
        // this.$toaster('signIN','success')
      },
      onRegister(e){
        e.preventDefault()
        localStorage.setItem('email', this.reg.email)
        localStorage.setItem('password', this.reg.password)
        this.$router.push('/')
        
      }
    }
  
  }
  </script>
  
  <style scoped>
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
  .loginForm {
    min-height: 100vh;
    display: flex;
    justify-content: flex-end;
    margin: 0 15%;
    align-items: center;
    text-align: center;
  }

  
  </style>