import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  } from 'chart.js'
  import { Line } from 'vue-chartjs'
  
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

  Vue.component('LineChart',{
    extend:Line
  })