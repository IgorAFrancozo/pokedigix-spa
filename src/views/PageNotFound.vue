<template>
	<div class="alert bg-dark text-center mt-5 cgi" role="alert">
		<strong>
			<h1>404</h1>
		</strong>
		<h2>Página não encontrada !</h2>
	</div>
	<div class="text-center rounded-4">
		<img src="../../public/icone/notfoundsquirtle.gif" style="max-width: 450px" />
	</div>
	<h4 class="mt-4 text-white">Volte para a <RouterLink to="/">Pagina Inicial</RouterLink>
	</h4>
</template>
<script>

import { RouterLink } from 'vue-router';

</script>
<style>
.cgi {
	color: rgb(237, 100, 10);
}
</style>