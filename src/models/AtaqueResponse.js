export default class AtaqueResponse {
    constructor() {
        this.id = null;
        this.nome = null;
        this.forca = 0;
        this.acuracia = 0;
        this.pontosDePoder = 0;
        this.categoria = null;
        this.descricao = null;
        this.tipoId = null;
    }

    populate(obj) {
        this.id = obj.id;
        this.nome = obj.nome;
        this.forca = obj.forca;
        this.acuracia = obj.acuracia;
        this.pontosDePoder = obj.pontosDePoder;
        this.categoria = obj.categoria;
        this.descricao = obj.descricao;
        this.tipoId = obj.tipoId;
    }

    toJson() {
        return {
            id: this.id,
            nome: this.nome,
            forca: this.forca,
            acuracia: this.acuracia,
            pontosDePoder: this.pontosDePoder,
            categoria: this.categoria,
            descricao: this.descricao,
            tipoId: this.tipoId
        }
    }
}