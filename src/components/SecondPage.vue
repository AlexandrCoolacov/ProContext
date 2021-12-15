<template>
    <div class="secondWindow">
      <div class="listOne">
        <h1>List 1</h1>

        <div class="itemsOne" v-show="checkedOne">
          <div class="squareLi red"
              :style ="{
                backgroundColor: colorItemOne
              }"
              v-for="(i,idx) in +allItemsOneLength"
             :key="i.id"
             @click="deleteItemOne(idx)"
          ></div>
        </div>

        <div class="itemsTwo" v-show="checkedTwo">
          <div class="squareLi yellow"
              :style ="{
                backgroundColor: colorItemTwo
              }"
              v-for="(i,idx) in +allItemsTwoLength"
             :key="i.id"
             @click="deleteItemTwo(idx)"
          ></div>
        </div>

        <div class="itemsThree" v-show="checkedThree">
          <div class="squareLi green"
              :style ="{
                backgroundColor: colorItemThree
              }"
              v-for="(i,idx) in +allItemsThreeLength"
             :key="i.id"
             @click="deleteItemThree(idx)"
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
      deleteItemOne(idx) {
        this.$store.commit('removeItemOne', idx)
      },
      deleteItemTwo(idx) {
        this.$store.commit('removeItemTwo', idx)
      },
      deleteItemThree(idx) {
        this.$store.commit('removeItemThree', idx)
      }
    },

    computed: mapGetters(
      ['allItemsOneLength', 
      'colorItemOne', 
      'allItemsTwoLength', 
      'colorItemTwo' , 
      'allItemsThreeLength', 
      'colorItemThree',
      'checkedOne',
      'checkedTwo',
      'checkedThree'
      ])
    
}
</script>

<style lang="scss" scoped>
    .secondWindow{
      width: 45%;
      border: 1px solid rgb(155, 119, 119);
      margin: 10px;
        .listOne{
          font-size: 10px;
        }
    }

    .listOne {
      display: flex;
      flex-direction: column;
    }

    .itemsOne {
      display: flex;
      flex-direction: row;
    }

    .itemsTwo {
      display: flex;
      flex-direction: row;
    }

    .itemsThree {
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

    .itemsOne .itemsTwo {
      width: 100%;
      height: 30px;
      
    }

    //  
</style>