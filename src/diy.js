import { reactive, readonly } from 'vue';

const state = reactive({
    count: 0,
});

const setCount = function() {
    console.log("set count");
    state.count = 10;
}

export default { state:readonly(state), setCount };