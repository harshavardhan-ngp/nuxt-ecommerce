<template>
  <v-card 
    class="mx-auto" 
    max-width="344" 
    outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">OVERLINE</div>
        <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-img 
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        max-width="80" />

      <v-card-actions>
        <v-btn text>Button</v-btn>
        <v-btn text>Button</v-btn>
      </v-card-actions>
  </v-list-item></v-card>
</template>

<style scoped>
.card{
    display: flex;
}
</style>