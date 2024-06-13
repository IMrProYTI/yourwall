<template>
	<div class="flex space-x-2">
		<p>{{ `${date}:` }}</p>
		<p v-html="post.content" />
	</div>
</template>

<script setup lang="ts">
import { IPost } from './Post';

const props = defineProps<{post: IPost}>();

const date = new Date(props.post.created_at).toLocaleString().replace(',', '').split(':').slice(0, -1).join(':')
</script>

<style scoped>
h1 { font-size: xx-large;}
h2 { font-size: x-large;}
h3 { font-size: larger;}
h4 { font-size: large;}
h5 { font-size: medium;}
h6 { font-size: small;}
</style>