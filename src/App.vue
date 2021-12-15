<template>
  <div id="app"
       class="wrapper"
       @click="closeDropdown"
       >
    <div class="anyList">
         <MainPage/>
          <SecondPage/>
    </div>

    <div class="anyList">
         <MainPage2/>
          <SecondPage2/>
    </div>

    <div class="anyList">
         <MainPage3/>
          <SecondPage3/>
    </div>
   
    
    
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue'
import SecondPage from './components/SecondPage.vue'
import MainPage2 from './components/MainPage2.vue'
import SecondPage2 from './components/SecondPage2.vue'
import MainPage3 from './components/MainPage3.vue'
import SecondPage3 from './components/SecondPage3.vue'

export default {
  name: 'App',
  components: {
    MainPage,
    SecondPage,
    MainPage2,
    SecondPage2,
    MainPage3,
    SecondPage3,
  },

  methods: {
    closeDropdown(e) {
      if (!e.target.matches('.dropbtn')) {
          let dropdowns = document.getElementsByClassName("dropdown-content");
          let i;
          for (i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    },
  }
}
</script>

<style lang="scss" scoped>

.wrapper {
    width: 100%;
    
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    position: relative;
    flex: auto;
    flex-wrap: wrap;
    .anyList{
        height: 300px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: relative;
    }
    
  }

</style>
