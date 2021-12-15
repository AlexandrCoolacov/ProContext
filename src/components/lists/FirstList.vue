<template>
    <div class="itemBox">
            <input type="checkbox" class="childCheckboxOne" @change="changeCheckedOne"> 

            <h1>Item 1</h1>

            <input type="text"
                  :placeholder='placeholder'
                  v-model='itemOneValue'
                  @keyup.enter="addItem"
                  class="input"
            >

            <h3>{{allItemsOneLength}}</h3>

            <input type="color"
                  v-model='colorOneValue'
                  @change='changeColor'
            >

          </div>
</template>


<script>

import { mapGetters } from 'vuex'
export default {
  name: 'FirstList',
  
  data() {
    return {
      placeholder: 'Input Value and press Enter',
      itemOneValue: '',
      colorOneValue: '',
      itemsOne: [],
    }
  },

  methods: {
      addItem() {
        this.itemsOne = []
        if(this.itemOneValue >= +0) {
            for (let i=1 ; i<= this.itemOneValue; i++) {
            this.itemsOne.push(i)
            this.$store.commit('changeItemsOne', this.itemsOne)
            }
        } else {
          this.itemOneValue = ''
        }
        this.itemOneValue = ''
    },

      changeColor() {
        this.$store.commit('changeColorItemOne', this.colorOneValue)
        console.log(this.colorOneItem);
    },

      changeCheckedOne(){
        this.$store.commit('changeCheckedOne')
        console.log(this.checkedOne)
        
      }
  },

  computed: mapGetters(['allItemsOneLength', 
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
