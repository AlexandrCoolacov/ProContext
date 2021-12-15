<template>
    <div class="itemBox">
            <input type="checkbox" class="childCheckboxThree3" @change="changeCheckedThree3" >

            <h1>Item 3</h1>

            <input type="text"
                  :placeholder='placeholder'
                  v-model='itemThree3Value'
                  @keyup.enter="addItem"
                  class="input"
            >

            <h3>{{allItemsThree3Length}}</h3>

            <input type="color"
                  v-model='colorThree3Value'
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
      itemThree3Value: '',
      colorThree3Value: '',
      itemsThree3: []
    }
  },

  methods: {
      

      addItem() {
        this.itemsThree3 = []
        if(this.itemThree3Value >= +0) {
            for (let i=1 ; i<= this.itemThree3Value; i++) {
            this.itemsThree3.push(i)
            this.$store.commit('changeItemsThree3', this.itemsThree3)
            }
        } else {
          this.itemThree3Value = ''
        }
        this.itemThree3Value = ''
    },

      changeColor() {
        this.$store.commit('changeColorItemThree3', this.colorThree3Value)
        console.log(this.colorThree3Item);
    },

      changeCheckedThree3(){
        this.$store.commit('changeCheckedThree3')
        console.log(this.checkedThree3)
      }
  },

  computed: mapGetters(['allItemsThree3Length', 
  'colorItemOne3' , 
  'checkedOne3' ,
  'checkedTwo3',
  'checkedThree3',
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
