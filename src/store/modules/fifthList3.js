export default {
    
    state:{
        itemsFive3: [1,2,3,4,5,6,7,8],
        colorItemsFive3: '',
        checkedFive3: false

    },
    mutations: {
        changeItemsFive3(state, payload) {
            state.itemsFive3 = payload
        },
        changeColorItemFive3(state,payload) {
            state.colorItemsFive3 = payload
        },
        removeItemFive3(state, payload) {
                state.itemsFive3.splice(payload, 1)
        },
        changeCheckedFive3(state) {
            state.checkedFive3 = !state.checkedFive3
        },
        mainChangerFive3(state) {
            state.checkedFive3 = true
        }


    },
    getters: {
        allItemsFive3Length(state) {
            return state.itemsFive3.length
        },
        colorItemFive3(state) {
            return state.colorItemsFive3
        },
        checkedFive3(state) {
            return state.checkedFive3
        }
    }
}