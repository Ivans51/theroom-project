<template>
    <header>
        <nav>
            <div class="radio-controls">
                <img src="./assets/img/head/Logo-Head.png" alt="room-logo">
                <img src="./assets/img/head/Play.png" alt="room-play-icon">
                <img src="./assets/img/head/pause.png" alt="room-pause-icon">
                <img src="./assets/img/head/volume-24-512.png" alt="room-volume-icon">
                <input type="range">
            </div>
            <div class="radio-info">
                <span>NOW:</span>
                <p>moods: Sunday Session</p>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'headroom'
    }
</script>

<style lang="scss">

    @import "assets/color";

    header {
        width: 100%;
        background: black;
        nav{
            margin: 0 auto;
            max-width: 1028px;
            padding: 10px 20px;
            display: flex;
            div.radio-controls {
                align-self: flex-end;
                flex: 1;
                img {
                    padding-left: 10px;
                    cursor: pointer;
                }
            }
            div.radio-info {
                flex: 1;

                span {
                    color: $primary-medium;
                    font-weight: bold;
                }
            }
        }
    }

</style>