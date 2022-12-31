<template>
  <q-page class="row items-center justify-evenly">
    <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" v-for="tweet in tweets" :key="tweet.id">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Title</q-item-label>
          <q-item-label caption>{{ tweet.created_at }}</q-item-label>
        </q-item-section>
      </q-item>

      <q-card-section class="col-5 flex flex-center q-pt-none">
        <q-img
          class="rounded-borders"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ tweet.description }}
      </q-card-section>

      <q-separator />
      <q-card-actions>
        <q-btn flat icon="link">
          Open tweet
        </q-btn>
      </q-card-actions>

    </q-card>
  </div>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta, Tweet } from 'components/models';
import { defineComponent, ref } from 'vue';
import fs from 'fs';

fs.readdir('/archive', (e) => console.log(e));

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const tweets = ref<Tweet[]>([
      {
        id: '1596816374197760000',
        created_at: 'Sun Nov 27 10:41:05 +0000 2022',
        description: '乌鲁木齐中路 时间不详 https://t.co/Jcniv7YiTv',
        isMedia: true,
        favorite_count: 2879,
        retweet_count: 237,
        reply_count: 309,
        quote_count: 48,
        isImage: true,
        media_url: [
            {
                url: 'https://pbs.twimg.com/media/FikH0-3XoAAVerD.jpg',
                content_type: 'img/jpg'
            }
        ]
      },
      {
        id: '1596816374197760001',
        created_at: 'Sun Nov 27 10:41:05 +0000 2022',
        description: '乌鲁木齐中路 时间不详 https://t.co/Jcniv7YiTv',
        isMedia: true,
        favorite_count: 2879,
        retweet_count: 237,
        reply_count: 309,
        quote_count: 48,
        isImage: true,
        media_url: [
            {
                url: 'https://pbs.twimg.com/media/FikH0-3XoAAVerD.jpg',
                content_type: 'img/jpg'
            }
        ]
      }
    ]);

    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ]);
    const meta = ref<Meta>({
      totalCount: 1200
    });
    return { todos, meta, tweets };
  }
});
</script>
