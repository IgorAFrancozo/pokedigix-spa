<script>
import TreinadorRequest from "../models/TreinadorRequest";
import PokemonDataService from "../services/PokemonDataService";
import TreinadorDataService from "../services/TreinadorDataService";
import EnderecoDataService from "../services/EnderecoDataService";
import Endereco from '../models/Endereco';
import MensagemSucessoVue from "../components/MensagemSucesso.vue";

export default {
	name: "treinadores-novo",
	data() {
		return {
			treinadorRequest: new TreinadorRequest(),
			treinadorResponse: {},
			endereco: new Endereco(),
			salvo: false,
			pokemons: [],
			enderecos: [],
		};
	},
	components: {
		MensagemSucessoVue
	},
	methods: {
		carregarPokemons() {
			PokemonDataService.buscarTodos()
				.then((resposta) => {
					this.pokemons = resposta;
				})
				.catch((erro) => {
					console.log(erro);
				});
		},
		carregarEnderecos() {
			EnderecoDataService.buscarTodos()
				.then((resposta) => {
					this.enderecos = resposta;
				})
				.catch((erro) => {
					console.log(erro);
				});
		},
		salvarEndereco() {
			EnderecoDataService.criar(this.endereco)
				.then(() => {
					this.enderecos.push(this.endereco);
					this.endereco = new Endereco();
				})
				.catch(erro => {
					console.log(erro);
				});
		},
		cancelar() {
			this.endereco = new Endereco();
		},
		salvar() {
			TreinadorDataService.criar(this.treinadorRequest)
				.then(resposta => {
					this.treinadorResponse = resposta;
					this.salvo = true;
				})
				.catch(erro => {
					this.salvo = false;
					console.log(erro);
				})
		},
		novo() {
			this.salvo = false;
			this.treinadorRequest = new TreinadorRequest();
		},
	},
	mounted() {
		this.carregarPokemons();
		this.carregarEnderecos();
	},
};
</script>
	
<template>
	<div v-if="!salvo">
		<form>
			<div class="mb-3">
				<label for="nome" class="form-label cgi">Nome do treinador</label>
				<input type="text" required class="form-control" v-model="treinadorRequest.nome" id="nome" />
			</div>
			<label for="pokemon" class="form-label cgi">Pokemon inicial</label>
			<select id="pokemon" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
				v-model="treinadorRequest.idPrimeiroPokemon">
				<option v-for="pokemon in pokemons" :key="pokemon.id" :value="pokemon.id">
					{{ pokemon.nome }} | {{ pokemon.nivel }}
				</option>
			</select>
			<div class="row">
				<div class="col-4 mb-2" v-for="endereco in enderecos" :key="endereco.id">
					<div class="card">
						<div class="card-body">
							<p class="card-text">Cidade: {{endereco.cidade}}</p>
							<p class="card-text">Regiao: {{endereco.regiao}}</p>
						</div>
						<div class="card-footer text-center">
							<input type="radio" :value="endereco.id" class="form-check-input" name="radioEndereco"
								v-model="treinadorRequest.idEndereco" />
						</div>
					</div>
				</div>
				<div class="col-4 mb-2">
					<div class="card h-100 text-center">
						<button type="button" data-bs-toggle="modal" data-bs-target="#enderecoModal"
							class="btn btn-outline-primary h-100 w-100">
							<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
								class="bi bi-plus-lg" viewBox="0 0 16 16">
								<path fill-rule="evenodd"
									d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
							</svg>
						</button>
					</div>
				</div>
			</div>
			<button @click.prevent="salvar" class="btn btn-dark cgi p-3">Salvar</button>
		</form>
		<div class="modal fade" id="enderecoModal" tabindex="-1" aria-labelledby="enderecoModalLabel"
			aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="enderecoModalLabel">Cadastro de Endereco</h1>
						<button type="button" @click="cancelar" class="btn-close" data-bs-dismiss="modal"
							aria-label="Close"></button>
					</div>
					<form>
						<div class="modal-body">
							<label for="cidade" class="form-label">Cidade</label>
							<input type="text" required class="form-control" v-model="endereco.cidade" id="cidade" />
							<label for="regiao" class="form-label">Regiao</label>
							<input type="text" required class="form-control" v-model="endereco.regiao" id="regiao" />
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary cgi" @click.prevent="cancelar"
								data-bs-dismiss="modal">Cancelar</button>
							<button type="button" class="btn btn-primary cgi" @click.prevent="salvarEndereco"
								data-bs-dismiss="modal">Salvar</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	<div v-else>
		<MensagemSucessoVue urlListagem="treinadores-lista" @cadastro="novo">
			<span>
				O treinador <strong>{{ treinadorRequest.nome }}</strong> foi salvo com sucesso!
			</span>
		</MensagemSucessoVue>

	</div>
</template>