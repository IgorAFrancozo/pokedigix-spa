<script setup>
import { RouterLink } from 'vue-router';
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
					</ul>
				</div>
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
</style>