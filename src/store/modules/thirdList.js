export default {
    
    state:{
        itemsThree: [1,2,3,4,5],
        colorItemsThree: '',
        checkedThree: false

    },
    mutations: {
        changeItemsThree(state, payload) {
            state.itemsThree = payload
        },
        changeColorItemThree(state,payload) {
            state.colorItemsThree = payload
        },
        removeItemThree(state, payload) {
                state.itemsThree.splice(payload, 1)
        },
        changeCheckedThree(state) {
            state.checkedThree = !state.checkedThree
        },
        mainChangerThree(state) {
            state.checkedThree = true
        }


    },
    getters: {
        allItemsThreeLength(state) {
            return state.itemsThree.length
        },
        colorItemThree(state) {
            return state.colorItemsThree
        },
        checkedThree(state) {
            return state.checkedThree
        }
    }
}