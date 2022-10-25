<template>
  <div class="flex flex-col">
    <!-- SEarch bar -->
    <div class="relative m-2">
      <div
        class="
          absolute
          flex
          items-center
          h-full
          pl-4
          text-gray-600
          cursor-pointer
        "
      >
        <div class="w-6 h-6">
          <MagnifyingGlassIcon @click="handleSearch" />
        </div>
      </div>
      <input
        v-model="search"
        class="
          text-black
          flex
          items-center
          w-full
          pl-12
          text-sm
          font-normal
          dark:text-gray-200
          bg-gray-200
          border border-gray-300
          rounded-full
          shadow
          dark:bg-dim-400 dark:border-dim-400
          focus:bg-gray-100
          dark:focus:bg-dim-800
          focus:outline-none focus:border focus:border-blue-200
          h-9
        "
        placeholder="Search Anything"
        type="text"
      />
    </div>
    <!-- preview card : what happening  -->
    <SidebarRightPreviewCard title="what happening">
      <SidebarRightPreviewCardItem v-for="whatHappening in whatHappeningItems">
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
    <footer>
      <ul class="mx-2 my-4 text-xs text-gray-500">
        <li class="inline-block mx-2">
          <a
            href="#"
            class="hover:underline"
            @click.prevent="handleToggleDarkMode"
            >Dark mode</a
          >
        </li>
        <li class="inline-block mx-2">
          <a href="#" class="hover:underline">Privacy Policy</a>
        </li>
        <li class="inline-block mx-2">
          <a href="#" class="hover:underline">Cookie Policy</a>
        </li>
        <li class="inline-block mx-2">
          <a href="#" class="hover:underline">Accessability</a>
        </li>
        <li class="inline-block mx-2">
          <a href="#" class="hover:underline">Ads info</a>
        </li>
        <li class="inline-block mx-2">
          <a href="#" class="hover:underline">More</a>
        </li>
        <li class="inline-block mx-2">© 2022 CodeEngineering, Inc.</li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import useEmitter from "~~/components/composables/useEmitter";
const whatHappeningItems = ref([
  { title: "Phnom penh", count: "18.8k Tweets" },
  { title: "Svay Rieng", count: "8.8k Tweets" },
  { title: "Kompot", count: "1.8k Tweets" },
]);
const emitter = useEmitter();
const search = ref("");
const handleSearch = () => {
  useRouter().push({
    path: "/search",
    query: {
      q: search.value,
    },
  });
};
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
function handleToggleDarkMode() {
  emitter.$emit("toggleDarkMode");
}
</script>
