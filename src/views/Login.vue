<template>
    <div class="wrap">
        <form class="login" @submit.prevent="login">
            <h2>Sign in</h2>
            <label>Email</label>
            <input required v-model="email" type="text" />
            <label>Password</label>
            <input required v-model="password" type="password" />
            <div class="row button-row">
                <router-link :to="{ name: 'create_vendor' }"
                    >Create an account</router-link
                >
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { AUTH_REQUEST } from "@/store/actions/auth";
import { UserCredentials } from "@/store/modules/user";

@Options({})
export default class Login extends Vue {
    private email = "";
    private password = "";

    login() {
        const user: UserCredentials = {
            email: this.email,
            password: this.password
        };
        this.$store.dispatch(AUTH_REQUEST, user).then(() => {
            this.$router.push({ name: "vendor_detail" });
        });
        console.log("Log in submitted");
    }
}
</script>

<style scoped>
.wrap {
    width: 100%;
    padding-top: 7rem;
    display: flex;
    justify-content: center;
}

.login {
    background: #eae2b7;
    padding: 3rem;
}

.login h2 {
    font-weight: 900;
    font-size: 2em;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 1em;
}

.login label {
    display: block;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 0.2em;
    font-size: 1.1em;
}

.login input {
    display: block;
    width: 400px;
    height: 40px;
    border: none;
    margin-bottom: 1.8rem;
    border-radius: 6px;
    box-shadow: none;
    padding-left: 1em;
    font-size: 1.1em;
    color: #2b2b2b;
}

.login button {
    font-family: "Nunito Sans", sans-serif;
    border: none;
    background: #003049;
    color: #fcbf49;
    font-weight: 900;
    font-size: 1rem;
    text-transform: uppercase;
    padding: 0.6rem 1.6rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s;
}

.login button:hover {
    background: #0f6fa3;
    color: #f5b556;
}

.row {
    width: 100%;
}

.button-row {
    display: flex;
    justify-content: right;
    align-items: flex-end;
}

.button-row a,
.button-row a:visited {
    margin-right: 2em;
    color: #003049;
    transition: color 0.3s;
}

.button-row a:hover,
.button-row a:visited:hover {
    color: #1478ad;
}
</style>
