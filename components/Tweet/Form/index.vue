<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center p-6">
      <UISpinner />
    </div>
    <div v-else>
      <TweetFormInput :user="props.user" @onSubmit="handleFormSubmit" />
    </div>
  </div>
</template>

<script setup>
import useTweets from "~~/components/composables/useTweets";

const { postTweet } = useTweets();
const loading = ref(false);
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
const handleFormSubmit = async (data) => {
  loading.value = true;
  try {
    const response = await postTweet({
      text: data.text,
      mediaFiles: data.mediaFiles,
    });
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
</script>