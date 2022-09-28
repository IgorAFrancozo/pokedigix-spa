import http from '../http-commons';

class PokemonDataService {
	async buscarTodos() {
		let resposta = await http.get('/pokemons');
		return resposta.data;
	}
	async BuscarPeloId(id) {
		let resposta = await http.get('/pokemons/' + id);
		return resposta.data;
	}
	async criar(pokemon) {
		let resposta = await http.post('/pokemons', pokemon);
		return resposta.data;
	}
	async atualizar(id, pokemon) {
		let resposta = await http.put('/pokemons/' + id, pokemon);
		return resposta.data;
	}
	async remover(id) {
		await http.delete('/pokemons/' + id);
	}
	async remover(nome) {
		await http.delete('/pokemons?termo=' + nome);
	}
	async BuscarPeloNome(nome) {
		let resposta = await http.get('/pokemons?termo=' + nome, pokemon);
		return resposta.data;
	}
	async BuscarPeloIdDoTipo(id) {
		let resposta = await http.get('/pokemons/tipos/' + id, pokemon);
		return resposta.data;
	}
}

export default new PokemonDataService();