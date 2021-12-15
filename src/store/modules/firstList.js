export default {
    
    state:{
        itemsOne: [1,2,3],
        colorItemsOne: '',
        checkedOne: false,
        mainChecked: false
    },
    mutations: {
        changeItemsOne(state, payload) {
            state.itemsOne = payload
        },
        changeColorItemOne(state,payload) {
            state.colorItemsOne = payload
        },
        removeItemOne(state, payload) {
                state.itemsOne.splice(payload, 1)
        },
        changeCheckedOne(state) {
            state.checkedOne = !state.checkedOne
        },
        mainChangerOne(state) {
            state.checkedOne = true
        },
       

    },
    getters: {
        allItemsOneLength(state) {
            return state.itemsOne.length
        },
        colorItemOne(state) {
            return state.colorItemsOne
        },
        checkedOne(state) {
            return state.checkedOne
        },
    }
}