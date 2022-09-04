<template>
  <div :class="{ dark: darkMode }">
    <!-- <NuxtWelcome /> -->
    <h1 class="text-red-500 dark:text-dim-500">Hello Pong</h1>
  </div>
</template>

<script setup>
const darkMode = ref(true);
</script>