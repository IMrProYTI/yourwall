<template>
	<header class="absolute flex justify-around items-center font-bold text-lg w-full">
		<div class="flex *:px-1 space-x-2">
			<router-link to="/">Wall</router-link>
			<router-link to="/about">About</router-link>
		</div>
		<div class="flex *:px-1 space-x-2">
			<button :class="currentTheme === 'light' ? 'underline' : ''" @click="() => changeTheme('light')">Light</button>
			<button :class="currentTheme === 'dark' ? 'underline' : ''" @click="() => changeTheme('dark')">Dark</button>
			<button :class="currentTheme === 'code' ? 'underline' : ''" @click="() => changeTheme('code')">Code</button>
		</div>
	</header>
</template>

<script setup lang="ts">
import currentTheme, { changeTheme } from '../Themes';
</script>

<style scoped>
.router-link-active  {
	text-decoration: underline;
}
</style>