<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <LoadingPage v-if="isAuthLoading" />
      <div v-else-if="user" class="min-h-full">
        <!-- App -->
        <div
          class="
            grid grid-cols-12
            mx-auto
            sm:px-6
            lg:max-w-7xl lg:px-8 lg:gap-5
          "
        >
          <!-- Left sidebar -->
          <div class="hidden md:block xs-col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft
                @on-tweet="handleOpenTweetModal"
                :user="user"
                @onLogout="handleUserLogout"
              />
            </div>
          </div>
          <!-- Center sidebar -->
          <main class="col-span-12 md:col-span-8 xl:col-span-6">
            <router-view />
          </main>

          <!-- Right sidebar -->
          <div class="hidden md:block xl:col-span-4 md:col-span-3">
            <SidebarRight />
          </div>
        </div>
      </div>
      <AuthPage v-else />

      <UIModal :isOpen="postTweetModal" @on-close="hanldeModalClose">
        <TweetForm
          :replyTo="replyTweet"
          showReply
          :user="user"
          @on-success="handleFormSuccess"
        />
      </UIModal>
    </div>
  </div>
</template> 

<script setup>
import useAuth from "./components/composables/useAuth";
import useEmitter from "./components/composables/useEmitter";
import useTweets from "./components/composables/useTweets";
const emitter = useEmitter();
emitter.$on("replyTweet", (tweet) => {
  openPostTweetModal(tweet);
});
const darkMode = ref(!true);
const { useAuthUser, initAuth, useAuthLoading, logout } = useAuth();
const isAuthLoading = useAuthLoading();
const user = useAuthUser();
const {
  closePostTweetModal,
  usePostTweetModal,
  openPostTweetModal,
  useReplyTweet,
} = useTweets();
const replyTweet = useReplyTweet();
const postTweetModal = usePostTweetModal();
onBeforeMount(() => {
  initAuth();
});
function hanldeModalClose() {
  closePostTweetModal();
}
emitter.$on("toggleDarkMode", () => (darkMode.value = !darkMode.value));
function handleFormSuccess(tweet) {
  closePostTweetModal();
  navigateTo({
    path: `/status/${tweet.id}`,
  });
}
function handleOpenTweetModal(tweet) {
  openPostTweetModal(null);
}
function handleUserLogout() {
  logout();
}
</script>