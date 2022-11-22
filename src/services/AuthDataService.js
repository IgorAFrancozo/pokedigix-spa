import http from '../http-commons';

class AuthDataService {

	async criar(usuarios) {
		let resposta = await http.post('/usuarios', usuarios);
		return resposta.data;
	}
}

export default new AuthDataService();