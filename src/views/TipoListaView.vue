<script >
import TipoDataService from '../services/TipoDataService';
export default {
	name: "tipo-lista",
	data() {
		return { tipo: [] };
	},
	methods: {
		buscarTipos() {
			TipoDataService.buscarTodos()
				.then(resposta => {
					this.tipo = resposta
				})
				.catch(erro => {
					console.log(erro);
				});
		}
	},
	mounted() {
		this.buscarTipos();
	}
}

</script>
<template>
	<main>
		<div class="row row-cols-1 row-cols-md-5 g-3">
			<div class="col" v-for="tipo in tipo" :key="tipo.id">
				<ul>
					<li>
						{{tipo.nome}}
					</li>
				</ul>
			</div>
		</div>
	</main>
</template>