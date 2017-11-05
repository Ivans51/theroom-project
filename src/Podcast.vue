<template>
    <!--<h2>This is {{text}} : {{id_podcast}}</h2>-->
    <div class="podcast">
        <div class="container-podcast">
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
        <h1>Destacados</h1>
        <div class="container-banner-1">
            <img src="" alt="room-banner-top10">
            <p>Estreno Viernes 19:00 hrs.</p>
        </div>
        <div class="container-banner-2">
            <img src="" alt="room-banner-roomrated">
            <p>En vivo Viernes 15:00 hrs.</p>
        </div>
        <div class="container-banner-3">
            <img src="" alt="room-banner-sunday-morning">
            <p>Domingos 8:00 hrs.</p>
        </div>
    </div>
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