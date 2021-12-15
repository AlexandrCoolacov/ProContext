<template>
    <div class="itemBox">
            <input type="checkbox" class="childCheckboxOne2" @change="changeCheckedOne2"> 

            <h1>Item 1</h1>

            <input type="text"
                  :placeholder='placeholder'
                  v-model='itemOne2Value'
                  @keyup.enter="addItem"
                  class="input"
            >

            <h3>{{allItemsOne2Length}}</h3>

            <input type="color"
                  v-model='colorOne2Value'
                  @change='changeColor'
            >

          </div>
</template>


<script>

import { mapGetters } from 'vuex'
export default {
  name: 'FirstList2',
  
  data() {
    return {
      placeholder: 'Input Value and press Enter',
      itemOne2Value: '',
      colorOne2Value: '',
      itemsOne2: [],
    }
  },

  methods: {
      addItem() {
        this.itemsOne2 = []
        if(this.itemOne2Value >= +0) {
            for (let i=1 ; i<= this.itemOne2Value; i++) {
            this.itemsOne2.push(i)
            this.$store.commit('changeItemsOne2', this.itemsOne2)
            }
        } else {
          this.itemOne2Value = ''
        }
        this.itemOne2Value = ''
    },

      changeColor() {
        this.$store.commit('changeColorItemOne2', this.colorOne2Value)
        console.log(this.colorOne2Item);
    },

      changeCheckedOne2(){
        this.$store.commit('changeCheckedOne2')
        console.log(this.checkedOne2)
        
      }
  },

  computed: mapGetters(['allItemsOne2Length', 
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
