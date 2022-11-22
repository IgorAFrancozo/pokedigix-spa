<script>
import AtaqueDataService from '../services/AtaqueDataService';
import AtaqueRequest from '../models/AtaqueRequest';
import AtaqueResponse from '../models/AtaqueResponse';
import TipoDataService from '../services/TipoDataService';
import MensagemSucesso from '../components/MensagemSucesso.vue';
import MensagemErro from '../components/MensagemErro.vue';
import MensagemErroDTO from '../models/MensagemErroDTO';
import { Toast } from "bootstrap";

export default {
	name: 'ataques-novo',
	data() {
		return {
			ataqueRequest: new AtaqueRequest(),
			ataqueResponse: new AtaqueResponse(),
			salvo: false,
			categorias: [
				{
					indice: 1,
					nome: "Fisico",
					nomeBanco: "FISICO"
				},
				{
					indice: 2,
					nome: "Especial",
					nomeBanco: "ESPECIAL"
				},
				{
					indice: 3,
					nome: "Efeito",
					nomeBanco: "EFEITO"
				}
			],
			tipos: [],
			desabilitarForca: false,
			MensagemErroDTO: new MensagemErroDTO()
		};
	},
	components: { MensagemSucesso, MensagemErro },
	methods: {
		salvar() {
			AtaqueDataService.criar(this.ataqueRequest)
				.then(resposta => {
					this.ataqueResponse = resposta;
					this.salvo = true;
				})
				.catch(erro => {
					this.mensagemErroDTO.tipo = erro.response.data.type;
					this.mensagemErroDTO.status = erro.response.data.status;
					const campoAcuracia = document.getElementById("acuracia");
					const campoForca = document.getElementById("forca");
					campoAcuracia.setCustomValidity("");
					campoForca.setCustomValidity("");
					if (this.mensagemErroDTO.tipo == "DataIntegrityViolationException") {
						this.mensagemErroDTO.mensagemDeErro = "Preencha todos os campos obrigatorios."
					} else if (this.mensagemErroDTO.tipo == "AcuraciaInvalidaException") {
						this.mensagemErroDTO.mensagemDeErro = erro.response.data.errors[0];
						campoAcuracia.setCustomValidity(this.mensagemErroDTO.mensagemDeErro)
					} else if (this.mensagemErroDTO.tipo == "ForcaInvalidaParaCategoriaException") {
						this.mensagemErroDTO.mensagemDeErro = erro.response.data.errors[0];
						campoForca.setCustomValidity(this.mensagemErroDTO.mensagemDeErro)
					}
					const toastLiveExample = document.getElementById("liveToast");
					const toast = new Toast(toastLiveExample);
					toast.show();
					this.salvo = false;
				});
		},
		novo() {
			this.salvo = false;
			this.desabilitarForca = false;
			this.ataqueRequest = new AtaqueRequest();
			this.ataqueRequest.categoria = this.categorias[1].nomeBanco;
			this.ataqueResponse = new AtaqueResponse();
		},
		carregarTipos() {
			TipoDataService.buscarTodos()
				.then(resposta => {
					this.tipos = resposta;
					this.ataqueRequest.tipoId = this.tipos[0].id
				})
				.catch(erro => {
					console.log(erro);
				});
		},
		escolherCategoria() {
			if (this.ataqueRequest.categoria == "EFEITO") {
				this.desabilitarForca = true;
			} else {
				this.desabilitarForca = false;
			}
		}
	},
	mounted() {
		this.carregarTipos();
		this.novo();
	},
}
</script>

<template>
	<div v-if="!salvo">
		<form class="cgi row g-3" @submit.prevent="salvar">
			<div class="col-12">
				<label for="nome" class="form-label">Nome do Ataque</label>
				<input type="text" placeholder="ex: Ataque do Trovao" required class="form-control"
					v-model="ataqueRequest.nome" id="nome">
			</div>
			<div class="col-6">
				<label for="forca" class="form-label">Forca</label>
				<div class="has-validation">
					<input type="text" required :disabled="desabilitarForca" class="form-control"
						v-model="ataqueRequest.forca" id="forca">
				</div>
			</div>
			<div class="col-6">
				<label for="acuracia" class="form-label">Acuracia</label>
				<input type="text" required class="form-control" v-model="ataqueRequest.acuracia" id="acuracia">
			</div>
			<div class="col-3">
				<label for="pp" class="form-label">PP</label>
				<input type="number" required class="form-control" v-model="ataqueRequest.pontosDePoder" id="pp">
			</div>
			<div class="col-9">
				<label for="categoria" class="form-label">Categoria</label>
				<select id="categoria" @change="escolherCategoria" class="form-select"
					v-model="ataqueRequest.categoria">
					<option v-for="categoria in categorias" :key="categoria.indice" :value="categoria.nomeBanco">
						{{ categoria.nome }}
					</option>
				</select>
			</div>
			<div class="col-12">
				<label for="tipo" class="form-label">Tipo do Ataque</label>
				<select id="tipo" class="form-select" v-model="ataqueRequest.tipoId">
					<option v-for="tipo in tipos" :key="tipo.id" :value="tipo.id">
						{{ tipo.nome }}
					</option>
				</select>
			</div>
			<div class="col-12">
				<label for="descricao" class="form-label">Descricao</label>
				<textarea class="form-control" id="descricao" rows="2" required placeholder="ex: Esse ataque machuca"
					v-model="ataqueRequest.descricao"></textarea>
			</div>
			<button type="submit" class="btn btn-success">Salvar</button>
		</form>
		<MensagemErro v-if="mensagemErroDTO.tipo == 'DataIntegrityViolationException'"
			:mensagemErroDTO="mensagemErroDTO"></MensagemErro>
	</div>
	<div v-else>
		<MensagemSucesso urlListagem="ataques-lista" @cadastro="novo">
			<span>O Ataque <strong>{{ ataqueResponse.nome }}</strong> foi cadastrado com sucesso!</span>
		</MensagemSucesso>
	</div>
</template>