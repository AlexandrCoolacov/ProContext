<template>
    <div class="itemBox">
            <input type="checkbox" class="childCheckboxOne3" @change="changeCheckedOne3"> 

            <h1>Item 1</h1>

            <input type="text"
                  :placeholder='placeholder'
                  v-model='itemOne3Value'
                  @keyup.enter="addItem"
                  class="input"
            >

            <h3>{{allItemsOne3Length}}</h3>

            <input type="color"
                  v-model='colorOne3Value'
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
      itemOne3Value: '',
      colorOne3Value: '',
      itemsOne3: [],
    }
  },

  methods: {
      addItem() {
        this.itemsOne3 = []
        if(this.itemOne3Value >= +0) {
            for (let i=1 ; i<= this.itemOne3Value; i++) {
            this.itemsOne3.push(i)
            this.$store.commit('changeItemsOne3', this.itemsOne3)
            }
        } else {
          this.itemOne3Value = ''
        }
        this.itemOne3Value = ''
    },

      changeColor() {
        this.$store.commit('changeColorItemOne3', this.colorOne3Value)
        console.log(this.colorOne3Item);
    },

      changeCheckedOne3(){
        this.$store.commit('changeCheckedOne3')
        console.log(this.checkedOne3)
        
      }
  },

  computed: mapGetters(['allItemsOne3Length', 
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
