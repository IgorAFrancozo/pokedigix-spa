<script>
import { RouterLink } from 'vue-router';
import { useCookies } from 'vue3-cookies';

const { cookies } = useCookies();
export default {
	data() {
		return {
			nomeTreinador: "",
		}
	},
	mounted() {
		this.nomeTreinador = cookies.get('treinador_nome');
	}

}
</script>

<template>
	<header>
		<nav class="sticky-top navbar navbar-dark navbar-expand-lg bg-dark">
			<div class="container-md">
				<img src='../../public/icone/android-chrome-192x192.png' width="120" height="120" />
				<a class="pokedigix navbar-brand m-3" href="#">Pokedigix</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
					aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<RouterLink to="/" class="nav-link active" aria-current="page">Home</RouterLink>
						</li>
						<li class="nav-item">
							<RouterLink to="/pokemons-selvagens" class="nav-link">Pokemons Selvagens</RouterLink>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
								aria-expanded="false">
								Ataques
							</a>
							<ul class="dropdown-menu">
								<li>
									<RouterLink class="dropdown-item" to="/ataques/novo">Novo</RouterLink>
								</li>
								<li>
									<RouterLink class="dropdown-item" to="/ataques/lista">Lista</RouterLink>
								</li>
							</ul>
						</li>

						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
								aria-expanded="false">
								Tipos
							</a>
							<ul class="dropdown-menu">
								<li>
									<RouterLink class="dropdown-item" to="/tipos/novo">Novo</RouterLink>
								</li>
								<li>
									<RouterLink class="dropdown-item" to="/tipos/lista">Lista</RouterLink>
								</li>
							</ul>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
								aria-expanded="false">
								Pokemons
							</a>
							<ul class="dropdown-menu">
								<li>
									<RouterLink class="dropdown-item" to="/pokemons/novo">Novo</RouterLink>
								</li>
								<li>
									<RouterLink class="dropdown-item" to="/pokemons/lista">Lista</RouterLink>
								</li>
							</ul>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
								aria-expanded="false">
								Treinador
							</a>
							<ul class="dropdown-menu">
								<li>
									<RouterLink class="dropdown-item" to="/treinadores/novo">Novo</RouterLink>
								</li>
								<li>
									<RouterLink class="dropdown-item" to="/treinadores/lista">Lista</RouterLink>
								</li>

							</ul>
						</li>
						<div class="sep">
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle mt-2" role="button" data-bs-toggle="dropdown"
									aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
										fill="currentColor" class="bi bi-person-badge" viewBox="0 0 16 16">
										<path
											d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
										<path
											d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" />
									</svg>
									{{ nomeTreinador }}
								</a>
								<ul class="dropdown-menu">
									<li>
										<RouterLink class="dropdown-item" to="/treinadores/lista">Trocar
											Treinador
										</RouterLink>
									</li>
								</ul>
							</li>
						</div>
						<div>
						</div>
					</ul>
				</div>
				<RouterLink class="btn btn-dark ms-2 me-2" to="/usuarios/login">Entrar</RouterLink>
				<RouterLink class="btn btn-dark ms-2 me-2" to="/usuarios/novo">Cadastrar</RouterLink>
			</div>
		</nav>
	</header>
</template>
<style>
.pokedigix {
	font-size: 250%;
	padding-left: 12px;
	padding-right: 120px;
	font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.sep {
	font-weight: bolder;
	margin-left: 52px;
	margin-right: 52px;
	background-color: rgb(255, 99, 0);
	border-radius: 10px;
	padding-left: 10px;
	padding-right: 10px;
}
</style>