<script setup>

 const { counter,incrementCount,decrementCount} = useCounter();
 console.log("count is",counter);
 console.log("increment",incrementCount);
 console.log("decrement",decrementCount);
</script>

<template>
    <div>
        <h2>Learing of Composables (Reusable Logics)</h2>
        <p> Count : {{ counter }}</p>
        <button @click="incrementCount">Increment</button>
        <button @click="decrementCount">Decrement</button>
    </div>
</template>


