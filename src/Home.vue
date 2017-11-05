<template>
    <main>
        <div class="title"><h1>Title Now</h1></div>
        <div class="container-home">
            <div class="container-special" v-for="special in specials">
                <div class="special-info">
                    <img src="./assets/img/home/special-1.png" :alt="special.name">
                    <h4>{{ special.name }}</h4>
                    <p>{{ special.program }}</p>
                    <p>{{ special.date }}</p>
                </div>
            </div>

            <div class="container-room">
                <div class="room-program">
                    <div class="room-program-title">
                        <img src="" alt="">
                        <h4>Name Program<span>This Week</span></h4>
                        <p>estreno todos los viernes</p>
                        <p>19:00 hrs.</p>
                    </div>
                    <ul class="list-top-one">
                        <li>
                            <h4>1</h4>
                        </li>
                    </ul>
                    <ul class="list-top-two">
                        <li>
                            <p>Name Band</p>
                            <span>Name Song</span>
                        </li>
                    </ul>
                    <div class="container-room-link">
                        <a href="#">ver toda la programación</a>
                        <img src="" alt="">
                    </div>
                </div>
                <div class="room-promo">
                    <h3>THE ROOM RATED!</h3>
                    <img src="" alt="">
                    <p>Escucha las nuevas canciones, que ahora mismo suenan y te recomendamos.</p>
                    <div class="container-room-link">
                        <a href="#">ver toda la programación</a>
                        <img src="" alt="">
                    </div>
                </div>
                <div class="room-news">
                    <h3>Breaking News</h3>
                    <img src="" alt="">
                    <h4>News info</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam deserunt ex, ipsum iure
                        laudantium magnam maiores minus nihil, nulla optio possimus provident quo reprehenderit veniam.
                        Dicta eligendi iusto vero?</p>
                </div>
            </div>

            <div class="divisor-line"></div>

            <div class="container-promotional">
                <div class="podcast-container">
                    <div class="podcast-title">
                        <h3>Escucha nuestros shows</h3>
                        <p>Podcast cuando y donde quieras</p>
                        <router-link :to="{name: 'podcast', params: {id: 16}}"><img src="" alt="">Podcast</router-link>
                    </div>
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div class="container-video">
                    <div class="video-title">
                        <h3>Video this week</h3>
                        <a href="#"><img src="" alt=""></a>
                    </div>
                    <video src=""></video>
                    <p>Title Band</p>
                </div>
            </div>
        </div>

        <router-view></router-view>
    </main>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                specials : [
                    {name: "Unlucky Morpheus", program: "moods", date: "17/04/2017", image: "./static/home/special-1.png"},
                    {name: "Avril Lavigne", program: "the room radio", date: "17/04/2017", image: "static/home/special-2.png"},
                    {name: "Slipknot", program: "top five", date: "17/04/2017", image: "static/home/special-3.png"}
                ]
            }
        }
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
        .container-home {
            max-width: 1028px;
            margin: 0 auto;
        }
    }

</style>