

<template>
  <div class="h-screen flex flex-col">
    <div
      class="
        p-2
        my-2
        hover:rounded-full hover:bg-blue-50
        w-min
        dark:hover:bg-white/20
      "
      :class="deafaultTransitions"
    >
      <nuxt-link to="/">
        <div>
          <div class="w-8 h-8">
            <LogoTwitter />
          </div>
        </div>
      </nuxt-link>
    </div>

    <HomeIcon />
  </div>
</template>

<script setup>
import useTailwindConfig from "../composables/useTailwindConfig";

const { deafaultTransitions } = useTailwindConfig();
</script>