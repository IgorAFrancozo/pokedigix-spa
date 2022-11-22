export default class MensagemErroDTO {
    constructor() {
        this.mensagemDeErro = null;
        this.tipo = null;
        this.status = null;
    }

    populate(obj) {
        this.mensagemDeErro = obj.mensagemDeErro;
        this.tipo = obj.tipo;
        this.status = obj.status;
    }

    toJson() {
        return {
            mensagemDeErro: this.mensagemDeErro,
            tipo: this.tipo,
            status: this.status
        }
    }
}