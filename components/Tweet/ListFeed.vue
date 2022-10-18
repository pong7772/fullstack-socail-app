<template>
  <div>
    <div v-if="isEmptyArray" class="p-4">
      <p class="text-center text-gray-500">Sorry WE Have No Tweets</p>
    </div>
    <div
      v-else
      class="
        pb-4
        border-b
        hover:bg-gray-100
        cursor-pointer
        dark::hover:bg-dim-300
      "
      :class="[twitterBorderColor, deafaultTransitions]"
      v-for="tweet in props.tweets"
      :key="tweet.id"
    >
      <TweetItem :tweet="tweet" />
    </div>
  </div>
</template>

<script setup>
import useTailwindConfig from "../composables/useTailwindConfig";

const { twitterBorderColor, deafaultTransitions } = useTailwindConfig();
const props = defineProps({
  tweets: {
    type: Array,
    required: true,
  },
});
const isEmptyArray = computed(() => {
  props.tweets.length === 0;
});
</script>