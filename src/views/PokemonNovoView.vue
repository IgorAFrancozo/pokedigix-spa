<script>
import PokemonDataService from '../services/PokemonDataService';
import TipoDataService from '../services/TipoDataService';
import PokemonRequest from '../models/PokemonRequest';
import AtaqueDataService from '../services/AtaqueDataService';
import MensagemSucessoVue from '../components/MensagemSucesso.vue';

export default {
	name: 'pokemons-novo',
	data() {
		return {
			pokemonRequest: new PokemonRequest(),
			tipos: [], salvo: false, ataques: [], ataquesSelecionados: [], ataqueSelecionado: {},
		}
	},
	components: {
		MensagemSucessoVue,
	},
	methods: {
		carregarTipos() {
			TipoDataService.buscarTodos()
				.then(resposta => {
					this.tipos = resposta;
				})
				.catch(erro => {
					console.log(erro);
				});
		},
		carregarAtaques() {
			AtaqueDataService.buscarTodos()
				.then(resposta => {
					this.ataques = resposta;
				})
				.catch(erro => {
					console.log(erro);
				});
		},
		salvar() {
			const listaFiltradaTipos = this.pokemonRequest.tiposIds.filter(tipo => tipo != "");
			this.pokemonRequest.tiposIds = [... new Set(listaFiltradaTipos)]

			this.pokemonRequest.ataquesIds = this.ataquesSelecionados.map(ataque => ataque.id);

			PokemonDataService.criar(this.pokemonRequest)
				.then(() => {
					this.salvo = true;
				})
				.catch(erro => {
					console.log();
					this.salvo = false;
				})
		},
		novo() {
			this.pokemonRequest = new PokemonRequest();
			this.salvo = false;
		},
		selecionarAtaque() {
			if (this.ataquesSelecionados.length < 4)
				this.ataquesSelecionados.push(this.ataqueSelecionado);
			this.ataquesSelecionados = [... new Set(this.ataquesSelecionados)];
		},
		removerAtaque(indice) {
			this.ataquesSelecionados.splice(indice, 1);
		},
		selecionarTipo(id) {
		}
	},
	mounted() {
		this.carregarTipos();
		this.carregarAtaques();
	}
}
</script>

