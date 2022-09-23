<script>
import AtaqueRequest from '../models/AtaqueRequest';
import TipoDataService from '../services/TipoDataService';
import AtaqueDataService from '../services/AtaqueDataService';


export default {
	name: 'ataques-novo',
	data() {
		return {
			ataqueRequest: new AtaqueRequest(),
			salvo: false,
			categorias: [
				{
					indice: 1,
					nome: "Físico",
					nomeBanco: "FISICO"
				},
				{
					indice: 2,
					nome: "Especial",
					nomeBanco: "ESPECIAL"
				},
				{
					indice: 3,
					nome: "Efeito",
					nomeBanco: "EFEITO"
				}
			],
			tipos: []
		}
	},
	methods: {
		carregarTipos() {
			TipoDataService.buscarTodos()
				.then(resposta => {
					this.tipos = resposta;
					this.ataqueRequest.tipoId = this.tipos[5].id;
				}).catch(erro => {
					console.log(erro);
				});
		}
	},
	mounted() {
		this.ataqueRequest.categoria = this.categorias[1].nomeBanco;
		this.carregarTipos();
	}
}
</script>

<template>
	<div v-if="!salvo">
		<form class="row g-3">
			<div class="col-12">
				<label for="nome" class="form-label">Nome do Ataque</label>
				<input type="text" required class="form-control" v-model="ataqueRequest.nome" id="nome">
			</div>
			<div class="col">
				<label for="forca" class="form-label">Força</label>
				<input type="text" required class="form-control" v-model="ataqueRequest.forca" id="forca">
			</div>
			<div class="col-6">
				<label for="acuracia" class="form-label">Acuracia</label>
				<input type="text" required class="form-control" v-model="ataqueRequest.acuracia" id="acuracia">
			</div>
			<div class="col-3">
				<label for="PP" class="form-label">Poder</label>
				<input type="number" required class="form-control" v-model="ataqueRequest.pontosDePoder" id="PP">
			</div>
			<div class="col-9">
				<label for="categoria" class="form-label">Categoria</label>
				<select id="categoria" class="form-select" v-model="ataqueRequest.categoria">
					<option v-for="categoria in categorias" :key="categoria.indice" :value="categoria.nomeBanco">
						{{categoria.nome}}</option>
				</select>
			</div>
			<div class="col-12">
				<label for="tipo" class="form-label">Tipo do Ataque</label>
				<select id="tipo" class="form-select" v-model="ataqueRequest.tipoId">
					<option v-for="tipo in tipos" :key="tipo.indice" :value="tipo.nomeBanco">
						{{tipo.nome}}</option>
				</select>
			</div>
			<button @click.prevent="salvar" class="btn btn-dark">Salvar</button>
		</form>
	</div>
	<div v-else>
		<h4>Salvo com sucesso!</h4>
		<span>Ataque id: {{ataqueRequest.id}}</span>
		<div class="container m-3">
			<button @click="novo" class="btn btn-dark">Novo Cadastro</button>
		</div>
	</div>
</template>