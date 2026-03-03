  <script setup>
   const throwError = ()=>{
       throw createError({
        statusCode : 400,
        statusMessage : "Page not found"
       })
   }
 </script>
 
 <template>
    <div>
      <h1> Learing Client Side Error handling using CreateError Method</h1>
      <p> Dummy Page for testing client Error</p>
      <button @click = "throwError()"> Throw Error</button>
    </div>
 </template>
 
 