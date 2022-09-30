export default class Tipo {
    constructor() {
        this.id = null;
        this.nome = null;
    }

    populate(obj) {
        this.id = obj.id;
        this.nome = obj.nome;
    }

    toJson() {
        return {
            id: this.id,
            nome: this.nome
        }
    }
}