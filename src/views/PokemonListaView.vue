<script>
import PokemonDataService from "../services/PokemonDataService";
export default {
	name: "lista-pokemons",
	data() {
		return { pokemons: [] };
	},
	methods: {
		buscarPokemons() {
			PokemonDataService.buscarTodos()
				.then((resposta) => {
					this.pokemons = resposta;
				})
				.catch((erro) => {
					console.log(erro);
				});
		},
	},
	mounted() {
		this.buscarPokemons();
	},
};
</script>
	
<template>
	<main>
		<div>
			<h2>Lista de Pokemon</h2>
			<div class="row">
				<div class="col-6" v-for="pokemon in pokemons" :key="pokemon.id">
					<div class="card mb-3">
						<div class="card-header">
							<div class="row">
								<div class="col-sm-6">
									<p class="card-text text-start">
										<strong>{{ pokemon.nome }}</strong>
									</p>
								</div>
								<div class="col-sm-6 text-end">
									<p class="card-text">Lv. {{ pokemon.nivel }}</p>
								</div>
							</div>
						</div>
						<div class="row g-0">
							<div class="col-md-3 text-center align-items-center">
								<img :alt="'Imagem do ' + pokemon.nome" :title="pokemon.nome" class="card-img" :src="
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/' +
						pokemon.numeroPokedex +
						'.png'
					  " />
							</div>
							<div class="col-md-9">
								<div class="card-body">
									<p class="card-text">
									<div class="row">
										<div v-for="tipo in pokemon.tipos" :key="tipo.id" class="col-6">
											<div class="card">
												<div class="card-body text-center p-1"
													:style="{backgroundColor: tipo.cor}">
													{{tipo.nome}}
												</div>
											</div>
										</div>
									</div>
									</p>
									<p class="card-text">
										Genero:
										<svg v-if="pokemon.genero == 'FEMININO'" xmlns="http://www.w3.org/2000/svg"
											width="16" height="16" fill="currentColor" class="bi bi-gender-female"
											viewBox="0 0 16 16">
											<path fill-rule="evenodd"
												d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z" />
										</svg>
										<svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16"
											fill="currentColor" class="bi bi-gender-male" viewBox="0 0 16 16">
											<path fill-rule="evenodd"
												d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
										</svg>
									</p>
									<div class="collapse" :id="'collapseExample' + pokemon.id">
										<div class="card card-body">
											<p class="card-text">Pokedex: {{ pokemon.numeroPokedex }}</p>
											<p class="card-text">Pokedex: {{ pokemon.peso }}</p>
											<p class="card-text">Pokedex: {{ pokemon.altura }}</p>
											<p class="card-text">Pokedex: {{ pokemon.felicidade }}</p>
										</div>
									</div>

									<div class="text-center">
										<button type="button" data-bs-toggle="collapse"
											class="btn btn-outline-primary pt-1 m-1"
											:href="'#collapseExample' + pokemon.id">
											Mais
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
												fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
												<path fill-rule="evenodd"
													d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
											</svg>
										</button>
										<button type="button" class="btn btn-outline-warning m-1">
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
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-1">
					<button @click="novo" class="btn btn-primary">Novo</button>
				</div>
			</div>
		</div>
	</main>
</template>