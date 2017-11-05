<template>
    <div id="roomrated">
        <h1>This week</h1>
        <div class="container-week">
            <div class="week-parent">
                <img src="" alt="band">
                <div class="week-child-1">
                    <h3>Title band</h3>
                    <p>Title song</p>
                    <p class="week-gender">Title gender</p>
                </div>
                <input type="range">
                <div class="week-controls">
                    <img src="" alt="play-icon">
                    <img src="" alt="pause-icon">
                    <img src="" alt="volume-icon">
                    <input type="range">
                </div>
            </div>
        </div>
        <h2>Escúchalos en Podcast</h2>
        <div class="container-podcast-rated">
            <p>Shows más recientes</p>
            <ul>
                <li>Info post</li>
                <li>Info post</li>
                <li>Info post</li>
            </ul>
        </div>
        <div class="container-playlist">
            <img src="" alt="rated-logo">
            <p>Playlist de lunes a jueves 15:00 hrs \n
                en vivo los viernes 15:00 hrs.</p>
            <div class="playlist-more">
                Escucha más
                <img src="" alt="room-more-icon">
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'roomrated'
    }
</script>

<style lang="scss">

</style>