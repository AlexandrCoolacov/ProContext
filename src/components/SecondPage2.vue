<template>
    <div class="secondWindow">
      <div class="listOne2">
        <h1>List 1</h1>

        <div class="itemsOne2" v-show="checkedOne2">
          <div class="squareLi red"
              :style ="{
                backgroundColor: colorItemOne2
              }"
              v-for="(i,idx) in +allItemsOne2Length"
             :key="i.id"
             @click="deleteItemOne2(idx)"
          ></div>
        </div>

        <div class="itemsTwo2" v-show="checkedTwo2">
          <div class="squareLi yellow"
              :style ="{
                backgroundColor: colorItemTwo2
              }"
              v-for="(i,idx) in +allItemsTwo2Length"
             :key="i.id"
             @click="deleteItemTwo2(idx)"
          ></div>
        </div>

        <div class="itemsThree2" v-show="checkedThree2">
          <div class="squareLi green"
              :style ="{
                backgroundColor: colorItemThree2
              }"
              v-for="(i,idx) in +allItemsThree2Length"
             :key="i.id"
             @click="deleteItemThree2(idx)"
          ></div>
        </div>
        
        <div class="itemsFour2" v-show="checkedFour2">
          <div class="squareLi blue"
              :style ="{
                backgroundColor: colorItemFour2
              }"
              v-for="(i,idx) in +allItemsFour2Length"
             :key="i.id"
             @click="deleteItemFour2(idx)"
          ></div>
        </div>
      </div>
      
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'SecondPage',

    methods: {
      deleteItemOne2(idx) {
        this.$store.commit('removeItemOne2', idx)
      },
      deleteItemTwo2(idx) {
        this.$store.commit('removeItemTwo2', idx)
      },
      deleteItemThree2(idx) {
        this.$store.commit('removeItemThree2', idx)
      },
       deleteItemFour2(idx) {
        this.$store.commit('removeItemFour2', idx)
      }
    },

    computed: mapGetters(
      ['allItemsOne2Length', 
      'colorItemOne2', 
      'allItemsTwo2Length', 
      'colorItemTwo2' , 
      'allItemsThree2Length', 
      'colorItemThree2',
      'allItemsFour2Length', 
      'colorItemFour2',
      'checkedOne2',
      'checkedTwo2',
      'checkedThree2',
      'checkedFour2',
      
      ])
    
}
</script>

<style lang="scss" scoped>
    .secondWindow{
      width: 45%;
      border: 1px solid rgb(155, 119, 119);
      margin: 10px;
        .listOne2{
          font-size: 10px;
        }
    }

    .listOne2 {
      display: flex;
      flex-direction: column;
    }

    .itemsOne2 {
      display: flex;
      flex-direction: row;
    }

    .itemsTwo2 {
      display: flex;
      flex-direction: row;
    }

    .itemsThree2 {
      display: flex;
      flex-direction: row;
    }

     .itemsFour2 {
      display: flex;
      flex-direction: row;
    }

    .squareLi{
      display: flex;
      flex-direction: row;
      width: 10px;
      height: 10px;
      border: 1px solid black;
      list-style-type: none;
      margin-right: 4px;
      margin-bottom: 7px;
      background-color: green ;
    }

    .red{
      background-color: red ;
    }

    .yellow{
      background-color: yellow ;
    }

    .green{
      background-color: green ;
    }

    .blue{
      background-color: blue ;
    }

    .itemsOne2 .itemsTwo2 {
      width: 100%;
      height: 30px;
      
    }

    //  
</style>