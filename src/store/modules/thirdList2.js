export default {
    
    state:{
        itemsThree2: [1,2,3,4,5],
        colorItemsThree2: '',
        checkedThree2: false

    },
    mutations: {
        changeItemsThree2(state, payload) {
            state.itemsThree2 = payload
        },
        changeColorItemThree2(state,payload) {
            state.colorItemsThree2 = payload
        },
        removeItemThree2(state, payload) {
                state.itemsThree2.splice(payload, 1)
        },
        changeCheckedThree2(state) {
            state.checkedThree2 = !state.checkedThree2
        },
        mainChangerThree2(state) {
            state.checkedThree2 = true
        }


    },
    getters: {
        allItemsThree2Length(state) {
            return state.itemsThree2.length
        },
        colorItemThree2(state) {
            return state.colorItemsThree2
        },
        checkedThree2(state) {
            return state.checkedThree2
        }
    }
}