<template>
    <div class="nav">
        <div class="logo">
            <router-link to="/">Idaho Food Trucks</router-link>
        </div>
        <div class="nav-links">
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
    position: relative;
    width: 100%;
    padding: 1rem 0;
}

.nav a {
    color: #fcbf49;
    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.3s;
}

.nav a:hover {
    color: #e6a016;
}

.logo {
    display: inline-block;
}

.logo a {
    margin-left: 5rem;
    font-size: 1.2em;
    font-weight: 600;
    letter-spacing: 1px;
}

.nav-links {
    display: inline-block;
    position: absolute;
    right: 5rem;
}

.nav-links a {
    margin-right: 3rem;
}
</style>
