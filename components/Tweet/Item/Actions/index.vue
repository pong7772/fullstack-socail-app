<template>
  <div class="flex items-center justify-around w-full">
    <TweetItemActionsIcon
      color="blue"
      @on-click="emits('onCommentClick')"
      :size="size"
    >
      <template v-slot:icon="{ classes }">
        <ChatBubbleLeftIcon :class="classes" />
      </template>
      <template v-if="showStats" v-slot:default>
        {{ props.tweet.replies.length }}
      </template>
    </TweetItemActionsIcon>
    <TweetItemActionsIcon color="green" :size="size">
      <template v-slot:icon="{ classes }">
        <ArrowPathIcon :class="classes" />
      </template>
      <template v-slot:default>
        <span v-if="showStats">
          {{ generateRandomNum() }}
        </span>
      </template>
    </TweetItemActionsIcon>
    <TweetItemActionsIcon color="red" :size="size">
      <template v-slot:icon="{ classes }">
        <HeartIcon :class="classes" />
      </template>
      <template v-slot:default>
        <span v-if="showStats">
          {{ generateRandomNum() }}
        </span>
      </template>
    </TweetItemActionsIcon>
    <TweetItemActionsIcon color="blue" :size="size">
      <template v-slot:icon="{ classes }">
        <ArrowUpTrayIcon :class="classes" />
      </template>
      <template v-slot:default>
        <span v-if="showStats">
          {{ generateRandomNum() }}
        </span>
      </template>
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
  compact: {
    type: Boolean,
    default: false,
  },
});
const generateRandomNum = () => {
  return Math.floor(Math.random() * 100);
};
const emits = defineEmits(["onCommentClick"]);
const showStats = computed(() => props.compact);
const size = computed(() => (props.compact ? 5 : 8));
</script>