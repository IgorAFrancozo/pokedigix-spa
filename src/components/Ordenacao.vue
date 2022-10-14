<script>
export default {
	name: 'ordenacao',
	props: {
		ordenacao: Object,
		opcoes: Array
	},
	methods: {
		filtrar() {
			this.$emit('ordenar');
		}
	}
}
</script>

<template>
	<select class="form-select" @change="filtrar" v-model="ordenacao">
		<option v-for="opcao in opcoes" :key="opcao.titulo" :value="opcao">
			{{opcao.titulo}}
		</option>
	</select>
</template>