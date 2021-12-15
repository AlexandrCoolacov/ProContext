export default {
    
    state:{
        itemsOne3: [1,2,3],
        colorItemsOne3: '',
        checkedOne3: false,
        mainChecked: false
    },
    mutations: {
        changeItemsOne3(state, payload) {
            state.itemsOne3 = payload
        },
        changeColorItemOne3(state,payload) {
            state.colorItemsOne3 = payload
        },
        removeItemOne3(state, payload) {
                state.itemsOne3.splice(payload, 1)
        },
        changeCheckedOne3(state) {
            state.checkedOne3 = !state.checkedOne3
        },
        mainChangerOne3(state) {
            state.checkedOne3 = true
        },
    },
    getters: {
        allItemsOne3Length(state) {
            return state.itemsOne3.length
        },
        colorItemOne3(state) {
            return state.colorItemsOne3
        },
        checkedOne3(state) {
            return state.checkedOne3
        },
    }
}