import http from '../http-commons';

class AtaqueDataService {
	async buscarTodos() {
		let resposta = await http.get('/ataques');
		return resposta.data;
	}
	async BuscarPeloId(id) {
		let resposta = await http.get('/ataques/${id}');
		return resposta.data;
	}
	async criar(ataque) {
		let resposta = await http.post('/ataques/', ataque);
		return resposta.data;
	}
	async atualizar(id, ataque) {
		let resposta = await http.put('/ataques/${id}', ataque);
		return resposta.data;
	}
	async removerPeloId(id) {
		await http.delete('/ataques/${id}');
	}
	
}

export default new AtaqueDataService();