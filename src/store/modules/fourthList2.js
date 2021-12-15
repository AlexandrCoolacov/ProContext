export default {
    
    state:{
        itemsFour2: [1,2,3,4,5,6],
        colorItemsFour2: '',
        checkedFour2: false

    },
    mutations: {
        changeItemsFour2(state, payload) {
            state.itemsFour2 = payload
        },
        changeColorItemFour2(state,payload) {
            state.colorItemsFour2 = payload
        },
        removeItemFour2(state, payload) {
                state.itemsFour2.splice(payload, 1)
        },
        changeCheckedFour2(state) {
            state.checkedFour2 = !state.checkedFour2
        },
        mainChangerFour2(state) {
            state.checkedFour2 = true
        }


    },
    getters: {
        allItemsFour2Length(state) {
            return state.itemsFour2.length
        },
        colorItemFour2(state) {
            return state.colorItemsFour2
        },
        checkedFour2(state) {
            return state.checkedFour2
        }
    }
}