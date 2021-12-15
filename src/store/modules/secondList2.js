export default {
    
    state:{
        itemsTwo2: [1,2,3,4],
        colorItemsTwo2: '',
        checkedTwo2: false
    },
    mutations: {
        changeItemsTwo2(state, payload) {
            state.itemsTwo2 = payload
        },
        changeColorItemTwo2(state,payload) {
            state.colorItemsTwo2 = payload
        },
        removeItemTwo2(state, payload) {
                state.itemsTwo2.splice(payload, 1)
        },
        changeCheckedTwo2(state) {
            state.checkedTwo2 = !state.checkedTwo2
        },
        mainChangerTwo2(state) {
            state.checkedTwo2 = true
        }

    },
    getters: {
        allItemsTwo2Length(state) {
            return state.itemsTwo2.length
        },
        colorItemTwo2(state) {
            return state.colorItemsTwo2
        },
        checkedTwo2(state) {
            return state.checkedTwo2
        }
    }
}