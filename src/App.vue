<template>
    <div id="app">
        <headroom></headroom>
        <navone></navone>
        <router-view></router-view>
        <footroom></footroom>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="scss">

    @import "assets/_color";

    *, body {
        font-family: "Segoe UI", "Microsoft Tai Le";
        font-size: 1rem;
        line-height: normal;
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    figure {
        margin: 0;
    }

    ul, ol, dl {
        list-style: none;
        margin: 0;
    }

    a {
        cursor: pointer;
        color: #FFFFFF;
        text-decoration: none;
    }

    a:active {
        color: $link-color;
    }

    a:hover {
        color: hsl(0, 0%, 100%);
        text-decoration: none;
    }

    p {
        margin: 0;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: bolder;
        line-height: inherit;
        margin: 0;
    }

    #app {
        background-color: #12062c;
        color: #FFF;
    }

</style>
