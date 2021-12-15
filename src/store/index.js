import Vue from 'vue'
import Vuex from 'vuex'
import firstList from './modules/firstList'
import secondList from './modules/secondList'
import thirdList from './modules/thirdList'
import firstList2 from './modules/firstList2'
import secondList2 from './modules/secondList2'
import thirdList2 from './modules/thirdList2'
import fourthList2 from './modules/fourthList2'
import firstList3 from './modules/firstList3'
import secondList3 from './modules/secondList3'
import thirdList3 from './modules/thirdList3'
import fourthList3 from './modules/fourthList3'
import fifthList3 from './modules/fifthList3'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        firstList,
        secondList,
        thirdList,
        firstList2,
        secondList2,
        thirdList2,
        fourthList2,
        firstList3,
        secondList3,
        thirdList3,
        fourthList3,
        fifthList3
    }
})
