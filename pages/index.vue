<template>
  <div>
    <MainSection title="CodeEnginner Community " :loading="loading">
      <Head>
        <Title>Home / CodeEngineering</Title>
      </Head>

      <div class="border-b" :class="twitterBorderColor">
        <TweetForm :user="user" @on-success="handleFormSuccess" />
      </div>

      <TweetListFeed :tweets="homeTweets" />
    </MainSection>
  </div>
</template>

<script setup>
import useAuth from "~~/components/composables/useAuth";
import useTailwindConfig from "~~/components/composables/useTailwindConfig";
import useTweets from "~~/components/composables/useTweets";
const { twitterBorderColor } = useTailwindConfig();
const { getTweets } = useTweets();
const loading = ref(false);
const homeTweets = ref([]);
const { useAuthUser } = useAuth();
const user = useAuthUser();

onBeforeMount(async () => {
  loading.value = true;
  try {
    const { tweets } = await getTweets();
    homeTweets.value = tweets;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});
function handleFormSuccess(tweet) {
  navigateTo({
    path: `/status/${tweet.id}`,
  });
}
</script>

