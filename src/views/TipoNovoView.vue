<script>
import TipoDataService from '../services/TipoDataService'
import Tipo from '../models/Tipo'

export default {
	name: 'tipos-novo',
	data() {
		return { tipo: new Tipo(), salvo: false }
	},
	methods: {
		salvar() {
			TipoDataService.criar(this.tipo)
				.then(resposta => {
					this.tipo.id = resposta.id;
					console.log(this.tipo);
					this.salvo = true;
				})
				.catch(erro => {
					console.log(erro);
					this.salvo = false;
				})
		},
		novo() {
			this.tipo = new Tipo();
			this.salvo = false;
		}
	}
}
</script>

<template>
	<div v-if="!salvo">
		<form>
			<div class="mt-2 mb-2">
				<label for="nome" class="form-label">Nome do Tipo</label>
				<input type="text" required class="form-control" v-model="tipo.nome" id="nome">
			</div>
			<button @click.prevent="salvar" class="btn btn-dark m-2">Salvar</button>
		</form>
	</div>
	<div v-else>
		<h4>Salvo com sucesso!</h4>
		<span>Tipo id: {{tipo.id}}</span>
		<div class="container m-3">
			<button @click="novo" class="btn btn-dark">Novo Cadastro</button>
		</div>
	</div>
</template>

