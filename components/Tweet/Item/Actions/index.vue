<template>
  <div class="flex items-center justify-around">
    <TweetItemActionsIcon color="blue">
      <template v-slot:icon="{ classes }">
        <ChatBubbleLeftIcon :class="classes" />
      </template>
      <template v-slot:default>
        {{ props.tweet.replies.length }}
      </template>
    </TweetItemActionsIcon>
    <TweetItemActionsIcon color="green">
      <template v-slot:icon="{ classes }">
        <ArrowPathIcon :class="classes" />
      </template>
      <template v-slot:default> {{ generateRandomNum() }} </template>
    </TweetItemActionsIcon>
    <TweetItemActionsIcon color="red">
      <template v-slot:icon="{ classes }">
        <HeartIcon :class="classes" />
      </template>
      <template v-slot:default> {{ generateRandomNum() }} </template>
    </TweetItemActionsIcon>
    <TweetItemActionsIcon color="blue">
      <template v-slot:icon="{ classes }">
        <ArrowUpTrayIcon :class="classes" />
      </template>
      <template v-slot:default> {{ generateRandomNum() }} </template>
    </TweetItemActionsIcon>
  </div>
</template>

<script setup>
import {
  ChatBubbleLeftIcon,
  HeartIcon,
  ArrowPathIcon,
  ArrowUpTrayIcon,
} from "@heroicons/vue/24/outline";
const props = defineProps({
  tweet: {
    type: Object,
    required: true,
  },
});
const generateRandomNum = () => {
  return Math.floor(Math.random() * 100);
};
</script>