export default {
    
    state:{
        itemsTwo3: [1,2,3,4],
        colorItemsTwo3: '',
        checkedTwo3: false
    },
    mutations: {
        changeItemsTwo3(state, payload) {
            state.itemsTwo3 = payload
        },
        changeColorItemTwo3(state,payload) {
            state.colorItemsTwo3 = payload
        },
        removeItemTwo3(state, payload) {
                state.itemsTwo3.splice(payload, 1)
        },
        changeCheckedTwo3(state) {
            state.checkedTwo3 = !state.checkedTwo3
        },
        mainChangerTwo3(state) {
            state.checkedTwo3 = true
        }

    },
    getters: {
        allItemsTwo3Length(state) {
            return state.itemsTwo3.length
        },
        colorItemTwo3(state) {
            return state.colorItemsTwo3
        },
        checkedTwo3(state) {
            return state.checkedTwo3
        }
    }
}