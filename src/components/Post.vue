<template>
	<div class="post flex flex-wrap space-x-2">
		<p>{{ `${date}:` }}</p>
		<div v-html="post.content" />
	</div>
</template>

<script setup lang="ts">
import { IPost } from './Post';

const props = defineProps<{post: IPost}>();

const date = new Date(props.post.created_at).toLocaleString().replace(',', '').split(':').slice(0, -1).join(':')
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