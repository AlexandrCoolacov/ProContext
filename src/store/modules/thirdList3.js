export default {
    
    state:{
        itemsThree3: [1,2,3,4,5],
        colorItemsThree3: '',
        checkedThree3: false

    },
    mutations: {
        changeItemsThree3(state, payload) {
            state.itemsThree3 = payload
        },
        changeColorItemThree3(state,payload) {
            state.colorItemsThree3 = payload
        },
        removeItemThree3(state, payload) {
                state.itemsThree3.splice(payload, 1)
        },
        changeCheckedThree3(state) {
            state.checkedThree3 = !state.checkedThree3
        },
        mainChangerThree3(state) {
            state.checkedThree3 = true
        }


    },
    getters: {
        allItemsThree3Length(state) {
            return state.itemsThree3.length
        },
        colorItemThree3(state) {
            return state.colorItemsThree3
        },
        checkedThree3(state) {
            return state.checkedThree3
        }
    }
}