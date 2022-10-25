<template>
  <MainSection title="Code" :loading="loading">
    <TweetDetails :tweet="tweet" :user="user" />
  </MainSection>
</template>

<script setup>
import useAuth from "~~/components/composables/useAuth";
import useTweets from "~~/components/composables/useTweets";

const loading = ref(false);
const tweet = ref(null);
const { getTweetById } = useTweets();
const { useAuthUser } = useAuth();
const user = useAuthUser();
watch(
  () => useRoute().fullPath,
  () => getTweet()
);
function getTweetIdFromRoute() {
  return useRoute().params.id;
}
async function getTweet() {
  loading.value = true;
  try {
    const response = await getTweetById(getTweetIdFromRoute());
    tweet.value = response.tweet;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}
onBeforeMount(() => {
  getTweet();
});
</script> 