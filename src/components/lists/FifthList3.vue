<template>
    <div class="itemBox">
            <input type="checkbox" class="childCheckboxFive3" @change="changeCheckedFive3" >

            <h1>Item 3</h1>

            <input type="text"
                  :placeholder='placeholder'
                  v-model='itemFive3Value'
                  @keyup.enter="addItem"
                  class="input"
            >

            <h3>{{allItemsFive3Length}}</h3>

            <input type="color"
                  v-model='colorFive3Value'
                  @change='changeColor'
            >

          </div>
</template>


<script>

import { mapGetters } from 'vuex'
export default {
  name: 'FifthList3',
  
  data() {
    return {
      placeholder: 'Input Value and press Enter',
      itemFive3Value: '',
      colorFive3Value: '',
      itemsFive3: []
    }
  },

  methods: {
      

      addItem() {
        this.itemsFive3 = []
        if(this.itemFive3Value >= +0) {
            for (let i=1 ; i<= this.itemFive3Value; i++) {
            this.itemsFive3.push(i)
            this.$store.commit('changeItemsFive3', this.itemsFive3)
            }
        } else {
          this.itemFive3Value = ''
        }
        this.itemFive3Value = ''
    },

      changeColor() {
        this.$store.commit('changeColorItemFive3', this.colorFive3Value)
        console.log(this.colorFive3Item);
    },

      changeCheckedFive3(){
        this.$store.commit('changeCheckedFive3')
        console.log(this.checkedFive3)
      }
  },

  computed: mapGetters(['allItemsFive3Length', 
  'colorItemOne3' , 
  'checkedOne3' ,
  'checkedTwo3',
  'checkedFive3',
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
