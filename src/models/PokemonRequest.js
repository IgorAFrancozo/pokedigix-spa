export default class PokemonRequest {
	constructor() {
		this.nome = null;
		this.altura = null;
		this.peso = null;
		this.genero = null;
		this.nivel = null;
		this.numeroPokedex = null;
		this.felicidade = null;
		this.tiposIds = [];
		this.ataquesIds = [];
	}
	populate(obj) {
		this.nome = obj.nome;
		this.altura = obj.altura;
		this.peso = obj.peso;
		this.genero = obj.genero;
		this.nivel = obj.nivel;
		this.numeroPokedex = obj.numeroPokedex;
		this.felicidade = obj.felicidade;
		this.tiposIds = obj.tiposIds;
		this.ataquesIds = obj.ataquesIds;
	}
	toJson() {
		return {
			nome: this.nome,
			altura: this.altura,
			peso: this.peso,
			genero: this.genero,
			nivel: this.nivel,
			numeroPokedex: this.numeroPokedex,
			felicidade: this.felicidade,
			tiposIds: this.tiposIds,
			ataquesIds: this.ataquesIds
		}
	}
}