<template>
	<div v-if="!salvo">
		<div class="container">
			<h4 class="cgi"><strong>Novo Pokemon</strong></h4>
			<div class="row justify-content-md-center" v-if="pokemonRequest.numeroPokedex > 0">
				<div class="col col-sm-2">
					<div class="card">

						<img :alt="'Imagem do Pokemon' + pokemonRequest.nome" :title="pokemonRequest.nome"
							class="card-img" :src="
							  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/' +
							  pokemonRequest.numeroPokedex +
							  '.png'
							" />
					</div>
				</div>
			</div>
			<form>
				<div class="row">
					<div class="col-8">
						<label for="nome" class="form-label cgi"><strong>Nome</strong></label>
						<input v-model="pokemonRequest.nome" id="nome" type="text" class="form-control"
							placeholder="Nome do Pokemon" required>
					</div>
					<div class="col-4">
						<label for="numero" class="form-label cgi"><strong>Número da Pokedex</strong></label>
						<input v-model="pokemonRequest.numeroPokedex" id="numero" type="text" class="form-control"
							placeholder="Número da Pokedex" required>
					</div>
				</div>
				<div class="row">
					<div class="col-4">
						<label for="altura" class="form-label cgi mt-2"><strong>Altura</strong></label>
						<input v-model="pokemonRequest.altura" id="altura" type="number" class="form-control"
							placeholder="Altura" required>
					</div>
					<div class="col-4">
						<label for="peso" class="form-label cgi mt-2"><strong>Peso</strong></label>
						<input v-model="pokemonRequest.peso" id="peso" type="number" class="form-control"
							placeholder="Peso" required>
					</div>
					<div class="col-4">
						<label for="felicidade" class="form-label cgi mt-2"><strong>Felicidade</strong></label>
						<input v-model="pokemonRequest.felicidade" id="felicidade" type="number" class="form-control"
							placeholder="Felicidade" required>
					</div>
				</div>
				<div class="row">
					<div class="col-7">
						<label for="nivel" class="form-label cgi mt-2"><strong>Nível</strong></label>
						<input v-model="pokemonRequest.nivel" id="nivel" type="number" class="form-control"
							placeholder="Nível" required>
					</div>
					<div class="col-5 cgi">
						<label for="nivel" class="form-label cgi mt-5 m-4"><strong>Genero: </strong></label>
						<div class="form-check form-check-inline">
							<input class="form-check-input" v-model="pokemonRequest.genero" type="radio" name="genero"
								id="masculino" value="MASCULINO">
							<label class="form-check-label" for="inlineRadio1">Masculino <svg
									xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
									class="bi bi-gender-male" viewBox="0 0 16 16">
									<path fill-rule="evenodd"
										d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
								</svg></label>
						</div>
						<div class="form-check form-check-inline">
							<input class="form-check-input" v-model="pokemonRequest.genero" type="radio" name="genero"
								id="feminino" value="FEMININO">
							<label class="form-check-label" for="inlineRadio2">Feminino <svg
									xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
									class="bi bi-gender-female" viewBox="0 0 16 16">
									<path fill-rule="evenodd"
										d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z" />
								</svg></label>
						</div>
						<div class="form-check form-check-inline">
							<input class="form-check-input" v-model="pokemonRequest.genero" type="radio" name="genero"
								id="indefinido" value="INDEFINIDO">
							<label class="form-check-label" for="inlineRadio3">Indefinido <svg
									xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
									class="bi bi-question-lg" viewBox="0 0 16 16">
									<path fill-rule="evenodd"
										d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14Z" />
								</svg></label>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-12">
						<label for="tipo1" class="form-label cgi mt-2"><strong>Tipo 1</strong></label>
						<select id="tipo1" class="form-select" v-model="pokemonRequest.tiposIds[0]">
							<option v-for="tipo in tipos" :key="tipo.id" :value="tipo.id">
								{{tipo.nome}}
							</option>
						</select>
					</div>
				</div>
				<div class="row">
					<div class="col-12">
						<label for="tipo2" class="form-label cgi mt-2"><strong>Tipo 2</strong></label>
						<select id="tipo2" class="form-select" v-model="pokemonRequest.tiposIds[1]">
							<option value="" selected>Nenhum</option>
							<option v-for="tipo in tipos" :key="tipo.id" :value="tipo.id">
								{{tipo.nome}}
							</option>
						</select>
					</div>
				</div>
				<div>
					<label for="ataque1" class="form-label cgi m-2"><strong>Ataques</strong></label>
					<select id="ataque1" class="form-select" v-model="ataqueSelecionado" @change="selecionarAtaque">
						<option v-for="(ataque, indice) in ataques" :key="ataque.id" :value="ataque">
							{{ataque.nome}}
						</option>
					</select>
				</div>
				<div class="row">
					<div class="col-3 m-3" v-for="ataque in ataquesSelecionados" :key="ataque.id">
						<div class="container card">
							<div class="card-header row bg-dark text-white h-100">
								<div class="mt-1 col-9"><strong>{{ataque.nome}}</strong></div>
								<div class="col-2"><button type="button" class="btn btn-danger"
										@click.prevemt="removerAtaque(indice)"><svg xmlns="http://www.w3.org/2000/svg"
											width="16" height="16" fill="currentColor" class="bi bi-trash-fill"
											viewBox="0 0 16 16">
											<path
												d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
										</svg></button></div>


							</div>
							<div class="card-body">
								Força: {{ataque.forca}}
							</div>
							<div class="card-body">
								Tipo: {{ataque.tipo.nome}}
							</div>
							<div class="card-body">
								Acurácia: {{ataque.acuracia}}
							</div>
							<div class="card-body">
								Poder: {{ataque.pontosDePoder}}
							</div>
							<div class="card-body">
								Categoria: {{ataque.categoria}}
							</div>
						</div>
					</div>
				</div>
				<div class="row button2">
					<button @click.prevent="salvar" class="btn btn-dark mt-3 mb-4">Salvar</button>
				</div>
			</form>
		</div>
	</div>
	<div v-else>
		<MensagemSucessoVue urlListagem="pokemons-lista" @cadastro="novo">
			<span>O Pokemon <strong>{{pokemonRequest.nome}}</strong> foi cadastrado com sucesso!</span>
		</MensagemSucessoVue>
	</div>
</template>
<style>
.cgi {
	color: white;
}

.cgit {
	color: rgb(255, 102, 0);
}
</style>