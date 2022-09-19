<template>
  <div
    class="m-2 border rounded-2xl bg-gray-50 dark:bg-dim-700 overflow-hidden"
    :class="twitterBorderColor"
  >
    <h1
      class="p-3 text-xl font-extrabold text-gray-900 border-b dark:text-white"
    >
      {{ props.title }}
    </h1>
    <slot> </slot>
    <div
      class="
        p-3
        text-sm text-blue-300
        cursor-pointer
        hover:bg-gray-200
        dark:hover:bg-dim-400
      "
      :class="deafaultTransitions"
    >
      showmore
    </div>
  </div>
</template>

<script setup>
import useTailwindConfig from "~~/components/composables/useTailwindConfig";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
const { twitterBorderColor, deafaultTransitions } = useTailwindConfig();
</script>
