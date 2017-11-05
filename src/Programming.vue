<template>
    <main>
        <div class="title"><h1>Programación</h1></div>
        <div class="container-programming">
            <div class="container-week">
                <h3>Esta semana en THE ROOOM</h3>
                <ul class="week-date">
                    <li>Hora</li>
                    <li>
                        <roter-link :to="{name: 'day', params: {id: 16}}">
                            Lun
                        </roter-link>
                    </li>
                    <li>
                        <roter-link :to="{name: 'day', params: {id: 16}}">
                            Mar
                        </roter-link>
                    </li>
                    <li>
                        <roter-link :to="{name: 'day', params: {id: 16}}">
                            Mié
                        </roter-link>
                    </li>
                    <li>
                        <roter-link :to="{name: 'day', params: {id: 16}}">
                            Jue
                        </roter-link>
                    </li>
                    <li class="selected-day">
                        <roter-link :to="{name: 'day', params: {id: 16}}">
                            Vie
                        </roter-link>
                    </li>
                    <li>
                        <roter-link :to="{name: 'day', params: {id: 16}}">
                            Sáb
                        </roter-link>
                    </li>
                    <li>
                        <roter-link :to="{name: 'day', params: {id: 16}}">
                            Dom
                        </roter-link>
                    </li>
                </ul>
                <progday></progday>
                <router-view></router-view>
            </div>
            <div class="container-nav-one">
                <div class="container-semana">
                    <img src="./assets/img/programming/FooAlbum.png" alt="img-destacados">
                    <div class="semana-info">
                        <ul>
                            <h4>Próxima Semana</h4>
                            <li><h5>Infected Rain</h5>
                                <p>88</p></li>
                            <li><h5>Infected Rain</h5>
                                <p>88</p></li>
                            <li><h5>Infected Rain</h5>
                                <p>88</p></li>
                        </ul>
                    </div>
                </div>
                <div class="container-destacados">
                    <h3>Destacados</h3>
                    <div class="destacados-info-parent">
                        <img src="./assets/img/programming/countdown-thisweek.png" alt="img-programming">
                        <div class="destacados-info-child">
                            <div class="child">
                                <p>Esta semana Nº1</p>
                                <h4>Última hora de programa en vivo</h4>
                            </div>
                            <div class="container-room-link">
                                <a href="#">Escúchala ahora
                                    <img src="./assets/img/home/link-plus.png" alt="room-link-icon">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="destacados-info-parent">
                        <img src="./assets/img/programming/countdown-thisweek.png" alt="img-programming">
                        <div class="destacados-info-child">
                            <p>Esta semana Nº1</p>
                            <h4>Última hora de programa en vivo</h4>
                            <div class="container-room-link">
                                <a href="#">Escúchala ahora
                                    <img src="./assets/img/home/link-plus.png" alt="room-link-icon">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'programming'
    }
</script>

<style lang="scss">
    @import 'assets/color';

    main {
        width: 100%;
        .title {
            background-color: $primary-medium;
            h1 {
                margin: 0 auto;
                max-width: 1028px;
                font-size: 1.6rem;
            }
        }
        .container-programming {
            max-width: 1028px;
            margin: 2% auto;
            display: flex;
            > div {
                flex: 1;
                display: inline-block;
            }
            .container-week {
                margin-right: 2%;
                border: 1px solid $primary-medium;
                padding: 2px 20px;
                h3 {
                    font-size: 1.4rem;
                    font-weight: normal;
                    margin: 0 0 2%;
                }
                ul.week-date {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 0.5%;
                    li {
                        cursor: pointer;
                    }
                    .selected-date {
                        background: $primary-medium;
                        color: black;
                    }
                }
            }
            .container-nav-one {
                .container-semana {
                    display: flex;
                    width: 100%;
                    border-bottom: 1px solid $primary-medium;
                    padding-bottom: 20px;
                    .semana-info {
                        flex: 2;
                        padding: 0 0 0 15px;
                        h4 {
                            font-weight: normal;
                            margin-bottom: 2%;
                            font-size: 1.2rem;
                        }
                        li {
                            margin-top: 10px;
                            font-style: italic;
                            padding-left: 10px;
                            p {
                                font-size: 0.9rem;
                            }
                        }
                        li:nth-child(odd) {
                            color: $secondary-dark;
                            background: $primary-light;
                        }
                    }
                    img {
                        flex: 1;
                    }
                }
                .container-destacados {
                    margin-top: 2%;
                    padding: 4px;
                    background: $primary-light;
                    h3 {
                        padding: 5px 5px;
                        color: black;
                        font-weight: normal;
                    }
                    .destacados-info-parent {
                        background: $secondary-dark;
                        padding: 10px;
                        display: flex;
                        margin-top: 2%;
                        img {
                            flex: 25%;
                        }
                        .destacados-info-child {
                            padding: 0px 10px;
                            flex: 75%;
                            display: flex;
                            flex-wrap: wrap;
                            .container-room-link {
                                margin-top: auto;
                                margin-left: auto;
                                @include format-link($primary-medium, flex-end);
                            }
                        }
                    }
                }
            }
        }
    }
</style>