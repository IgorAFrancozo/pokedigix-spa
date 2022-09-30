<script setup>
import { RouterView } from 'vue-router';
import Cabecalho from './components/Cabecalho.vue';
import Style from './assets/Style.css'
</script>

<template>
	<Cabecalho />
	<main class="container">
		<RouterView />
	</main>
</template>
<style>
.container {
	padding: 7px;
	margin: 7px;
}
</style>