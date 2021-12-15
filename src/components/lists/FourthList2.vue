<template>
    <div class="itemBox">
            <input type="checkbox" class="childCheckboxFour2" @change="changeCheckedFour2" >

            <h1>Item 3</h1>

            <input type="text"
                  :placeholder='placeholder'
                  v-model='itemFour2Value'
                  @keyup.enter="addItem"
                  class="input"
            >

            <h3>{{allItemsFour2Length}}</h3>

            <input type="color"
                  v-model='colorFour2Value'
                  @change='changeColor'
            >

          </div>
</template>


<script>

import { mapGetters } from 'vuex'
export default {
  name: 'FourthList2',
  
  data() {
    return {
      placeholder: 'Input Value and press Enter',
      itemFour2Value: '',
      colorFour2Value: '',
      itemsFour2: []
    }
  },

  methods: {
      

      addItem() {
        this.itemsFour2 = []
        if(this.itemFour2Value >= +0) {
            for (let i=1 ; i<= this.itemFour2Value; i++) {
            this.itemsFour2.push(i)
            this.$store.commit('changeItemsFour2', this.itemsFour2)
            }
        } else {
          this.itemFour2Value = ''
        }
        this.itemFour2Value = ''
    },

      changeColor() {
        this.$store.commit('changeColorItemFour2', this.colorFour2Value)
        console.log(this.colorFour2Item);
    },

      changeCheckedFour2(){
        this.$store.commit('changeCheckedFour2')
        console.log(this.checkedFour2)
      }
  },

  computed: mapGetters(['allItemsFour2Length', 
  'colorItemOne2' , 
  'checkedOne2' ,
  'checkedTwo2',
  'checkedFour2',
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
