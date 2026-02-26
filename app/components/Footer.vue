<script setup lang="ts">

</script>


<template>
    <div>
<footer class="bg-neutral-primary-soft rounded-base shadow-xs border border-default m-4">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-body sm:text-center">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
        <li>
            <NuxtLink to = "/about" class="hover:underline me-4 md:me-6">About</NuxtLink>
        </li>
        <li>
            <NuxtLink  to = "/Privacy-policy" class="hover:underline me-4 md:me-6">Privacy Policy</NuxtLink>
        </li>
        <li>
            <NuxtLink  to = "/Licence" class="hover:underline me-4 md:me-6">Licensing</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
        </li>
    </ul>
    </div>
</footer>
    </div>
</template>

