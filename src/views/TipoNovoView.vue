<script>
import TipoDataService from "../services/TipoDataService";
import MensagemSucessoVue from "../components/MensagemSucesso.vue";
import Tipo from "../models/Tipo";
export default {
	name: "tipos-novo",
	data() {
		return {
			tipo: new Tipo(),
			salvo: false,
		};
	},
	components: {
		MensagemSucessoVue,
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
				<label for="nome" class="form-label cgi">Nome do Tipo</label>
				<input type="text" required class="form-control" v-model="tipo.nome" id="nome" />
			</div>
			<button @click.prevent="salvar" class="btn btn-dark cgi">Salvar</button>
		</form>
	</div>
	<div v-else>
		<MensagemSucessoVue @cadastro="novo" urlListagem="tipos-lista">
			<span>O Tipo <strong>{{ tipo.nome }}</strong> foi cadastrado com sucesso!</span>
		</MensagemSucessoVue>
	</div>
</template>
<style>
.cgi {
	color: rgb(237, 100, 10);
}
</style>
