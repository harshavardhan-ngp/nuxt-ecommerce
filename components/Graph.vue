<template>
  <apexchart 
    :options="chartOptions" 
    :series="series" 
    type="line" 
    height="350"/>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import Vue from 'vue'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

export default{
    components: {
          apexchart: VueApexCharts,
        },
    data(){
        return{
            series: [{
              name: "Desktops",
              data: [10, 41, 35, 51, 49, 62, 69]
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            title: {
              align: 'left'
            },
            grid: {
              row: {
                colors: ['#D4F1F4'],
                // opacity: 0.5
              },
            },
            xaxis: {
              categories: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            },
            colors: ['#fff']
          },
        }
    }
}
</script>