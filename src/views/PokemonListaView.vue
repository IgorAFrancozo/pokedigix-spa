<script>
import PokemonDataService from '../services/PokemonDataService';
import { ref } from 'vue'

export default {
	name: "lista-pokemons",
	data() {
		return { pokemons: [] };
	},
	methods: {
		buscarPokemons() {
			PokemonDataService.buscarTodos()
				.then(resposta => {
					this.pokemons = resposta
				})
		}
	},
	mounted() {
		this.buscarPokemons();
	},

	setup() {
		const url = ref('https://uploaddeimagens.com.br/imagens/n_9ic6o')

		return {
			url,
			refresh() {
				url.value = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemon.numeroPokedex + '.png'
			}
		}
	}
}

</script>

<template>
	<main>
		<div class="row row-cols-1 row-cols-md-6 g-4 bg-dark p-5">
			<div class="col" v-for="pokemon in pokemons" :key="pokemon.id">
				<div class="card">
					<b-card-text class="headerCard">{{pokemon.nome}}</b-card-text>
					<img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/' + pokemon.numeroPokedex + '.png'"
						class="card-img-top" alt="..." />
					<div class="accordion" id="accordionExample">
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingOne">
								<button class="accordion-button" type="button" data-bs-toggle="collapse"
									data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
									Detalhes
								</button>
							</h2>
							<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
								data-bs-parent="#accordionExample">
								<div class="accordion-body">
									<h5 class="card-title"> N° Pokedex: {{pokemon.numeroPokedex}} </h5>
									<h5 class="card-title"> Nível : {{pokemon.nivel}} </h5>
									<h5 class="card-title"> {{pokemon.genero}} </h5>
									<h5 class="card-title"> Altura : {{pokemon.altura}} </h5>
									<h5 class="card-title"> Peso : {{pokemon.peso}} </h5>
									<h5 class="card-title"> Felicidade : {{pokemon.felicidade}} </h5>
									<span id="spinner" class="spinner-grow spinner-grow-sm" role="status"
										aria-hidden="true"></span>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<style>
.spinner-grow {
	align-items: center;
}

.card-title {
	display: block;
	align-items: center;
	color: white;
	background-color: rgb(255, 102, 0);
	border-radius: 12px;
	text-align: center;
	font-weight: bolder;
}

.card-img-top {
	background-color: rgb(151, 7, 187);
	outline: 10px;
	stroke: white;
	stroke-width: 4px;
	border-radius: 30px;
	padding-left: 12px;
	padding-right: 12px;
}

.headerCard {
	background-color: rgb(255, 102, 0);
	text-align: center;
	color: white;
	text-transform: uppercase;
	font-weight: bold;
	border-radius: 12px;
}
</style>
