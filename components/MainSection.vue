<template>
  <div class="border-x" :class="twitterBorderColor">
    <div
      class="
        sticky
        top-0
        px-4
        py-3
        bg-white/80
        backdrop-blur-md
        dark:bg-dim-900/80
      "
    >
      <h2 class="text-xl font-bold text-gray-700 dark:text-gray-100">
        {{ props.title }}
      </h2>
    </div>
    <div
      class="flex items-center justify-center p-4 border-b"
      v-if="props.loading"
      :class="twitterBorderColor"
    >
      <UISpinner />
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import useTailwindConfig from "./composables/useTailwindConfig";

const props = defineProps({
  title: {
    type: String,
    require: true,
  },
  loading: {
    type: Boolean,
    require: true,
  },
});

const { twitterBorderColor } = useTailwindConfig();
</script>
