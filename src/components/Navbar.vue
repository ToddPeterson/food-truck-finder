<template>
    <div class="nav">
        <div class="container">
            <div class="logo">
                <router-link :to="{ name: 'home' }"
                    >Idaho Food Trucks</router-link
                >
            </div>
            <div class="nav-links">
                <router-link :to="{ name: 'login' }">Login</router-link>
            </div>
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
    padding: 0.6rem 0;
}
.container {
    width: 100%;
    padding: 0 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    font-size: 1.6em;
    font-weight: 900;
    letter-spacing: 1px;
}

.nav-links {
    display: inline-block;
}

.nav-links a {
    margin-right: 3rem;
}
</style>
