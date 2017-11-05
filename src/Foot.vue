<template>

    <footer>
        <div class="container-foot">
            <div class="footer-one">
                <div class="container-contacts">
                    <p class="contacts-title">Síguenos y conoces más</p>
                    <div>
                        <div class="img-contacts">
                            <img src="./assets/img/footer/twitter-icon.png" alt="room-twitter-icon">
                            <img src="./assets/img/footer/instagram-icon.png" alt="room-instagram-icon">
                            <img src="./assets/img/footer/facebook-icon.png" alt="room-facebook-icon">
                        </div>
                        <span>Contacto</span>
                        <p class="contacts-email">theroomcontatct@theroom.net.ve</p>
                    </div>
                </div>
                <div class="container-session">
                    <span>Secciones</span>
                    <a href="#">Podcast</a>
                    <a href="#">Programación</a>
                    <a href="#">THE ROOM RATED</a>
                </div>
            </div>

            <div class="footer-two">
                <p>2017 theroom.net.ve Todos los derechos reservados</p>
                <img src="./assets/img/footer/room-foot.png" alt="room-logo">
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'foot'
    }
</script>

<style lang="scss">

    footer {
        cursor: default;
        background: black;
        padding: 20px 30px 20px 30px;
        width: 100%;
        .container-foot {
            max-width: 1028px;
            margin: 0 auto;
            .footer-one {
                display: flex;
                .container-contacts {
                    flex: 1;
                    p {
                        display: block;
                        margin: 0.5% 0;
                    }
                    div.img-contacts {
                        margin: 2.5% 0 3.5% 0;
                        img {
                            margin: 0 1% 0 0;
                        }
                    }
                    span {
                        display: block;
                        color: gray;
                        font-size: 0.8rem;
                    }
                    p.contacts-email {
                        font-size: 0.8rem;
                        font-weight: bold;
                    }
                }
                .container-session {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    span {
                        color: gray;
                    }
                    > span, a {
                        margin-bottom: 0.2%;
                    }
                }
            }
            .footer-two {
                display: flex;
                margin-top: 2%;
                justify-content: space-between;
                padding-top: 10px;
                border-top: 1px solid rgba(90, 90, 90, 0.73);
                p {
                    align-self: flex-end;
                    color: gray;
                    font-size: 0.8rem;
                }
            }
        }
    }

</style>