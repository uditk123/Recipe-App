import { ref } from "vue"

export function useCounter(){
    const counter = ref(0);

    function incrementCount(){
        counter.value++;
    }
    function decrementCount(){
        counter.value--;
    }

    return {
        counter,
        incrementCount,
        decrementCount
    }
}