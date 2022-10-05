import http from '../http-commons';

class TreinadorDataService {
	async buscarTodos() {
		let resposta = await http.get('/treinadores');
		return resposta.data;
	}

	async buscarPeloId(id) {
		let resposta = await http.get('/treinadores/' + id);
		return resposta.data;
	}

	async criar(treinador) {
		let resposta = await http.post('/treinadores', treinador);
		return resposta.data;
	}

	async atualizar(id, treinador) {
		let resposta = await http.put('/treinadores/' + id, treinador);
		return resposta.data;
	}

	async remover(id) {
		await http.delete('/treinadores/' + id);
	}

	async removerPeloNome(nome) {
		await http.delete('/treinadores?termo=' + nome);
	}

	async buscarPeloNome(nome) {
		let resposta = await http.get('/treinadores?termo=' + nome);
		return resposta.data;
	}

}

export default new TreinadorDataService();