<template>
    <div class="itemBox">
            <input type="checkbox" class="childCheckboxTwo" @change="changeCheckedTwo">

            <h1>Item 2</h1>

            <input type="text"
                  :placeholder='placeholder'
                  v-model='itemTwoValue'
                  @keyup.enter="addItem"
                  class="input"
            >

            <h3>{{allItemsTwoLength}}</h3>

            <input type="color"
                  v-model='colorTwoValue'
                  @change='changeColor'
            >

    </div>
</template>


<script>

import { mapGetters } from 'vuex'
export default {
  name: 'SecondList',
  
  data() {
    return {
      placeholder: 'Input Value and press Enter',
      itemTwoValue: '',
      colorTwoValue: '',
      itemsTwo: []
    }
  },

  methods: {
      addItem() {
        this.itemsTwo = []
        if(this.itemTwoValue >= +0) {
            for (let i=1 ; i<= this.itemTwoValue; i++) {
            this.itemsTwo.push(i)
            this.$store.commit('changeItemsTwo', this.itemsTwo)
            }
        } else {
          this.itemTwoValue = ''
        }
        this.itemTwoValue = ''
    },

      changeColor() {
        this.$store.commit('changeColorItemTwo', this.colorTwoValue)
        console.log(this.colorTwoItem);
    },

      changeCheckedTwo(){
        this.$store.commit('changeCheckedTwo')
        console.log(this.checkedTwo)
      }
  },

  computed: mapGetters(['allItemsTwoLength', 
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
