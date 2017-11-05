<template>
    <div id="main-day">
        <ul class="day-hours">
            <li>00:00</li>
            <li>01:00</li>
            <li>07:00</li>
            <li>10:00</li>
        </ul>
        <ul class="day-programming">
            <li>moods</li>
            <li>special</li>
            <li>slipknot</li>
            <li>unlucky morpheus</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'progday',
        mounted() {
            this.id_day = this.$route.params.id;
        },
        data() {
            return {
                id_day: null
            }
        }
    }
</script>

<style lang="scss">

    #main-day {
        display: flex;
        font-size: 0.9rem;
        .day-hours {
            flex: 15%;
        }
        .day-programming {
            flex: 85%;
        }
    }

</style>