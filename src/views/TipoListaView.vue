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
	<main class="cont">
		<div>
			<h2 class="mb-2 mt-5 text-center titulotipo">Lista de Tipos</h2>
			<div>
				<table class="table table-dark">
					<thead>
						<tr>
							<th scope="col" class="text-center">Id</th>
							<th scope="col" class="col-9 text-center">Tipo</th>
							<th scope="col" class="text-center">Editar</th>
							<th scope="col" class="text-center">Excluir</th>
						</tr>
					</thead>
					<tbody>
						<tr class="col" v-for="tipo in tipo" :key="tipo.id">
							<td scope="row" class="text-center">{{tipo.id}}</td>
							<td class="col-3 text-center">{{tipo.nome}}</td>
							<td class="text-center">
								<button type="button" class="btn btn-outline-light text-center" @click=""><svg
										xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
										class="text-center bi bi-pencil-square" viewBox="0 0 16 16">
										<path
											d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
										<path fill-rule="evenodd"
											d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
									</svg></button>
							</td>
							<td class="text-center">
								<button data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" @click=""
									class="btn btn-outline-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16"
										height="16" fill="currentColor" class="text-center bi bi-trash"
										viewBox="0 0 16 16">
										<path
											d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
										<path fill-rule="evenodd"
											d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
									</svg></button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</main>
</template>

<style>
.cont {
	background-color: rgba(90, 10, 155, 0.863);
	border-radius: 7px;
}

.titulotipo {
	color: white;
}
</style>