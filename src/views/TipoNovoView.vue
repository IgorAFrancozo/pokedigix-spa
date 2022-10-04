<script>
import TipoDataService from "../services/TipoDataService";
import Tipo from "../models/Tipo";
export default {
	name: "tipos-novo",
	data() {
		return {
			tipo: new Tipo(),
			salvo: false,
		};
	},
	methods: {
		salvar() {
			TipoDataService.criar(this.tipo)
				.then((resposta) => {
					this.tipo.id = resposta.id;
					console.log(this.tipo);
					this.salvo = true;
				})
				.catch((erro) => {
					console.log(erro);
					this.salvo = false;
				});
		},
		novo() {
			this.tipo = new Tipo();
			this.salvo = false;
		},
		voltar() {
			this.$router.push({ name: "tipos-lista" });
		},
	},
};
</script>

<template>
	<div v-if="!salvo">
		<form>
			<div class="cgi mb-3">
				<label for="nome" class="form-label">Nome do Tipo</label>
				<input type="text" required class="form-control" v-model="tipo.nome" id="nome" />
			</div>
			<button @click.prevent="salvar" class="btn btn-success">Salvar</button>
		</form>
	</div>
	<div v-else>
		<div class="row">
			<h4>Salvo com sucesso!</h4>
			<span>Tipo id: {{ tipo.id }}</span>
		</div>
		<div class="row">
			<div class="col-1">
				<button @click="novo" class="btn btn-primary">Novo</button>
			</div>
			<div class="col-1">
				<button @click="voltar" class="btn btn-secondary">Voltar</button>
			</div>
		</div>
	</div>
</template>
<style>
.cgi {
	color: white;
}
</style>