<script setup >
// Importing the store
import { useLikeStore } from '~/stores/likes';

console.log("store",useLikeStore);

const Likes = useLikeStore();
</script>

<template>
    <div>
        <!-- Fetching store data -->
       <h2> Total Likes : {{ Likes.Like }}</h2>
       <!-- Fetching getter -->
        <h3> Double-Likes : {{ Likes.DoubleLikes }}</h3>
        <button @click = "Likes.increment">IncreseLikes</button>
        <br>
        <button @click = "Likes.decrement">DecreseLikes</button>
    </div>
</template>


<style scoped>

</style>