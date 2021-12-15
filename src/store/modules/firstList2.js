export default {
    
    state:{
        itemsOne2: [1,2,3],
        colorItemsOne2: '',
        checkedOne2: false,
        mainChecked: false
    },
    mutations: {
        changeItemsOne2(state, payload) {
            state.itemsOne2 = payload
        },
        changeColorItemOne2(state,payload) {
            state.colorItemsOne2 = payload
        },
        removeItemOne2(state, payload) {
                state.itemsOne2.splice(payload, 1)
        },
        changeCheckedOne2(state) {
            state.checkedOne2 = !state.checkedOne2
        },
        mainChangerOne2(state) {
            state.checkedOne2 = true
        },
    },
    getters: {
        allItemsOne2Length(state) {
            return state.itemsOne2.length
        },
        colorItemOne2(state) {
            return state.colorItemsOne2
        },
        checkedOne2(state) {
            return state.checkedOne2
        },
    }
}