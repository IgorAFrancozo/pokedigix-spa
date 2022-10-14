<script>
export default {
	name: 'paginacao',
	props: {
		quantidade: {
			type: Number,
			default: 4
		},
		total: {
			type: Number,
			default: 1
		},
		atual: {
			type: Number,
			default: 1
		},
		trocarPagina: {
			type: Function
		}
	},
	computed: {
		current() {
			let current = 1;
			current = this.atual < 1 ? 1 : this.atual
			return current > this.total ? this.total : current
		},
		inicio() {
			let inicio = this.current - this.current % this.quantidade
			if (this.current % this.quantidade == 0) {
				inicio = this.current - this.quantidade
			}
			if (this.current > this.quantidade) {
				inicio = inicio + 1
			}
			return Math.max(1, inicio)
		},
		fim() {
			let fim = this.inicio + this.quantidade - 1
			if (this.current % this.quantidade == 0) {
				fim = this.current
			}
			fim = fim > this.total ? this.total : fim
			return Math.min(fim, this.total)
		},
		contadorDePaginas() {
			let paginas = []
			for (let i = this.inicio; i <= this.fim; i++) {
				paginas.push(i)
			}
			return paginas
		}
	}
}
</script>

<template>
	<nav>
		<ul class="pagination justify-content-center">
			<li v-if="inicio > quantidade" class="page-item">
				<a href="#" @click="trocarPagina(atual-1)" aria-label="Anterior" class="page-link"><span
						aria-hidden="true">&laquo;</span></a>
			</li>
			<li v-if="contadorDePaginas.length" v-for="p in contadorDePaginas" :class="p == atual ? 'active' : ''"
				class="page-item">
				<a href="#" @click="p == atual ? null : trocarPagina(p)" v-text="p" class="page-link"></a>
			</li>
			<li v-if="fim != total" class="page-item">
				<a href="#" @click="trocarPagina(atual+1)" aria-label="Próximo" class="page-link"><span
						aria-hidden="true">&raquo;</span></a>
			</li>
		</ul>
	</nav>
</template>