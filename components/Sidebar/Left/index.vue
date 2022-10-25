

<template>
  <div class="h-screen flex flex-col">
    <div
      class="
        p-2
        my-2
        rounded-full
        hover:bg-blue-50
        w-min
        dark:hover:bg-white/20
      "
      :class="deafaultTransitions"
    >
      <div @click="navigateTo('/')" class="w-20 h-20">
        <LogoTwitter />
        <!-- <img src="../../../assets/authpage.png" /> -->
      </div>
    </div>
    <!-- it store the icon and name of left side  -->
    <div class="mt-2 space-y-3">
      <SidebarLeftTab active>
        <template v-slot:icon>
          <HomeIcon />
        </template>
        <template v-slot:name> Home </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <HashtagIcon />
        </template>
        <template v-slot:name> Explore </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <BellIcon />
        </template>
        <template v-slot:name> Notification </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <InboxIcon />
        </template>
        <template v-slot:name> Messages </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <BookmarkIcon />
        </template>
        <template v-slot:name> Bookmarks </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <DocumentTextIcon />
        </template>
        <template v-slot:name> List </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <UserIcon />
        </template>
        <template v-slot:name> Profile </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <ListBulletIcon />
        </template>
        <template v-slot:name> More </template>
      </SidebarLeftTab>
      <div class="hidden xl:block">
        <UIButton liquid size="lg" @on-click="emits('onTweet')">
          <span class="font-bold">Post Your Feel</span>
        </UIButton>
      </div>
      <div class="block xl:hidden">
        <UIButton @on-click="emits('onTweet')">
          <div class="w-6 h-6 font-bold">
            <PencilIcon />
          </div>
        </UIButton>
      </div>
    </div>

    <div
      class="
        flex flex-col
        items-center
        justify-center
        px-2
        py-2
        mx-auto
        mt-auto
        mb-5
        rounded-full
        cursor-pointer
        w-14
        xl:w-full
        hover:bg-gray-100
        dark:hover:bg-dim-700
      "
      :class="deafaultTransitions"
    >
      <div class="flex flex-row">
        <img
          :src="props.user.profileImage"
          alt=""
          class="w-10 h-10 rounded-full"
        />
        <div class="flex-col hidden ml-2 xl:block">
          <div
            class="
              item-center
              flex
              justify-between
              text-sm
              font-bold
              text-gray-600
              dark:text-white
            "
          >
            {{ user.name }}
          </div>

          <p class="text-sm text-gray-500">
            {{ user.handle }}
          </p>
        </div>
      </div>
      <!-- icon -->
      <div class="hidden ml-auto xl:block">
        <div class="overflow-hidden">
          <UIButton
            class="
              item-center
              flex
              justify-between
              text-sm
              font-bold
              text-gray-800
              dark:text-white
            "
            @click="emits('onLogout')"
            >logout</UIButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useTailwindConfig from "../../composables/useTailwindConfig";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  DocumentTextIcon,
  UserIcon,
  ClipboardDocumentListIcon,
  ListBulletIcon,
  PencilIcon,
} from "@heroicons/vue/24/outline";
import { HomeIcon } from "@heroicons/vue/24/solid";
const { deafaultTransitions } = useTailwindConfig();
const emits = defineEmits(["onTweet", "onLogout"]);

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>