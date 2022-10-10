import http from '../http-commons';

class EnderecoDataService {
	async buscarTodos() {
		let resposta = await http.get('/enderecos');
		return resposta.data;
	}

	async buscarPeloId(id) {
		let resposta = await http.get('/enderecos/' + id);
		return resposta.data;
	}

	async criar(endereco) {
		let resposta = await http.post('/enderecos', endereco);
		return resposta.data;
	}

	async atualizar(id, endereco) {
		let resposta = await http.put('/enderecos/' + id, endereco);
		return resposta.data;
	}

	async remover(id) {
		await http.delete('/enderecos/' + id);
	}

	async removerPeloNome(nome) {
		await http.delete('/enderecos?termo=' + nome);
	}

	async buscarPeloNome(nome) {
		let resposta = await http.get('/enderecos?termo=' + nome);
		return resposta.data;
	}

}

export default new EnderecoDataService();