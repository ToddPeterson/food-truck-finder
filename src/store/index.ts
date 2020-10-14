import { createStore } from "vuex";
import auth from "./modules/auth";
import { AuthState } from "./modules/auth";

export type State = AuthState;

export const store = createStore({
    modules: {
        auth
    }
});
