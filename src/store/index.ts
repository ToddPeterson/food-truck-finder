import { createStore } from "vuex";
import auth from "./modules/auth";
import user from "./modules/user";
import { AuthState } from "./modules/auth";
import { UserState } from "./modules/user";

export type State = AuthState | UserState;

export const store = createStore({
    modules: {
        auth,
        user
    }
});
