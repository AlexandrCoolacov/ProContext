export default {
    
    state:{
        itemsFour3: [1,2,3,4,5,6,7],
        colorItemsFour3: '',
        checkedFour3: false

    },
    mutations: {
        changeItemsFour3(state, payload) {
            state.itemsFour3 = payload
        },
        changeColorItemFour3(state,payload) {
            state.colorItemsFour3 = payload
        },
        removeItemFour3(state, payload) {
                state.itemsFour3.splice(payload, 1)
        },
        changeCheckedFour3(state) {
            state.checkedFour3 = !state.checkedFour3
        },
        mainChangerFour3(state) {
            state.checkedFour3 = true
        }


    },
    getters: {
        allItemsFour3Length(state) {
            return state.itemsFour3.length
        },
        colorItemFour3(state) {
            return state.colorItemsFour3
        },
        checkedFour3(state) {
            return state.checkedFour3
        }
    }
}