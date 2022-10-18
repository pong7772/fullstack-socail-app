<template>
  <div>
    <TweetItemHeader :tweet="props.tweet" />
    <div class="ml-16">
      <p class="flex-shrink w-auto font-medium text-gray-800 dark:text-white">
        {{ props.tweet.text }}
      </p>
      <div
        v-for="image in tweet.mediaFile"
        :key="image.id"
        class="flex my-3 mr-2 border-2 rounded-2xl"
        :class="twitterBorderColor"
      >
        <img :src="image.url" class="w-full rounded-2xl" />
      </div>
      <div class="mt-2">
        <TweetItemActions :tweet="props.tweet" />
      </div>
    </div>
  </div>
</template>
<script setup>
import useTailwindConfig from "~~/components/composables/useTailwindConfig";

const { twitterBorderColor } = useTailwindConfig();
const props = defineProps({
  tweet: {
    type: Object,
    required: true,
  },
});
</script>