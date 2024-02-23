<template>
    <header class="navbar">
        <div class="container">
            <router-link to="/" class="navbar__logo"> Imágenes del
                mundo</router-link>
            <nav class="navbar__nav">
                <router-link to="/search" class="navbar__link">Buscar Imágenes</router-link>
                <router-link to="/" class="navbar__link">Inicio</router-link>
            </nav>
        </div>
    </header>
</template>
  
<style lang="scss">
.navbar {
    background-color: #7EB2EDff;
    color: #fff;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar__logo {
    font-size: 24px;
    color: #fff;
    text-decoration: none;
}

.navbar__nav {
    display: flex;
}

.navbar__link {
    margin-left: 20px;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
}

.navbar__link:hover {
    color: #f0f0f0;
}
</style>
  