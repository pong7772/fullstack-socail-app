<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center p-6">
      <UISpinner />
    </div>
    <div v-else>
      <TweetItem
        :tweet="props.replyTo"
        v-if="props.replyTo && props.showReply"
        hideActions
      />
      <TweetFormInput
        :user="props.user"
        @onSubmit="handleFormSubmit"
        :placeholder="props.placeHolder"
      />
    </div>
  </div>
</template>

<script setup>
import useTweets from "~~/components/composables/useTweets";
const emits = defineEmits(["onSuccess"]);
const { postTweet } = useTweets();
const loading = ref(false);
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
  placeHolder: {
    type: String,
    default: "What on Your Mind ?",
  },
  replyTo: {
    type: Object,
    default: null,
  },
  showReply: {
    type: Boolean,
    default: false,
  },
});
async function handleFormSubmit(data) {
  loading.value = true;
  try {
    const response = await postTweet({
      text: data.text,
      mediaFiles: data.mediaFiles,
      replyTo: props.replyTo?.id,
    });
    emits("onSuccess", response.tweet);
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}
</script>