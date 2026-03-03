
  <template>
    <NuxtErrorBoundary>
        <NuxtPage />
        <template #error = "{ error }">
            <div>
                <h2>
                    Error !: {{ error.statusMessage }}
                </h2>
            </div>
        </template>
    </NuxtErrorBoundary>
  </template>