export default class TreinadorRequest {
	constructor() {
		this.nome = null;
		this.idEndereco = null;
		this.idPrimeiroPokemon = null;
	}
	populate(obj) {
		this.nome = obj.nome;
		this.idEndereco = obj.idEndereco;
		this.idPrimeiroPokemon = obj.idPrimeiroPokemon;
	}
	toJson() {
		return {
			nome: this.nome,
			idEndereco: this.idEndereco,
			idPrimeiroPokemon: this.idPrimeiroPokemon
		}
	}
}