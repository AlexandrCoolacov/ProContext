<template>
    <div class="mainWindow">
       <div class="dropdown">
         <input type="checkbox" class="mainCheckbox" @input="toggleChildCheckBox">
         <li 
         v-show="dotVisible && this.checkedOne3  || dotVisible && this.checkedTwo3 || dotVisible && this.checkedThree3 || dotVisible && this.checkedFour3 || dotVisible && this.checkedFive3 "
         class="dotCheckbox"></li>
         <button @click="showBlock" class="dropbtn">List</button>
            <div v-show="displayed"
                 >
                <FirstList3/>
                <SecondList3/>
                <ThirdList3/>
                <FourthList3/>
                <FifthList3/>
            </div>
       </div>
    </div>
</template>

<script>
import FirstList3 from './lists/FirstList3.vue'
import SecondList3 from './lists/SecondList3.vue'
import ThirdList3 from './lists/ThirdList3.vue'
import FourthList3 from './lists/FourthList3.vue'
import FifthList3 from './lists/FifthList3.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'MainPage',
  components: {
    FirstList3,
    SecondList3,
    ThirdList3,
    FourthList3,
    FifthList3
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

        let itemsOne3 = [...document.getElementsByClassName('childCheckboxOne3')]
        let itemsTwo3 = [...document.getElementsByClassName('childCheckboxTwo3')]
        let itemsThree3 = [...document.getElementsByClassName('childCheckboxThree3')]
        let itemsFour3 = [...document.getElementsByClassName('childCheckboxFour3')]
        let itemsFive3 = [...document.getElementsByClassName('childCheckboxFive3')]

        let itemsAll = itemsOne3.concat(itemsTwo3, itemsThree3, itemsFour3, itemsFive3)

        itemsAll.map(item => item.checked = true) 
        this.dotVisible = false
        


        if (this.checkedOne3 || this.checkedTwo3 || this.checkedThree3 || this.checkedFour3 || this.checkedFive3) {
            itemsAll.map(item => item.checked = false) 
            
            this.dotVisible = true
        } 

        if ((this.checkedOne3 && this.checkedTwo3 && this.checkedThree3 && this.checkedFour3 && this.checkedFive3) ) {
            itemsAll.map(item => item.checked = false)
            
            this.dotVisible == false
        }

        this.$store.commit('changeCheckedOne3' )
        this.$store.commit('changeCheckedTwo3')
        this.$store.commit('changeCheckedThree3')
        this.$store.commit('changeCheckedFour3')
        this.$store.commit('changeCheckedFive3')
         
       
      },

     
    
  },

  

  computed: mapGetters(
      [
      'checkedOne3',
      'checkedTwo3',
      'checkedThree3',
      'checkedFour3',
      'checkedFive3',
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
      border: nOne3;
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
