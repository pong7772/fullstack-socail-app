<template>
  <div>
    <MainSection title="Search CodeEnginner Community " :loading="loading">
      <Head>
        <Title>Search / CodeEngineering</Title>
      </Head>

      <TweetListFeed :tweets="searchTweets" />
    </MainSection>
  </div>
</template>

<script setup>
import useAuth from "~~/components/composables/useAuth";
import useTailwindConfig from "~~/components/composables/useTailwindConfig";
import useTweets from "~~/components/composables/useTweets";
const { getTweets: getTweetsComposable } = useTweets();
const loading = ref(false);
const searchTweets = ref([]);
const searchQuery = useRoute().query.q;
watch(
  () => useRoute().fullPath,
  () => getTweets()
);
onBeforeMount(() => {
  getTweets();
});
async function getTweets() {
  loading.value = true;
  try {
    const { tweets } = await getTweetsComposable({
      query: searchQuery,
    });
    searchTweets.value = tweets;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}
</script>

