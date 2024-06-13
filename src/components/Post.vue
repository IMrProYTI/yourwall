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

// {
//   id: number;
//   content: string[];
//   created_at: string;
// }
</script>

<style scoped>

</style>