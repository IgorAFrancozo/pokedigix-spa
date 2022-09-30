<script>
import PokemonDataService from '../services/PokemonDataService';
export default {
	name: "lista-pokemons",
	data() {
		return { pokemons: [], hoverColor: '' };
	},
	methods: {
		buscarPokemons() {
			PokemonDataService.buscarTodos()
				.then(resposta => {
					this.pokemons = resposta
				})
				.catch(erro => {
					console.log(erro);
				});
		},
		hoverIn() {
			this.hoverColor = 'rgb(151, 7, 187)';
		},
		hoverOut() {
			this.hoverColor = 'rgb(255, 102, 0)';
		}
	},
	mudarCaminho() {
		console.log("evento");
	},
	mounted() {
		this.buscarPokemons();
	}
}
</script>

<template>
	<main>
		<div class="row row-cols-1 row-cols-md-6 g-4 p-5">
			<div class="col" v-for="pokemon in pokemons" :key="pokemon.id">
				<div class="card">
					<b-card-text class="headerCard">{{pokemon.nome}}</b-card-text>
					<div @click="changeParam()">
						<img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/' + pokemon.numeroPokedex + '.png'"
							class="card-img-top" alt="..." />
					</div>
					<div class="accordion" id="accordionExample">
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingOne">
								<button class="accordion-button" type="button" data-bs-toggle="collapse"
									data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
									Detalhes
								</button>
							</h2>
							<div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
								data-bs-parent="#accordionExample">
								<div class="accordion-body">
									<h5 @mouseout="hoverOut()" @mouseover="hoverIn()"
										class="card-title animate text-center" :style="{backgroundColor: hoverColor}">
										N° Pokedex: {{pokemon.numeroPokedex}}
									</h5>
									<h5 @mouseout="hoverOut()" @mouseover="hoverIn()"
										class="card-title animate text-center" :style="{backgroundColor: hoverColor}">
										Nível: {{pokemon.nivel}} </h5>
									<h5 @mouseout="hoverOut()" @mouseover="hoverIn()"
										class="card-title animate text-center" :style="{backgroundColor: hoverColor}">
										{{pokemon.genero}} </h5>
									<h5 @mouseout="hoverOut()" @mouseover="hoverIn()"
										class="card-title animate text-center" :style="{backgroundColor: hoverColor}">
										Altura: {{pokemon.altura}}</h5>
									<h5 @mouseout="hoverOut()" @mouseover="hoverIn()"
										class="card-title animate text-center" :style="{backgroundColor: hoverColor}">
										Peso: {{pokemon.peso}} </h5>
									<h5 @mouseout="hoverOut()" @mouseover="hoverIn()"
										class="card-title animate text-center" :style="{backgroundColor: hoverColor}">
										Felicidade: {{pokemon.felicidade}} </h5>
									<div id="spinner" class="spinner-grow" role="status" aria-hidden="false">
										<div id="spinner" class="spinner-grow" role="status" aria-hidden="false">
											<div id="spinner" class="spinner-grow" role="status" aria-hidden="false">
												<div id="spinner" class="spinner-grow" role="status"
													aria-hidden="false">
													<div id="spinner" class="spinner-grow" role="status"
														aria-hidden="true"></div>
												</div>
											</div>
										</div>
									</div>
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
.animate {
	transition: all .5s;
}

#spinner {
	align-items: center;
}

.spinner-grow {
	align-items: center;
	padding-left: 25px;
}

.card-title {
	display: block;
	align-items: center;
	color: rgb(255, 255, 255);
	background-color: rgb(255, 102, 0);
	border-radius: 7px;

	text-align: center;
	font-weight: bolder;
}

.card-img-top {
	background: linear-gradient(to right, rgb(0, 0, 0), rgb(255, 255, 255), rgb(0, 0, 0));
	border-radius: 12px;

}

.headerCard {
	background-color: rgb(255, 102, 0);
	border-radius: 12px;
	text-align: center;
	color: white;
	text-transform: uppercase;
	font-weight: bold;
}
</style>