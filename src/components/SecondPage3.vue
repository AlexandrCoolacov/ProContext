<template>
    <div class="secondWindow">
      <div class="listOne3">
        <h1>List 1</h1>

        <div class="itemsOne3" v-show="checkedOne3">
          <div class="squareLi red"
              :style ="{
                backgroundColor: colorItemOne3
              }"
              v-for="(i,idx) in +allItemsOne3Length"
             :key="i.id"
             @click="deleteItemOne3(idx)"
          ></div>
        </div>

        <div class="itemsTwo3" v-show="checkedTwo3">
          <div class="squareLi yellow"
              :style ="{
                backgroundColor: colorItemTwo3
              }"
              v-for="(i,idx) in +allItemsTwo3Length"
             :key="i.id"
             @click="deleteItemTwo3(idx)"
          ></div>
        </div>

        <div class="itemsThree3" v-show="checkedThree3">
          <div class="squareLi green"
              :style ="{
                backgroundColor: colorItemThree3
              }"
              v-for="(i,idx) in +allItemsThree3Length"
             :key="i.id"
             @click="deleteItemThree3(idx)"
          ></div>
        </div>

        <div class="itemsFour3" v-show="checkedFour3">
          <div class="squareLi blue"
              :style ="{
                backgroundColor: colorItemFour3
              }"
              v-for="(i,idx) in +allItemsFour3Length"
             :key="i.id"
             @click="deleteItemFour3(idx)"
          ></div>
        </div>

         <div class="itemsFive3" v-show="checkedFive3">
          <div class="squareLi grey"
              :style ="{
                backgroundColor: colorItemFive3
              }"
              v-for="(i,idx) in +allItemsFive3Length"
             :key="i.id"
             @click="deleteItemFive3(idx)"
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
      deleteItemOne3(idx) {
        this.$store.commit('removeItemOne3', idx)
      },
      deleteItemTwo3(idx) {
        this.$store.commit('removeItemTwo3', idx)
      },
      deleteItemThree3(idx) {
        this.$store.commit('removeItemThree3', idx)
      },
      deleteItemFour3(idx) {
        this.$store.commit('removeItemFour3', idx)
      },
      deleteItemFive3(idx) {
        this.$store.commit('removeItemFive3', idx)
      }
    
    },

    computed: mapGetters(
      ['allItemsOne3Length', 
      'colorItemOne3', 
      'allItemsTwo3Length', 
      'colorItemTwo3' , 
      'allItemsThree3Length', 
      'colorItemThree3',
      'allItemsFour3Length', 
      'colorItemFour3',
      'allItemsFive3Length', 
      'colorItemFive3',
      'checkedOne3',
      'checkedTwo3',
      'checkedThree3',
      'checkedFour3',
      'checkedFive3',
      ])
    
}
</script>

<style lang="scss" scoped>
    .secondWindow{
      width: 45%;
      border: 1px solid rgb(155, 119, 119);
      margin: 10px;
        .listOne3{
          font-size: 10px;
        }
    }

    .listOne3 {
      display: flex;
      flex-direction: column;
    }

    .itemsOne3 {
      display: flex;
      flex-direction: row;
    }

    .itemsTwo3 {
      display: flex;
      flex-direction: row;
    }

    .itemsThree3 {
      display: flex;
      flex-direction: row;
    }

     .itemsFour3 {
      display: flex;
      flex-direction: row;
    }

     .itemsFive3 {
      display: flex;
      flex-direction: row;
    }

    .squareLi{
      display: flex;
      flex-direction: row;
      width: 10px;
      height: 10px;
      border: 1px solid black;
      list-style-type: nOne3;
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

    .blue{
      background-color: grey ;
    }

    .itemsOne3 .itemsTwo3 {
      width: 100%;
      height: 30px;
      
    }

    //  
</style>