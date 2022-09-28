import { createRouter, createWebHistory } from 'vue-router'
import AtaqueEditView from '../views/AtaqueEditView.vue'
import AtaqueListaView from '../views/AtaqueListaView.vue'
import AtaqueNovoView from '../views/AtaqueNovoView.vue'
import PokemonListaView from '../views/PokemonListaView.vue'
import TipoListaView from '../views/TipoListaView.vue'
import TipoNovoView from '../views/TipoNovoView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: PokemonListaView
		},
		{
			path: '/tipos/novo',
			name: 'tipos-novo',
			component: TipoNovoView
		},
		{
			path: '/pokemons/lista',
			name: 'pokemons-lista',
			component: PokemonListaView
		},
		{
			path: '/tipos/lista',
			name: 'tipo-lista',
			component: TipoListaView
		},
		{
			path: '/ataques/novo',
			name: 'ataques-novo',
			component: AtaqueNovoView
		},
		{
			path: '/ataques/edit/:id',
			name: 'ataques-edit',
			component: AtaqueEditView
		},
		{
			path: '/ataques/lista',
			name: 'ataques-lista',
			component: AtaqueListaView
		},

	]
})

export default router
