<script setup>
import { RouterView } from 'vue-router';
import Cabecalho from './components/Cabecalho.vue';
</script>
<template>
	<Cabecalho />
	<main class="container">
		<RouterView />
	</main>
</template>

<style>

</style>