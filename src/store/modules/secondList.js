export default {
    
    state:{
        itemsTwo: [1,2,3,4],
        colorItemsTwo: '',
        checkedTwo: false
    },
    mutations: {
        changeItemsTwo(state, payload) {
            state.itemsTwo = payload
        },
        changeColorItemTwo(state,payload) {
            state.colorItemsTwo = payload
        },
        removeItemTwo(state, payload) {
                state.itemsTwo.splice(payload, 1)
        },
        changeCheckedTwo(state) {
            state.checkedTwo = !state.checkedTwo
        },
        mainChangerTwo(state) {
            state.checkedTwo = true
        }

    },
    getters: {
        allItemsTwoLength(state) {
            return state.itemsTwo.length
        },
        colorItemTwo(state) {
            return state.colorItemsTwo
        },
        checkedTwo(state) {
            return state.checkedTwo
        }
    }
}