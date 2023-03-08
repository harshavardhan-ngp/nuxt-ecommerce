<template>
    
  <v-card
    class="chartCard"
  >
    <v-toolbar 
      color="#D4F1F4"
      dense 
      elevation="0" >
      <v-tabs
        v-model="tab"
        align-with-title
      >
        <v-tabs-slider 
          class="tabSlider" />

        <v-tab
          class="tabs">
          Activity
        </v-tab>
        <v-tab
          class="tabs" >
          Clicks
        </v-tab>
        <v-tab
          class="tabs">
          Sales
        </v-tab>
      </v-tabs>
      
      <v-spacer/>

      <v-menu
        
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            class="dropdown"
            text
            v-on="on"
          >
            Week
            <v-icon>
              mdi-chevron-down
            </v-icon>
          </v-btn>
        </template>

        <v-list >
          <v-list-item>Item-1</v-list-item>
          <v-list-item>Item-2</v-list-item>
        </v-list>
      </v-menu>
      
    </v-toolbar>
  
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  
  </v-card>

</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default{
    data(){
        return {
            tab: null,
            items: [
          'Activity', 'Clicks', 'Sales',
        ],
        chartData: {
        labels: [ 'January', 'February', 'March' ],
        datasets: [ { data: [40, 20, 12] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
    },
}
</script>

<style>
.v-sheet.v-toolbar:not(.v-sheet--outlined){
    box-shadow: none !important;
}
.tabSlider{
    position: absolute;
    left: 15px;
    width: 24px !important;
}
.tabs{
    padding: 0px 10px !important;
}
.dropdown{
    background-color: #051422 !important;
    color: #fff !important;
}
.chartCard{
    background-color: #D4F1F4 !important;
}
</style>