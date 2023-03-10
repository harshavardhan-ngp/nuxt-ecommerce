<template>
  <v-card
    class="statCard" >
    <v-row>
      <v-col 
        cols="12"
        lg="3" 
        md="3" 
        sm="6"
        xs="12">
        <v-card-text >
          <v-card-title class="one">
            <h3>Engagement</h3>
            <div class="engageText">General statistic of<br> user<b> engagement </b><br>process</div>
          </v-card-title>
        </v-card-text>
      </v-col >
      <v-col 
        style="display: flex" 
        lg="9" 
        md="9" 
        sm="6"
        xs="12">
        <v-row class="statNos">
          <v-col 
            v-for="i in stat" 
            :key="i" 
            style="display: flex;align-items: center;">
            <v-card
              width="140"
              style="border-radius: 20px;"
            >
              <!-- max-width="344" -->
              <v-card-text>
                <v-card class="cardIcon">
                  <v-icon 
                    style="color: #fff;">
                    {{ i.icon }}
                  </v-icon>
                </v-card>
                <h4 
                  class="mt-3 cardText" 
                  style="margin: 14px 35px 23px 0px;">
                  {{ i.text }}
                </h4>
                <h1 class="cardText">
                  {{ i.no }}
                  <v-icon
                    :class="i.css">
                    <!-- class="tick" 
                  style="color: #DC4731;" -->
                    {{ i.arrow }}
                  </v-icon>
                </h1>
              </v-card-text>
            </v-card>
          </v-col> 
          <v-card
            max-height="113"
            width="140"
            class="metricsCard"
            style="border-radius: 20px;"
          >
            <!-- max-width="344" -->
            <v-card-text>
              <h4 
                class="mt-3 cardText" 
                style="margin: 0px 35px 12px 0px;">
                Your New Metrics
              </h4>
              <v-icon class="metricIcon">
                <!-- class="tick" 
                style="color: #DC4731;" -->
                mdi-arrow-right-circle
              </v-icon>
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>   
    </v-row>
  </v-card>
  
</template>

<script>
export default{
    data(){
        return{
            stat:[
                {
                    text:'This Day',
                    icon:'mdi-lightning-bolt',
                    no:133,
                    arrow:'mdi-arrow-up',
                    css:'profit'
                },
                {
                    text:'This Week',
                    icon:'mdi-circle-half-full',
                    no:387,
                    arrow:'mdi-arrow-down',
                    css:'loss'
                },
                {
                    text:'This Month',
                    icon:'mdi-star',
                    no:656,
                    arrow:'mdi-arrow-up',
                    css:'profit'
                },
                {
                    text:'Pending',
                    icon:'mdi-chevron-double-up',
                    no:283,
                    arrow:'mdi-arrow-up',
                    css:'profit'
                },
                // {
                //     text:'Pending',
                //     icon:'mdi-chevron-double-up',
                //     no:283,
                //     arrow:'mdi-arrow-up',
                //     css:'profit'
                // },
            ]
        }
    }
}
</script>

<style>
.metricIcon{
  font-size: 30px !important;
  color: #051422 !important;
}
.metricsCard{
  margin: auto 0px;
  background-color: #D4F1F4 !important;
}
.profit{
    color: limegreen !important;
    font-size: 17px !important;
}
.loss{
    color:crimson !important;
    font-size: 17px !important;
}
.engageText{
    font-family: 'Ubuntu', sans-serif;
    color: #051422;
    width: 65%;
    margin-top: 46px;
    font-size: 15px;
    line-height: normal;
}
.one{
    flex-direction: column !important;
    align-items: flex-start !important;
}
.one h3{
    font-family: 'Golos Text', sans-serif;
    color: #051422;
}
.cardIcon{
    width: fit-content !important;
    position: absolute !important;
    padding: 6px;
    bottom: 92px;
    border-radius: 10px !important;
    background-color: #DC4731 !important;
}
.cardText{
    color: #051422 !important;
    font-family: 'Ubuntu', sans-serif;

}
.statCard{
    background-color: rgb(186,141,128,0.67) !important;
    border-radius: 19px !important;
    margin-bottom: 15px;
}
.flex{
    display: flex;
}

/* mobile phones */
@media only screen and (max-width: 600px) {
.engageText{
  width: 51%;
}
.statCard{
  margin-bottom: 15px;
  padding: 12px 0;
}
.statNos{
  margin-bottom: 10px !important;
}
.statNos .col{
  justify-content: center;
}
.metricsCard{
  margin-left: 8% ;
}
}

/* Mac Air */
@media only screen and (min-width: 819px) and (max-width: 821px) {
.statCard{
  padding: 12px 0;
  margin-bottom: 15px;
}
.statCard .row{
  padding: 20px 0px;
}
.metricsCard{
  margin-left: 13px ;
}

}

/* TAB */
@media only screen and (min-width: 600px) and (max-width: 768px) {
.statCard{
  padding: 12px 0;
  margin-bottom: 15px;
}
.statCard .row{
  padding: 20px 0px;
}
.metricsCard{
  margin-left: 13px ;
}

}
</style>