<template>
    <div class="mainWindow">
       <div class="dropdown">
         <input type="checkbox" class="mainCheckbox" @input="toggleChildCheckBox">
         <li 
         v-show="dotVisible && this.checkedOne  || dotVisible && this.checkedTwo || dotVisible && this.checkedThree "
         class="dotCheckbox"></li>
         <button @click="showBlock" class="dropbtn">List</button>
            <div v-show="displayed"
                 >
                <FirstList/>
                <SecondList/>
                <ThirdList/>
            </div>
       </div>
    </div>
</template>

<script>
import FirstList from './lists/FirstList.vue'
import SecondList from './lists/SecondList.vue'
import ThirdList from './lists/ThirdList.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'MainPage',
  components: {
    FirstList,
    SecondList,
    ThirdList
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

        let itemsOne = [...document.getElementsByClassName('childCheckboxOne')]
        let itemsTwo = [...document.getElementsByClassName('childCheckboxTwo')]
        let itemsThree = [...document.getElementsByClassName('childCheckboxThree')]

        let itemsAll = itemsOne.concat(itemsTwo, itemsThree)

        itemsAll.map(item => item.checked = true) 
        this.dotVisible = false
        


        if (this.checkedOne || this.checkedTwo || this.checkedThree) {
            itemsAll.map(item => item.checked = false) 
            
            this.dotVisible = true
        } 

        if ((this.checkedOne && this.checkedTwo && this.checkedThree) ) {
            itemsAll.map(item => item.checked = false)
            
            this.dotVisible == false
        }

        this.$store.commit('changeCheckedOne' )
        this.$store.commit('changeCheckedTwo')
        this.$store.commit('changeCheckedThree')
         
       
      },

     
    
  },

  

  computed: mapGetters(
      [
      'checkedOne',
      'checkedTwo',
      'checkedThree',
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
      border: none;
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
