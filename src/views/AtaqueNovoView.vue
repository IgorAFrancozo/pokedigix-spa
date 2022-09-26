<script>
import AtaqueRequest from '../models/AtaqueRequest';
import TipoDataService from '../services/TipoDataService';
import AtaqueDataService from '../services/AtaqueDataService';
import ataqueResponse from '../models/AtaqueResponse'


export default {
	name: 'ataques-novo',
	data() {
		return {
			ataqueRequest: new AtaqueRequest(),
			ataqueResponse: new ataqueResponse(),
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
			tipos: [],
			desativarForca: false
		}
	},
	methods: {
		salvar() {
			AtaqueDataService.criar(this.ataqueRequest)
				.then(resposta => {
					this.ataqueResponse = resposta;
					this.salvo = true;
				})
				.catch(erro => {
					console.log(erro);
				})
		},
		novo() {
			this.salvo = false;
			this.desativarForca = false;
			this.ataqueRequest = new AtaqueRequest();
			this.ataqueRequest.categoria = this.categorias[1].nomeBanco;
			this.ataqueResponse = new ataqueResponse();
		},
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
	escolherCategoria() {
		if (this.ataqueRequest.categoria == "EFEITO") {
			this.desativarForca = true;
		} else {
			this.desativarForca = false;
		}
	},
	mounted() {
		this.novo();
		this.carregarTipos();
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
			<div class="col-6">
				<label for="forca" class="form-label">Força</label>
				<input type="text" required :disabled="desativarForca" class="form-control"
					v-model="ataqueRequest.forca" id="forca">
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
				<select id="categoria" @change="escolherCategoria" class="form-select"
					v-model="ataqueRequest.categoria">
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
			<div class="col-12">
				<label for="descricao" class="form-label"
					placeholder="Ex: Este ataque causa dano físico.">Descricao</label>
				<textarea id="descricao" class="form-control" v-model="ataqueRequest.descricao">
				</textarea>
			</div>
			<button @click.prevent="salvar" class="btn btn-dark">Salvar</button>
		</form>
	</div>
	<div v-else>
		<div class="row">
			<h4>Salvo com sucesso!</h4>
			<span>Ataque id: {{ataqueResponse.id}}</span>
		</div>
		<div class="container m-3">
			<button @click="novo" class="btn btn-dark">Novo Cadastro</button>
		</div>
	</div>
</template>