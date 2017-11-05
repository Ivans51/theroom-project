<template>
    <!--<h2>This is {{text}} : {{id_podcast}}</h2>-->
    <main>
        <div class="podcast">
            <div class="container-podcast">
                <p>Escúcha nuestros shosw cuando y donde quieras</p>
                <ul>
                    <li>Podcast</li>
                    <li>Podcast</li>
                    <li>Podcast</li>
                    <li>Podcast</li>
                    <li>Podcast</li>
                    <li>Podcast</li>
                    <li>Podcast</li>
                    <li>Podcast</li>
                </ul>
            </div>
            <div class="container-banner">
                <h1>Destacados</h1>
                <div class="container-banner-1">
                    <img src="./assets/img/podcast/countdown-thisweek.png" alt="room-banner-top10">
                    <p>Estreno Viernes 19:00 hrs.</p>
                </div>
                <div class="container-banner-2">
                    <img src="./assets/img/podcast/the-room-rated.png" alt="room-banner-roomrated">
                    <p>En vivo Viernes 15:00 hrs.</p>
                </div>
                <div class="container-banner-3">
                    <img src="./assets/img/podcast/sunday-morning.png" alt="room-banner-sunday-morning">
                    <p>Domingos 8:00 hrs.</p>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'id_podcast',
        mounted() {
            this.id_podcast = this.$route.params.id;
        },
        data() {
            return {
                text: 'podcast',
                id_podcast: null
            }
        }
    }
</script>

<style lang="scss">

    @import "assets/color";

    main {
        margin-top: 2%;
        width: 100%;
        .podcast {
            max-width: 1028px;
            margin: 0 auto;
            display: flex;
            > div {
                display: inline-block;
            }
            .container-podcast {
                flex: 55%;
                li:nth-child(odd) {
                    background: $secondary-light;
                }
                li {
                    padding: 15px 10px;
                }
                p {
                    margin: 0 0 2%;
                }
            }
            .container-banner {
                flex: 45%;
                padding: 0 30px;
                h1 {
                    border-bottom: 1px solid $primary-medium;
                    font-size: 2rem;
                    display: inline-block;
                    padding: 0 40px 10px;
                    margin-bottom: 3%;
                }
                img {
                    width: 100%;
                }
                p {
                    margin: 2% 0 10%;
                }
            }
        }
    }

</style>