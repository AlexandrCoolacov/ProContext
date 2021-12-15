<template>
    <div class="itemBox">
            <input type="checkbox" class="childCheckboxThree" @change="changeCheckedThree" >

            <h1>Item 3</h1>

            <input type="text"
                  :placeholder='placeholder'
                  v-model='itemThreeValue'
                  @keyup.enter="addItem"
                  class="input"
            >

            <h3>{{allItemsThreeLength}}</h3>

            <input type="color"
                  v-model='colorThreeValue'
                  @change='changeColor'
            >

          </div>
</template>


<script>

import { mapGetters } from 'vuex'
export default {
  name: 'ThirdList',
  
  data() {
    return {
      placeholder: 'Input Value and press Enter',
      itemThreeValue: '',
      colorThreeValue: '',
      itemsThree: []
    }
  },

  methods: {
      

      addItem() {
        this.itemsThree = []
        if(this.itemThreeValue >= +0) {
            for (let i=1 ; i<= this.itemThreeValue; i++) {
            this.itemsThree.push(i)
            this.$store.commit('changeItemsThree', this.itemsThree)
            }
        } else {
          this.itemThreeValue = ''
        }
        this.itemThreeValue = ''
    },

      changeColor() {
        this.$store.commit('changeColorItemThree', this.colorThreeValue)
        console.log(this.colorThreeItem);
    },

      changeCheckedThree(){
        this.$store.commit('changeCheckedThree')
        console.log(this.checkedThree)
      }
  },

  computed: mapGetters(['allItemsThreeLength', 
  'colorItemOne' , 
  'checkedOne' ,
  'checkedTwo',
  'checkedThree',
  ])
}
</script>

<style lang="scss" scoped>

  .itemBox{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    height: 50px;
    width: 700px;
    h1{
      font-size: 16px;
    }
    .input{
      width: 170px;
    }
  }


</style>
