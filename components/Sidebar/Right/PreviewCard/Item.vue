<template>
  <div
    class="p-3 hover:bg-gray-200 cursor-pointer dark:hover:bg-dim-300 border-b"
    :class="wrapperClasses"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import useTailwindConfig from "~~/components/composables/useTailwindConfig";

const { deafaultTransitions, twitterBorderColor } = useTailwindConfig();
const wrapperClasses = computed(
  () => `${deafaultTransitions} ${twitterBorderColor}`
);
</script>
