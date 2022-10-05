<script>
import TipoDataService from '../services/TipoDataService';
import Tipo from '../models/Tipo';
import Loading from "vue-loading-overlay";
export default {
    name: 'tipos-edit',
    data() {
        return {
            isLoading: false,
            tipo: new Tipo(),
            salvo: false
        }
    },
    components: {
        Loading
    },
    methods: {
        salvar() {
            this.isLoading = true;
            TipoDataService.atualizar(this.tipo.id, this.tipo)
            .then(resposta => {
                this.tipo.id = resposta.id;
                this.salvo = true;
                this.isLoading = false;
            })
            .catch(erro => {
                console.log(erro);
                this.salvo = false;
                this.isLoading = false;
            })
        },
        voltar() {
            this.$router.push({name: 'tipos-lista'});
        },
        carregarTipo(id) {
            this.isLoading = true;
            TipoDataService.buscarPeloId(id)
            .then(resposta => {
                this.tipo = resposta;
                this.isLoading = false;
            })
            .catch(erro => {
                console.log(erro);
                this.isLoading = false;
            })
        }
    },
    mounted() {
        this.carregarTipo(this.$route.params.id);
    }
}
</script>

<template>
    <div v-if="!salvo">
        <form>
            <loading
                v-model:active="isLoading"
                is-full-page="false"
            />
            <div class="mb-3">
                <label 
                    for="nome" 
                    class="form-label">Nome do Tipo</label>
                <input 
                    type="text"
                    required 
                    class="form-control" 
                    v-model="tipo.nome"
                    id="nome" >
            </div>
            <button @click.prevent="salvar" class="btn btn-success">Salvar</button>
        </form>
    </div>
    <div v-else>
        <div class="row">
            <h4>Salvo com sucesso!</h4>
            <span>Tipo id: {{tipo.id}}</span>
        </div>
        <div class="row-sm">
            <button @click="voltar" class="btn btn-primary">Voltar</button>
        </div>
    </div>
</template>