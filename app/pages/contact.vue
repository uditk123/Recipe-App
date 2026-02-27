 
  <script setup lang="ts">
 import { useLikeStore } from '~/stores/likes';

 const Likes = useLikeStore();
 console.log(" Checking store data , Likes.Like");
 </script>
 <template>
    <div>
     <h1>Contact Us</h1>
     <h3> Store Values : {{ Likes.Like }}</h3>
    </div>
 </template>
 
 
