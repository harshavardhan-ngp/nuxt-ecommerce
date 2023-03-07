<template>
  <v-container>
    <v-layout style="justify-content: center;">
      <v-card>
        <v-card-text class="grid">
          <v-flex class="mb-4">
            <v-avatar 
              size="96" 
              class="mr-4">
              <img 
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="Avatar">
            </v-avatar>
          </v-flex>
          <v-card-title style="justify-content: center;">Cafe Badilico</v-card-title>
          <v-card-subtitle style="margin: 0 auto;">badi@yahoo.com</v-card-subtitle>
          <!-- <v-text-field
            v-model="form.firstName"
            label="FirstName"/>
          <v-text-field
            v-model="form.lastName"
            label="Last Name"/>
          <v-text-field
            v-model="form.contactEmail"
            label="Email Address"/> -->
          <v-card-text >Hey! My name is Cafe Badilico and i love to design. Check out my store & don't forget to rate it.</v-card-text>
        </v-card-text>
        
      </v-card>
    </v-layout>
   
  </v-container>
</template>

<script>
    // import AvatarPicker from '~/components/AvatarPicker'

    export default {
        pageTitle: 'My Profile',

        // components: { AvatarPicker },

        data () {
            return {
                loading: false,
                form: {
                    firstName: 'John',
                    lastName: 'Doe',
                    contactEmail: 'john@doe.com',
                    avatar: 'MALE_CAUCASIAN_BLOND_BEARD'
                },
                showAvatarPicker: false
            }
        },
    }
</script>

<style>
.mb-4{
    display: flex;
    justify-content: center;
}
.grid{
    display: grid;
    justify-content: center;
}
</style>