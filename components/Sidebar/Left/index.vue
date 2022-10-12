

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
      <nuxt-link to="/">
        <div class="w-8 h-8">
          <LogoTwitter />
          <!-- <img src="../../../assets/authpage.png" /> -->
        </div>
      </nuxt-link>
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
} from "@heroicons/vue/24/outline";
import { HomeIcon } from "@heroicons/vue/24/solid";
const { deafaultTransitions } = useTailwindConfig();
</script>