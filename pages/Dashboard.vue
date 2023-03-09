<template>
  <v-container>
    <v-row>
      <v-col 
        lg="4" 
        md="5" 
        sm="12">
        <v-card
          class="mx-auto my-12"
          max-width="374"
        >
          <v-toolbar 
            color="#051422"
            dense 
            elevation="0" 
            class="title">
            <v-toolbar-title>Performance</v-toolbar-title>
            <v-spacer/>
            <v-btn icon >
              <v-icon class="dotsIcon">mdi-dots-vertical</v-icon>
            </v-btn>
          </v-toolbar>
    
          <v-card-text class="percentage">
            <v-card-title class="percentAlign"><h2>76%</h2>
              <v-card-text class="percentText">Income</v-card-text>
            </v-card-title>
            <v-divider 
              inset
              vertical 
              class="divider"
            />
            <v-card-title class="percentAlign"><h2>44%</h2>
              <v-card-text class="percentText" >Spendings</v-card-text>
            </v-card-title>
          </v-card-text>

          <div style="padding-bottom: 20px;">
            <v-card-actions style="padding-left: 0px;">
              <v-list-item class="grow">
                <v-list-item-avatar>
                  <v-icon 
                    class="tick" 
                    style="color: #DC4731;">
                    mdi-check-circle
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-content class="tickContent">
                  <v-list-item-title><span><b>Spending course</b></span> was taken</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card-actions>
      
            <v-card-actions style="padding-left: 0px;">
              <v-list-item class="grow">
                <v-list-item-avatar>
                  <v-icon 
                    class="tick" 
                    style="color: #B5F2EE;">
                    mdi-check-circle
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-content class="tickContent">
                  <v-list-item-title><span><b>Deposit porgrams</b></span> was setup</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card-actions>

            <v-card-actions style="padding-left: 0px;">
              <v-list-item class="grow">
                <v-list-item-avatar>
                  <v-icon 
                    class="tick" 
                    style="color: #BA8D80;">
                    mdi-check-circle
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-content class="tickContent">
                  <v-list-item-title><span><b>Cashback program</b></span> activated</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
      <v-col 
        lg="8" 
        md="7" 
        sm="12">
        <Chart />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Stat />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Golos+Text&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

.dotsIcon{
    border: 1px solid rgb(255,255,255,0.25);
    border-radius: 9px;
    color: #fff !important;
}
.title{
  color: #fff !important;
  font-family: 'Golos Text', sans-serif;
  font-weight: 600;
  letter-spacing: 0.07rem;
}
.percentage{
    display: flex;
    justify-content: center;
    color: #fff !important;
}
.percentAlign{    
    justify-content: center;
    font-family: 'Noto Sans JP', sans-serif;
    text-align: center;
}
.percentText{
  padding-top: 5px ;
  font-family: 'Ubuntu', sans-serif;
}
.divider{
  margin-top: 21px !important;
  margin-bottom: 36px !important;
  border-color: #fff !important;
}
.tick{
  justify-content: flex-start !important;
  font-size: 43px !important;
}
.tickContent{
    font-family: 'Ubuntu', sans-serif;
    padding-left:20px !important;
    color: #fff !important;
}
.v-sheet.v-toolbar:not(.v-sheet--outlined){
    box-shadow: none !important;
}
.mx-auto,.my-12{
    border-radius: 19px !important;
    padding:10px 12px;
    background-color: #051422 !important;
}
</style>