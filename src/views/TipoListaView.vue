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
		<div>
			<h2 class="mb-2 mt-5 text-center">Lista de Tipos</h2>
			<div class="container">
				<table class="table table-dark">
					<thead>
						<tr>
							<th scope="col">Id</th>
							<th scope="col">Tipo</th>
						</tr>
					</thead>
					<tbody>
						<tr class="col" v-for="tipo in tipo" :key="tipo.id">
							<td scope="row">{{tipo.id}}</td>
							<td>{{tipo.nome}}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</main>
</template>

<style>
.container {
	border-radius: 100px;
}
</style>