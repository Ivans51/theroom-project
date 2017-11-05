<template>
    <main>
        <div class="title"><h1>Title Now</h1></div>
        <div class="container-home">
            <div class="container-special">
                <div class="special-info" v-for="special in specials">
                    <img src="./assets/img/home/special-1.png" :alt="special.name">
                    <div class="special-text">
                        <h3>{{ special.name }}</h3>
                        <p>{{ special.program }}</p>
                        <p>{{ special.date }}</p>
                    </div>
                </div>
            </div>
            <div class="container-room">
                <div class="room-program">
                    <div class="room-program-title">
                        <img src="./assets/img/home/countdown-thisweek-1.png" alt="room-icon-thisweek">
                        <div class="program-title-text">
                            <h4>Name Program <span>This Week</span></h4>
                            <p>estreno todos los viernes</p>
                            <p>19:00 hrs.</p>
                        </div>
                    </div>
                    <div class="program-list">
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
                    </div>
                    <div class="program-list">
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
                    </div>
                    <div class="container-room-link">
                        <a href="#">ver toda la programación
                            <img src="./assets/img/home/link-plus.png" alt="room-link-icon">
                        </a>
                    </div>
                </div>
                <div class="room-rated">
                    <p>THE ROOM RATED!</p>
                    <img src="./assets/img/home/the-room-rated.png" alt="room-icon-rated">
                    <p>Escucha las nuevas canciones, que ahora mismo suenan y te recomendamos.</p>
                    <div class="container-room-link">
                        <a href="#">ver toda la programación
                            <img src="assets/img/home/link-plus-2.png" alt="room-icon-link-2">
                        </a>
                    </div>
                </div>
                <div class="room-news">
                    <h3>Breaking News</h3>
                    <img src="./assets/img/home/Butcher-Babies.png" alt="room-news">
                    <h4>News info</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam deserunt ex, ipsum iure
                        laudantium magnam maiores minus nihil, nulla optio possimus provident quo reprehenderit veniam.
                        Dicta eligendi iusto vero?</p>
                </div>
            </div>
            <div class="divisor-line"></div>
            <div class="container-promotional">
                <div class="promotional-podcast">
                    <div class="podcast-title">
                        <h3>Escucha nuestros shows</h3>
                        <p>Podcast cuando y donde quieras</p>

                        <a href="#">
                            <roter-link :to="{name: 'podcast', params: {id: 16}}"><img src="" alt="">
                                podcast
                            </roter-link>
                        </a>
                        <img src="" alt="room-icon-plus-3">
                    </div>
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div class="promotional-video">
                    <div class="video-title">
                        <h3>Video this week</h3>
                        <a href="#">
                            <img src="" alt="room-icon-plus-3">
                        </a>
                    </div>
                    <iframe src="https://www.youtube.com/embed/V8i_QhOgsKw"
                            frameborder="0" allowfullscreen>
                    </iframe>
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
        data() {
            return {
                specials: [
                    {
                        name: "Unlucky Morpheus",
                        program: "moods",
                        date: "17/04/2017",
                        image: "./static/home/special-1.png"
                    },
                    {
                        name: "Avril Lavigne",
                        program: "the room radio",
                        date: "17/04/2017",
                        image: "static/home/special-2.png"
                    },
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
            > div {
                display: inline-block;
            }
            .container-special {
                display: flex;
                .special-info {
                    flex: 1;
                    img {
                        width: 100%;
                    }
                    .special-text {
                        border-top: 1px solid $primary-medium;
                        border-bottom: 1px solid $primary-medium;
                        margin: 0 10px;
                        padding: 5px 0;
                    }
                    p {
                        font-size: 0.9rem;
                    }
                }
            }
            .container-room {
                margin: 4% 0 1%;
                display: flex;
                padding: 5px 0;
                > div {
                    flex: 1;
                }
                .room-program {
                    background-color: $secondary-light;
                    .room-program-title {
                        display: flex;
                        .program-title-text {
                            padding: 0 10px;
                            h4 {
                                span {
                                    color: $primary-medium;
                                }
                            }
                            p {
                                font-size: 0.8rem;
                            }
                        }
                    }
                    .program-list:first-child {
                        border-top: 1px solid $primary-medium;
                    }
                    .program-list {
                        display: flex;
                        margin: 0 4%;
                        border-bottom: 1px solid $primary-medium;
                        ul.list-top-one {
                            flex: 20%;
                            li {
                                display: flex;
                                justify-content: center;
                                h4 {
                                    font-size: 2rem;
                                    color: $primary-medium;
                                }
                            }
                        }
                        .list-top-two {
                            flex: 80%;
                            padding: 0px 0px 10px 10px;
                            line-height: 0.8rem;
                            li {
                                line-height: 0.5rem;
                                p {
                                    font-size: 1.2rem;
                                }
                                span {
                                    color: $primary-medium;
                                    font-size: 0.8rem;
                                }
                            }
                        }
                    }
                    .container-room-link {
                        @include format-link($primary-medium);
                    }
                }
                .room-rated {
                    background-color: $secondary-light;
                    margin: 0 0.5%;
                    p:first-child {
                        font-weight: normal;
                        font-size: 1.4rem;
                        padding-left: 10px;
                    }
                    img {
                        margin: 2% 0;
                        padding-bottom: 10px;
                        border-bottom: 1px solid $primary-medium;
                    }
                    .container-room-link {
                        @include format-link($primary-medium);
                    }
                }
                .room-news {
                    background: $primary-light;
                    h3 {
                        font-style: italic;
                        color: white;
                        background: black;
                        padding: 2px;
                        display: inline-block;
                        margin: 1% 0 1% 2%;
                    }
                    h4 {
                        font-size: 1.4rem;
                    }
                    h4, p {
                        color: black;
                        margin: 1% 4%;
                    }
                    img {
                        width: 100%;
                    }
                }
            }
            .divisor-line {
                height: 30px;
                min-height: 20px;
                background: $primary-medium;
                display: block;
                margin-bottom: 2%;
            }
            .container-promotional {
                display: flex;
                > div {
                    flex: 1;
                }
                .promotional-podcast {
                    margin-right: 1%;
                    .podcast-title {
                        border-top: 1px solid $primary-medium;
                        margin: 0 2%;
                        padding: 10px 0 5px;
                    }
                }
                .promotional-video {
                    background-color: $secondary-light;
                    iframe {
                        width: 100%;
                        height: 320px;
                    }
                    .video-title {
                        padding: 10px 0 10px 20px;
                        h3 {
                            border-bottom: 1px solid $primary-medium;
                            display: inline-block;
                        }
                    }
                    p {
                        margin: 1% 0 5% 2%;
                    }
                }
            }
        }
    }

</style>