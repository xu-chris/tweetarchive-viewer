<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Tweetarchive Viewer
        </q-toolbar-title>

        <q-input dark dense standout v-model="search" input-class="text-right" class="q-ml-md">
          <template v-slot:append>
            <q-icon v-if="search === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
          </template>
        </q-input>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const leftDrawerOpen = ref(false)
    let search = ref('')

    return {
      search,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
});
</script>
