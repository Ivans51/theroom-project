<template>
    <div id="head-container">
        <div class="head-blur">
            <div class="head-info">
                <p><strong>Hola, Bienvenido a THE ROOM</strong></p>
                <p>Encuentra toda la música que necesitas en un sólo lugar y conoce todo sobre nuestras bandas favoritas</p>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'navone'
    }
</script>

<style lang="scss">

    #head-container {
        background: url("./assets/img/head/Rectángulo-2.png") no-repeat;
        width: 100%;
        height: 250px;
        .head-blur {
            width: 100%;
            .head-info {
                padding: 60px 0;
                max-width: 1024px;
                margin: 0 auto;
                p {
                    font-size: 1.2rem;
                }
            }
        }
    }

</style>