<template>
    <div class="itemBox">
            <input type="checkbox" class="childCheckboxFour3" @change="changeCheckedFour3" >

            <h1>Item 3</h1>

            <input type="text"
                  :placeholder='placeholder'
                  v-model='itemFour3Value'
                  @keyup.enter="addItem"
                  class="input"
            >

            <h3>{{allItemsFour3Length}}</h3>

            <input type="color"
                  v-model='colorFour3Value'
                  @change='changeColor'
            >

          </div>
</template>


<script>

import { mapGetters } from 'vuex'
export default {
  name: 'FourthList3',
  
  data() {
    return {
      placeholder: 'Input Value and press Enter',
      itemFour3Value: '',
      colorFour3Value: '',
      itemsFour3: []
    }
  },

  methods: {
      

      addItem() {
        this.itemsFour3 = []
        if(this.itemFour3Value >= +0) {
            for (let i=1 ; i<= this.itemFour3Value; i++) {
            this.itemsFour3.push(i)
            this.$store.commit('changeItemsFour3', this.itemsFour3)
            }
        } else {
          this.itemFour3Value = ''
        }
        this.itemFour3Value = ''
    },

      changeColor() {
        this.$store.commit('changeColorItemFour3', this.colorFour3Value)
        console.log(this.colorFour3Item);
    },

      changeCheckedFour3(){
        this.$store.commit('changeCheckedFour3')
        console.log(this.checkedFour3)
      }
  },

  computed: mapGetters(['allItemsFour3Length', 
  'colorItemOne2' , 
  'checkedOne2' ,
  'checkedTwo2',
  'checkedFour3',
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
