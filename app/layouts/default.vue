<script setup lang="ts">
 
 </script>

 <!-- yh default layout is used on each page so jo component aap each page pr show us component ko iske under likh sakte hai  -->
 <template>
    <div>
         <BaseNavigation />  <!-- This is the Navigation component that will be displayed on every page that uses this default layout. -->
        <slot />  <!-- This slot is used to render the content of the page that uses this layout. It acts as a placeholder for the page's content. -->
    </div>
 </template>
 
 