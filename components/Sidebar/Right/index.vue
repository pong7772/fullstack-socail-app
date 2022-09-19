<template>
  <div class="flex flex-col">
    <!-- preview card : what happening  -->
    <SidebarRightPreviewCard title="what happening">
      <SidebarRightPreviewCardItem v-for="whatHappening in whatHappeningItem">
        <h2 class="font-bold text-gray-800 text-md dark:text-white">
          {{ whatHappening.title }}
        </h2>
        <p class="text-xs text-gray-500">{{ whatHappening.count }}</p>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>

    <!-- preview card : what happening  -->
    <SidebarRightPreviewCard title="who to follow">
      <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowItem">
        <div class="flex flex-row justify-between p-2 items-center">
          <div class="flex flex-row">
            <img class="w-10 h-10 rounded-full" :src="whoToFollow.img" />
            <div class="flex flex-col ml-2">
              <h1 class="text-sm font-bold text-gray-900 dark:text-white">
                {{ whoToFollow.name }}
              </h1>
              <p class="text-xs text-gray-500">{{ whoToFollow.handle }}</p>
            </div>
          </div>
          <div class="flex h-full">
            <button
              class="
                bg-sky-300
                px-4
                py-2
                font-bold
                text-white text-xs
                dark:bg-white dark:text-black
                rounded-full
              "
            >
              Follow
            </button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
  </div>
</template>

<script setup>
const whatHappeningItem = ref([
  { title: "Phnom penh", count: "18.8k Tweets" },
  { title: "Svay Rieng", count: "8.8k Tweets" },
  { title: "Kompot", count: "1.8k Tweets" },
]);
const whoToFollowItem = ref([
  {
    name: "Visothipong",
    handle: "@pongsss",
    img: "https://picsum.photos/200/200",
  },
  {
    name: "Visothipong",
    handle: "@pongsss",
    img: "https://picsum.photos/200/200",
  },
  {
    name: "Visothipong",
    handle: "@pongsss",
    img: "https://picsum.photos/200/200",
  },
]);
</script>
