<template>
    <div class="mainWindow">
       <div class="dropdown">
         <input type="checkbox" class="mainCheckbox" @input="toggleChildCheckBox">
         <li 
         v-show="dotVisible && this.checkedOne2  || dotVisible && this.checkedTwo2 || dotVisible && this.checkedThree2 || dotVisible && this.checkedFour2 "
         class="dotCheckbox"></li>
         <button @click="showBlock" class="dropbtn">List</button>
            <div v-show="displayed"
                 >
                <FirstList2/>
                <SecondList2/>
                <ThirdList2/>
                <FourthList2/>
            </div>
       </div>
    </div>
</template>

<script>
import FirstList2 from './lists/FirstList2.vue'
import SecondList2 from './lists/SecondList2.vue'
import ThirdList2 from './lists/ThirdList2.vue'
import FourthList2 from './lists/FourthList2.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'MainPage',
  components: {
    FirstList2,
    SecondList2,
    ThirdList2,
    FourthList2
  },

  data() {
    return {
      displayed: true,
      dotVisible: true
    }
  },

  methods: {
      openDroplist() {
        document.getElementById("myDropdown").classList.toggle("show");
    },

      showBlock() {
        this.displayed = !this.displayed;
    },

      toggleChildCheckBox() {

        let itemsOne2 = [...document.getElementsByClassName('childCheckboxOne2')]
        let itemsTwo2 = [...document.getElementsByClassName('childCheckboxTwo2')]
        let itemsThree2 = [...document.getElementsByClassName('childCheckboxThree2')]
        let itemsFour2 = [...document.getElementsByClassName('childCheckboxFour2')]

        let itemsAll = itemsOne2.concat(itemsTwo2, itemsThree2, itemsFour2)

        itemsAll.map(item => item.checked = true) 
        this.dotVisible = false
        


        if (this.checkedOne2 || this.checkedTwo2 || this.checkedThree2 || this.checkedFour2) {
            itemsAll.map(item => item.checked = false) 
            
            this.dotVisible = true
        } 

        if ((this.checkedOne2 && this.checkedTwo2 && this.checkedThree2 && this.checkedFour2) ) {
            itemsAll.map(item => item.checked = false)
            
            this.dotVisible == false
        }

        this.$store.commit('changeCheckedOne2' )
        this.$store.commit('changeCheckedTwo2')
        this.$store.commit('changeCheckedThree2')
        this.$store.commit('changeCheckedFour2')
         
       
      },

     
    
  },

  

  computed: mapGetters(
      [
      'checkedOne2',
      'checkedTwo2',
      'checkedThree2',
      'checkedFour2',
      ]),
      
}
</script>

<style lang="scss" scoped>

  .dotCheckbox{
    position: absolute;
    left: 22px;
    bottom: 9px;
    pointer-events: none;
    
  }

  .mainWindow{
      width: 45%;
      height: 30px;
      border: 1px solid black;
      margin: 10px;
      display: flex;
      flex-direction: row;
    }

  .dropbtn {
      background-color: rgb(0, 0, 0);
      color: white;
      font-size: 16px;
      border: nOne2;
      cursor: pointer;
    }

  .dropbtn:hover, .dropbtn:focus {
  background-color: #2980B9;
    }

.disc {
   list-style-type:disc
}

.dropdown {
  position: relative;
  width: 100%;
  
  .itemBox{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    height: 50px;
    width: 100%;
      h1{
        margin-right: 200px;
      }
  }
}

</style>
