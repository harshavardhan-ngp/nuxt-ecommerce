<template>
  <v-card
    class="chartCard" >
    <v-toolbar 
      color="#D4F1F4"
      dense 
      elevation="0" >
      <v-tabs
        v-model="tab"
        align-with-title >
        <v-tabs-slider 
          class="tabSlider" />
        <v-tab 
          v-for="item in tabItems" 
          :key="item.tab" 
          class="tabs">
          {{ item.tab }}
        </v-tab>
        <!-- <v-tab>
          Activity
        </v-tab>
        <v-tab
          class="tabs" >
          Clicks
        </v-tab>
        <v-tab
          class="tabs">
          Sales
        </v-tab> -->
      </v-tabs>
     
      <v-spacer/>

      <v-menu
        bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            class="dropdown"
            text
            v-on="on" >
            Week
            <v-icon style="margin-left: 10px;">
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
  
    <v-tabs-items v-model="tab">
      <v-tab-item 
        v-for="item in tabItems" 
        :key="item.tab" 
        class="compo">
        <component 
          :is="item.content"/>
      </v-tab-item>
    </v-tabs-items>

  </v-card>

</template>

<script>

export default{

    data(){
        return {
            tab: null,
            tabItems: [
              { tab: 'Activity', content: 'Graph' },
              { tab: 'Clicks', content: 'Form' },
              { tab: 'Sales', content: 'Table' }
            ],
           
    }
    },
}
</script>

<style>
.v-sheet.v-toolbar:not(.v-sheet--outlined){
    box-shadow: none !important;
}
.tabSlider{
    color: #DC4731;
    border-radius: 35px !important;
    position: absolute;
    left: 15px;
    width: 24px !important;
}
.v-tabs-slider-wrapper{
  height: 3px !important;
}
.tabs{
    padding: 0px 10px !important;
}
.dropdown{
    border-radius: 13px !important;
    background-color: #051422 !important;
    color: #fff !important;
}
.compo{
  background-color: #D4F1F4;
}
.chartCard{
    border-radius: 19px !important;
    min-height: 100%;
    background-color: #D4F1F4 !important;
}
</style>