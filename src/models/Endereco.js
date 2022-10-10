export default class Endereco {
	constructor() {
		this.id = null;
		this.regiao = null;
		this.cidade = null;
	}

	populate(obj) {
		this.id = obj.id;
		this.regiao = obj.regiao;
		this.cidade = obj.cidade;
	}

	toJson() {
		return {
			id: this.id,
			regiao: this.regiao,
			cidade: this.cidade
		};
	}
}