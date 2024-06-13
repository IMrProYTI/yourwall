<template>
	<div class="p-2 space-y-1">
		<p>Use Markdown:</p>
		<hr :class="`border-[#${theme.border}]`">
		<p><code>*Italic*</code> - <i>Italic</i></p>
		<p><code>**Bold**</code> - <b>Bold</b></p>
		<p><code>***Italic + Bold***</code> - <i><b>Italic + Bold</b></i></p>
		<p><code>__Underline__</code> - <ins>Underline</ins></p>
		<p><code>[Link](https://youtu.be/dQw4w9WgXcQ)</code> - <a href="https://youtu.be/dQw4w9WgXcQ">Link</a></p>
		<p><code>`Code`</code> - <code>Code</code></p>
		<p><code>```Big Code```</code> - <code>Big Code</code></p>
		<hr :class="`border-[#${theme.border}]`">
		<p>etc.</p>
	</div>
</template>

<script setup lang="ts">
import { currentThemeData } from '../Themes';
const theme = currentThemeData;
</script>