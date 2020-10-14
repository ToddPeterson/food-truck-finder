<template>
    <div>
        <form class="login" @submit.prevent="login">
            <h1>Sign in</h1>
            <label>Email</label>
            <input required v-model="email" type="text" />
            <label>Password</label>
            <input required v-model="password" type="password" />
            <hr />
            <button type="submit">Submit</button>
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
        this.$store.dispatch(AUTH_REQUEST, user);
        console.log("Log in submitted");
    }
}
</script>

<style scoped></style>
