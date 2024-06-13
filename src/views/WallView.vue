<template>
  <div class="flex flex-col flex-1 p-2">
    <div v-if="loading">
      Loading...
    </div>
    <div v-else-if="posts" class="space-y-1">
      <Post v-for="post in posts" :post="post" :key="post.id" />
    </div>
    <div class="flex flex-col rounded *:rounded w-fit p-2 *:p-1 space-y-1 mt-2">
      <textarea class="border resize-none" :class="`bg-[#${theme.bg}] border-[#${theme.border}]`" v-model="form.content" cols="40" rows="5" placeholder="Content"></textarea>
      <button class="border" :class="`border-[#${theme.border}]`" @click="submit">Submit</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import supabase from '../supabase';
import Converter from '../Converter';

import { currentThemeData } from '../Themes';
const theme = currentThemeData;

import Post from '../components/Post.vue';
import { IPost } from '../components/Post';

const loading: Ref<boolean> = ref(true);
const posts: Ref<IPost[] | null> = ref([]);

const form = ref({
  content: ""
});

function disableHTML(input: string): string {
  let local = input;
  while (local.includes('<')) local = local.replace('<', '&lt;');
  while (local.includes('>')) local = local.replace('>', '&gt;');
  return local;
};

async function submit() {
  await supabase.from('wall').insert({ content: Converter.makeHtml(disableHTML(form.value.content)) }).select();
  form.value.content = '';
};

function insertEvent(payload: { new: IPost; }) {
  if (posts.value) {
    posts.value.push(payload.new); 
    posts.value.sort((a, b) => a.id - b.id);
  };
};

supabase.channel('postgres_changes').on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'wall' }, insertEvent).subscribe();

(async () => {
  const { data } = await supabase.from('wall').select('id,content,created_at');
  if (data) posts.value = data.sort((a, b) => a.id - b.id);
  loading.value = false;
})();
</script>