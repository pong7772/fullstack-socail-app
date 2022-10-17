<template>
  <button
    class="
      flex
      justify-center
      text-white
      bg-blue-400
      rounded-full
      hover:bg-blue-500
      font-sm
      disabled:bg-blue-300 disabled:cursor-not-allow
    "
    :disabled="props.disabled"
    :class="classes"
    @click="handleClick"
  >
    <span :class="textFontSize">
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
const emits = defineEmits(["onClick"]);
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "md",
  },
  liquid: {
    type: Boolean,
    default: false,
  },
});
const handleClick = (event) => {
  emits("onClick", event);
};
const paddingClasses = computed(() => {
  switch (props.size) {
    case "sm":
      return "px-3 py-2";
    case "lg":
      return "px-4 py-3";
    default:
      return "py-3 px-3";
  }
});
const textFontSize = computed(() => {
  switch (props.size) {
    default:
      return "text-sm";
  }
});

const defaultWidth = computed(() => {
  switch (props.size) {
    default:
      return "w-min";
  }
});

const classes = computed(
  () => `${paddingClasses.value} ${props.liquid ? "w-full" : defaultWidth}`
);
</script>