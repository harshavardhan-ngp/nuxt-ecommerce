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
            series: [
              {
                name: "Desktops",
                data: [10, 41, 35, 51, 75, 61, 65]
              },
              {
                name: "Mobile Phones",
                data: [20, 11, 31, 20, 49, 52, 70]
              },
              {
                name: "Laptops",
                data: [8, 34, 20, 48, 29, 42, 57]
              },

        ],
          chartOptions: {
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              }
            },
            colors: ['#DC4731', '#BA8D80', '#051422'],
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
            legend: {
              tooltipHoverFormatter: function(val, opts) {
                return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
              }
            },
          },
        }
    }
}
</script>