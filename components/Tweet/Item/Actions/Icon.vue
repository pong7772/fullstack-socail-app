<template>
  <div class="flex items-center text-gray-400 cursor-pointer group">
    <div
      :class="`p-2 group-hover:bg-${props.color}-100 group-hover:text-${props.color}-400 rounded-full ${defaultTransition} dark:group-hover:bg-opacity-20`"
    >
      <slot name="icon" classes="w-5 h-5" />
    </div>
    <span :class="`ml-1 group-hover:text-${props.color}-400`">
      <slot></slot>
    </span>
  </div>
</template>

<script setup>
import useTailwindConfig from "~~/components/composables/useTailwindConfig";
const props = defineProps({
  color: {
    type: String,
    required: true,
  },
});
const { defaultTransition } = useTailwindConfig();
</script>