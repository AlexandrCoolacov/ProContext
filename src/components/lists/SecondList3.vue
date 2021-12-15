<template>
    <div class="itemBox">
            <input type="checkbox" class="childCheckboxTwo3" @change="changeCheckedTwo3">

            <h1>Item 2</h1>

            <input type="text"
                  :placeholder='placeholder'
                  v-model='itemTwo3Value'
                  @keyup.enter="addItem"
                  class="input"
            >

            <h3>{{allItemsTwo3Length}}</h3>

            <input type="color"
                  v-model='colorTwo3Value'
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
      itemTwo3Value: '',
      colorTwo3Value: '',
      itemsTwo3: []
    }
  },

  methods: {
      addItem() {
        this.itemsTwo3 = []
        if(this.itemTwo3Value >= +0) {
            for (let i=1 ; i<= this.itemTwo3Value; i++) {
            this.itemsTwo3.push(i)
            this.$store.commit('changeItemsTwo3', this.itemsTwo3)
            }
        } else {
          this.itemTwo3Value = ''
        }
        this.itemTwo3Value = ''
    },

      changeColor() {
        this.$store.commit('changeColorItemTwo3', this.colorTwo3Value)
        console.log(this.colorTwo3Item);
    },

      changeCheckedTwo3(){
        this.$store.commit('changeCheckedTwo3')
        console.log(this.checkedTwo3)
      }
  },

  computed: mapGetters(['allItemsTwo3Length', 
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
