import axios from "axios";
import {
    USER_CREATE,
    USER_CREATE_ERROR,
    USER_CREATE_SUCCESS
} from "../actions/user";

export type UserCredentials = {
    email: string;
    password: string;
};

export type VendorCredentials = {
    email: string;
    password: string;
    name: string;
};

export type UserState = {
    status: string;
    vendorName: string;
    email: string;
};

const VENDOR_CREATE_URL = "http://localhost:8000/api/user/create-vendor/";

const state: UserState = {
    status: "",
    vendorName: "",
    email: ""
};

const getters = {};

const actions = {
    [USER_CREATE]: ({ commit, dispatch }: any, vendor: VendorCredentials) => {
        return new Promise((resolve, reject) => {
            commit(USER_CREATE);
            axios
                .post(VENDOR_CREATE_URL, vendor)
                .then(resp => {
                    commit(USER_CREATE_SUCCESS);
                    resolve(resp);
                })
                .catch(resp => {
                    commit(USER_CREATE_ERROR);
                    reject(resp);
                });
        });
    }
};

const mutations = {
    [USER_CREATE]: (state: UserState) => {
        state.status = "loading";
        console.log("CREATING USER");
    },
    [USER_CREATE_SUCCESS]: (state: UserState) => {
        state.status = "success";
        console.log("USER CREATED");
    },
    [USER_CREATE_ERROR]: (state: UserState) => {
        state.status = "error";
        console.log("USER CREATION FAILED");
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
