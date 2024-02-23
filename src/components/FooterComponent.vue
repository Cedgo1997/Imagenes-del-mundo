<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__content">
                <div class="footer__section">
                    <h2 class="footer__title">Información Importante</h2>
                    <ul class="footer__list">
                        <li class="footer__item"><a href="#" class="footer__link">Términos y Condiciones</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Política de Privacidad</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Contacto</a></li>
                    </ul>
                </div>
                <div class="footer__section">
                    <h2 class="footer__title">Contacto</h2>
                    <p class="footer__info">Dirección: 123 Calle Principal, Ciudad, País</p>
                    <p class="footer__info">Teléfono: +123456789</p>
                    <p class="footer__info">Email: mi@correo.com</p>
                </div>
            </div>
            <div class="footer__copyright">
                <p class="footer__text">&copy; 2024 Mi Empresa. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
</template>
  
<style lang="scss">
.footer {
    width: 100%;
    background-color: #f8f9fad1;
    color: #333;
    padding: 50px 0;
    font-size: 16px;

    &__container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }

    &__content {
        display: flex;
        justify-content: space-between;
    }

    &__section {
        width: 45%;
    }

    &__title {
        font-size: 20px;
        margin-bottom: 15px;
    }

    &__list {
        list-style: none;
        padding: 0;
    }

    &__item {
        margin-bottom: 10px;
    }

    &__link {
        color: #333;
        text-decoration: none;

        &:hover {
            color: #007bff;
        }
    }

    &__info {
        margin-bottom: 10px;
    }

    &__copyright {
        text-align: center;
        margin-top: 30px;
        border-top: 1px solid #ccc;
        padding-top: 20px;
    }

    &__text {
        margin: 0;
    }
}
</style>
  