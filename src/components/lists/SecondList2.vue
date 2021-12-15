<template>
    <div class="itemBox">
            <input type="checkbox" class="childCheckboxTwo2" @change="changeCheckedTwo2">

            <h1>Item 2</h1>

            <input type="text"
                  :placeholder='placeholder'
                  v-model='itemTwo2Value'
                  @keyup.enter="addItem"
                  class="input"
            >

            <h3>{{allItemsTwo2Length}}</h3>

            <input type="color"
                  v-model='colorTwo2Value'
                  @change='changeColor'
            >

    </div>
</template>


<script>

import { mapGetters } from 'vuex'
export default {
  name: 'SecondList2',
  
  data() {
    return {
      placeholder: 'Input Value and press Enter',
      itemTwo2Value: '',
      colorTwo2Value: '',
      itemsTwo2: []
    }
  },

  methods: {
      addItem() {
        this.itemsTwo2 = []
        if(this.itemTwo2Value >= +0) {
            for (let i=1 ; i<= this.itemTwo2Value; i++) {
            this.itemsTwo2.push(i)
            this.$store.commit('changeItemsTwo2', this.itemsTwo2)
            }
        } else {
          this.itemTwo2Value = ''
        }
        this.itemTwo2Value = ''
    },

      changeColor() {
        this.$store.commit('changeColorItemTwo2', this.colorTwo2Value)
        console.log(this.colorTwo2Item);
    },

      changeCheckedTwo2(){
        this.$store.commit('changeCheckedTwo2')
        console.log(this.checkedTwo2)
      }
  },

  computed: mapGetters(['allItemsTwo2Length', 
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
