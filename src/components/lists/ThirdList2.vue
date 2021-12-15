<template>
    <div class="itemBox">
            <input type="checkbox" class="childCheckboxThree2" @change="changeCheckedThree2" >

            <h1>Item 3</h1>

            <input type="text"
                  :placeholder='placeholder'
                  v-model='itemThree2Value'
                  @keyup.enter="addItem"
                  class="input"
            >

            <h3>{{allItemsThree2Length}}</h3>

            <input type="color"
                  v-model='colorThree2Value'
                  @change='changeColor'
            >

          </div>
</template>


<script>

import { mapGetters } from 'vuex'
export default {
  name: 'ThirdList2',
  
  data() {
    return {
      placeholder: 'Input Value and press Enter',
      itemThree2Value: '',
      colorThree2Value: '',
      itemsThree2: []
    }
  },

  methods: {
      

      addItem() {
        this.itemsThree2 = []
        if(this.itemThree2Value >= +0) {
            for (let i=1 ; i<= this.itemThree2Value; i++) {
            this.itemsThree2.push(i)
            this.$store.commit('changeItemsThree2', this.itemsThree2)
            }
        } else {
          this.itemThree2Value = ''
        }
        this.itemThree2Value = ''
    },

      changeColor() {
        this.$store.commit('changeColorItemThree2', this.colorThree2Value)
        console.log(this.colorThree2Item);
    },

      changeCheckedThree2(){
        this.$store.commit('changeCheckedThree2')
        console.log(this.checkedThree2)
      }
  },

  computed: mapGetters(['allItemsThree2Length', 
  'colorItemOne2' , 
  'checkedOne2' ,
  'checkedTwo2',
  'checkedThree2',
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
