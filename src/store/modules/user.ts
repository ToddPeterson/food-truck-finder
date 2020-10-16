import axios from "axios";
import {
    USER_CREATE,
    USER_CREATE_ERROR,
    USER_CREATE_SUCCESS,
    USER_REQUEST,
    USER_ERROR,
    USER_SUCCESS
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
const VENDOR_DETAIL_URL = "http://localhost:8000/api/vendor/me/";

const state: UserState = {
    status: "",
    vendorName: "",
    email: ""
};

const getters = {
    vendorName: (state: UserState) => state.vendorName
};

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
    },
    [USER_REQUEST]: ({ commit, dispatch }: any) => {
        commit(USER_REQUEST);
        axios
            .get(VENDOR_DETAIL_URL)
            .then(resp => {
                commit(USER_SUCCESS, resp);
            })
            .catch(resp => {
                commit(USER_ERROR);
                // TODO dispatch logout
            });
    }
};

const mutations = {
    [USER_CREATE]: (state: UserState) => {
        // state.status = "loading";
        console.log("CREATING USER");
    },
    [USER_CREATE_SUCCESS]: (state: UserState) => {
        // state.status = "success";
        console.log("USER CREATED");
    },
    [USER_CREATE_ERROR]: (state: UserState) => {
        // state.status = "error";
        console.log("USER CREATION FAILED");
    },
    [USER_REQUEST]: (state: UserState) => {
        state.status = "loading";
    },
    [USER_SUCCESS]: (state: UserState, resp: any) => {
        state.vendorName = resp.data.name;
        state.status = "success";
    },
    [USER_ERROR]: (state: UserState) => {
        state.status = "error";
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
