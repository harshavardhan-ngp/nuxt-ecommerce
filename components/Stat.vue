<template>
  <v-card
    class="statCard" >
    <v-row>
      <v-col lg="3">
        <v-card-text >
          <v-card-title class="one">
            <h3>Engagement</h3>
            <div class="engageText">General statistic of user<b> engagement </b>process</div>
          </v-card-title>
        </v-card-text>
      </v-col>
      <v-col style="display: flex">
        <v-row>
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
}
.flex{
    display: flex;
}
</style>