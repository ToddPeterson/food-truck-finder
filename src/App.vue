<template>
    <Navbar></Navbar>

    <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Navbar from "@/components/Navbar.vue";

@Options({
    components: {
        Navbar
    }
})
export default class Login extends Vue {}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    font-family: "Nunito Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
