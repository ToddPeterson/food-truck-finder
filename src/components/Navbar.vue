<template>
    <div class="nav">
        <div class="logo">
            <router-link to="/">Idaho Food Trucks</router-link>
        </div>
        <div class="nav-links">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/login">Login</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Navbar extends Vue {}
</script>

<style scoped>
.nav {
    background: #003049;
    width: 100%;
}

.logo {
    display: inline-block;
}

.logo a {
    color: #fcbf49;
    text-transform: uppercase;
}

.nav-links {
    display: inline-block;
}
</style>
