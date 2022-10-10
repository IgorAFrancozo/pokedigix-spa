<script>
export default {
	name: 'mensagem-sucesso',
	props: {
		urlListagem: String,
	},
	methods: {
		voltar() {
			this.$router.push({ name: this.urlListagem })
		},
		novo() {
			this.$emit('cadastro');
		}
	}
}
</script>
<template>
	<div class="row">
		<div class="alert alert-success mt-3" role="alert">
			<slot></slot>
		</div>
	</div>
	<div class="row">
		<div class="col-1">
			<button @click="novo" class="btn btn-primary">Novo</button>
		</div>
		<div class="col-1">
			<button @click="voltar" class="btn btn-secondary">Voltar</button>
		</div>
	</div>
</template>