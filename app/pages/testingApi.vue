<script setup >

const { data , error} = await useFetch("/api/testdata")
console.log("Testing data is ", data.value);
</script>

<template>
    <div>
     <h1>Testing the Custom Api data</h1>
     <p> MESSAGE IS : {{  data.message }}</p>
     <P> API HELLO IS : {{ data.hello }}</P>
    </div>
</template>

