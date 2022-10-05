export default class TreinadorRequest {
	constructor() {
		this.nome = null;
		this.endereco = null;
	}
	populate(obj) {
		this.nome = obj.nome;
		this.endereco = obj.endereco;
	}
	toJson() {
		return {
			nome: this.nome,
			endereco: this.endereco,
		}
	}
}