import http from '../http-commons';

class TipoDataService {
	async buscarTodos() {
		let resposta = await http.get('/tipos');
		return resposta.data;
	}
	async BuscarPeloId(id) {
		let resposta = await http.get('/tipos/${id}');
		return resposta.data;
	}
	async criar(tipo) {
		let resposta = await http.post('/tipos/', tipo);
		return resposta.data;
	}
	async atualizar(id, tipo) {
		let resposta = await http.put('/tipos/${id}', tipo);
		return resposta.data;
	}
	async removerPeloId(id) {
		await http.delete('/tipos/${id}');
	}
	async removerPeloNome(nome) {
		await http.delete('/tipos?termo=${nome}');
	}
	async BuscarPeloNome(nome) {
		let resposta = await http.get('/tipos/${id}', tipo);
		return resposta.data;
	}
}

export default new TipoDataService();