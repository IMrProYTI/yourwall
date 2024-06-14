<template>
  <div class="flex flex-col w-fill flex-1 p-2">
    <div v-if="loading">
      Loading...
    </div>
    <div v-else-if="posts" class="space-y-1">
      <Post v-for="post in posts" :post="post" :key="post.id" />
    </div>
    <div>
      <div class="w-full max-w-sm mt-4">
        <div class="rounded p-2 border" :class="`border-[#${theme.border}]`">
          <p>Preview:</p>
          <div class="post flex flex-wrap break-all space-x-2" v-html="`<p>${getDate()}:</p>` + Converter.makeHtml(disableHTML(form.content))" />
        </div>
      </div>
      <div class="flex flex-col rounded *:rounded w-full max-w-sm *:p-1 space-y-1 mt-2">
        <textarea
          class="border resize-none h-32"
          :class="`bg-[#${theme.bg}] border-[#${theme.border}]`"
          v-model="form.content" placeholder="Content"
          @keypress.prevent.enter="enterEvent"
        ></textarea>
        <button class="border" :class="`border-[#${theme.border}]`" @click="submit">Submit</button>
      </div>
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

const date: Ref<number> = ref(Date.now());
const getDate = () => new Date(date.value).toLocaleString().replace(',', '').split(':').slice(0, -1).join(':');
setInterval(() => { date.value = Date.now() }, 1000);

const form = ref({
  content: ""
});

function enterEvent(payload: KeyboardEvent): void {
  if (payload.shiftKey) {
    form.value.content += '\n';
  } else {
    submit();
  }
}

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

<style>
.post h1 { font-size: xx-large; }
.post h2 { font-size: x-large; }
.post h3 { font-size: larger; }
.post h4 { font-size: large; }
.post h5 { font-size: medium; }
.post h6 { font-size: small; }
.post a { text-decoration: underline; }
</style>