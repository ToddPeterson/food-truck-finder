<template>
    <div class="wrap">
        <form @submit.prevent="createUser">
            <h2>New Vendor</h2>
            <label>Vendor Name</label>
            <input
                required
                v-model="vendorName"
                type="text"
                name="name"
                id="name"
            />
            <label>Email</label>
            <input
                required
                v-model="email"
                type="email"
                name="email"
                id="email"
            />
            <label>Password</label>
            <input
                required
                v-model="password"
                type="password"
                name="password"
                id="password"
            />
            <label>Confirm Password</label>
            <input
                required
                v-model="confPassword"
                type="password"
                name="confirmpassword"
                id="confirmpassword"
            />
            <div class="row button-row">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { VendorCredentials } from "@/store/modules/user";
import { USER_CREATE } from "@/store/actions/user";

@Options({})
export default class CreateVendor extends Vue {
    private vendorName = "";
    private email = "";
    private password = "";
    private confPassword = "";

    createUser() {
        console.log("Create User");
        if (this.password === this.confPassword) {
            const vendor: VendorCredentials = {
                name: this.vendorName,
                email: this.email,
                password: this.password
            };
            this.$store.dispatch(USER_CREATE, vendor).then(() => {
                this.$router.push({ name: "login" });
            });
        } else {
            console.log("passwords don't match");
        }
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

form {
    background: #eae2b7;
    padding: 3rem;
}

form h2 {
    font-weight: 900;
    font-size: 2em;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 1em;
}

form label {
    display: block;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 0.2em;
    font-size: 1.1em;
}

form input {
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

form button {
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

form button:hover {
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
</style>
