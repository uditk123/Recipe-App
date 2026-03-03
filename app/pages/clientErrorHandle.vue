
  <script setup> 
  const resolveError = (error)=>{
     console.log("Error is ", error);
     navigateTo("/")
  }
</script>
  <template>
    <NuxtErrorBoundary>
        <NuxtPage />
        <template #error = "{ error }">
            <div>
                <h2>
                    Error !: {{ error.statusMessage }}
                </h2>
                <button @click="resolveError(error)">Resolve Error</button>
            </div>
        </template>
    </NuxtErrorBoundary>
  </template>