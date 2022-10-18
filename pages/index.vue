<template>
  <div>
    <MainSection title="Home" :loading="loading">
      <Head>
        <Title>Home / Twitter</Title>
      </Head>

      <div class="border-b" :class="twitterBorderColor">
        <TweetForm :user="user" />
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
const { getHomeTweets } = useTweets();
const homeTweets = ref([]);

const loading = ref(false);
const { useAuthUser } = useAuth();
const user = useAuthUser();

onBeforeMount(async () => {
  loading.value = true;
  try {
    const { tweets } = await getHomeTweets();
    homeTweets.value = tweets;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});
</script>

