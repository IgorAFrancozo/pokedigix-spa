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
					<div class=" stl1" id="accordionExample">
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingOne">
								<button class="accordion-button " type="button" data-bs-toggle="collapse"
									data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
									<a class="stlt"><strong>Detalhes  </strong><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg></a>
								</button>
							</h2>
							<div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
								data-bs-parent="#accordionExample">
								<div class="accordion-body stl1">
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
									<div class="detalhes text-center">
										<button type="button" class="btn btn-outline-primary m-1">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
												fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
												<path
													d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
												<path fill-rule="evenodd"
													d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
											</svg>
										</button>
										<button type="button" class="btn btn-outline-danger m-1" data-bs-toggle="modal"
											data-bs-target="#confirmacaoExclusao">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
												fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
												<path
													d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
											</svg>
										</button>
									</div>
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
.stl1{
	background: linear-gradient(to right, rgb(0, 0, 0), rgb(255, 255, 255), rgb(0, 0, 0));
}
.stlt{
	text-align: center;
	color: rgb(255, 128, 43);
	margin: 12px;
	align-items: center;
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

}

.headerCard {
	background-color: rgb(255, 102, 0);
	border-radius: 12px;
	text-align: center;
	color: white;
	text-transform: uppercase;
	font-weight: bold;
}

.detalhes {
	margin-bottom: 12px;
}
</style>