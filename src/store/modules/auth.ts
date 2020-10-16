import axios from "axios";

import { AUTH_ERROR, AUTH_REQUEST, AUTH_SUCCESS } from "../actions/auth";
import { USER_REQUEST } from "../actions/user";
import { UserCredentials } from "./user";

export type AuthState = {
    token: string;
    status: string;
};

const AUTH_URL = "http://localhost:8000/api/user/token/";

function setAuthToken(token: string) {
    axios.defaults.headers.common["Authorization"] = "";
    delete axios.defaults.headers.common["Authorization"];

    if (token) {
        axios.defaults.headers.common["Authorization"] = `Token ${token}`;
    }
}

const state: AuthState = {
    token: localStorage.getItem("user-token") || "",
    status: ""
};

const getters = {
    isAuthenticated: (state: AuthState) => !!state.token,
    authStatus: (state: AuthState) => state.status
};

const actions = {
    [AUTH_REQUEST]: ({ commit, dispatch }: any, user: UserCredentials) => {
        return new Promise((resolve, reject) => {
            commit(AUTH_REQUEST);
            axios
                .post(AUTH_URL, user)
                .then(resp => {
                    const token = resp.data.token;
                    localStorage.setItem("user-token", token);
                    setAuthToken(token);
                    commit(AUTH_SUCCESS, token);
                    dispatch(USER_REQUEST);
                    resolve(resp);
                })
                .catch(err => {
                    commit(AUTH_ERROR, err);
                    localStorage.removeItem("user-token");
                    console.log(err);
                    reject(err);
                });
        });
    }
};

const mutations = {
    [AUTH_REQUEST]: (state: AuthState) => {
        state.status = "loading";
        console.log("auth loading");
    },
    [AUTH_SUCCESS]: (state: AuthState, token: string) => {
        state.status = "success";
        state.token = token;
        console.log("auth success");
    },
    [AUTH_ERROR]: (state: AuthState) => {
        state.status = "error";
        console.log("Auth error");
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
