"use strict";
var _a, _b;
exports.__esModule = true;
var axios_1 = require("axios");
var user_1 = require("../actions/user");
var VENDOR_CREATE_URL = "http://localhost:8000/api/user/create-vendor/";
var VENDOR_DETAIL_URL = "http://localhost:8000/api/vendor/me/";
var state = {
    status: "",
    vendorName: "",
    email: ""
};
var getters = {
    vendorName: function (state) { return state.vendorName; }
};
var actions = (_a = {},
    _a[user_1.USER_CREATE] = function (_a, vendor) {
        var commit = _a.commit, dispatch = _a.dispatch;
        return new Promise(function (resolve, reject) {
            commit(user_1.USER_CREATE);
            axios_1["default"]
                .post(VENDOR_CREATE_URL, vendor)
                .then(function (resp) {
                commit(user_1.USER_CREATE_SUCCESS);
                resolve(resp);
            })["catch"](function (resp) {
                commit(user_1.USER_CREATE_ERROR);
                reject(resp);
            });
        });
    },
    _a[user_1.USER_REQUEST] = function (_a) {
        var commit = _a.commit, dispatch = _a.dispatch;
        commit(user_1.USER_REQUEST);
        axios_1["default"]
            .get(VENDOR_DETAIL_URL)
            .then(function (resp) {
            commit(user_1.USER_SUCCESS, resp);
        })["catch"](function (resp) {
            commit(user_1.USER_ERROR);
            // TODO dispatch logout
        });
    },
    _a);
var mutations = (_b = {},
    _b[user_1.USER_CREATE] = function (state) {
        // state.status = "loading";
        console.log("CREATING USER");
    },
    _b[user_1.USER_CREATE_SUCCESS] = function (state) {
        // state.status = "success";
        console.log("USER CREATED");
    },
    _b[user_1.USER_CREATE_ERROR] = function (state) {
        // state.status = "error";
        console.log("USER CREATION FAILED");
    },
    _b[user_1.USER_REQUEST] = function (state) {
        state.status = "loading";
    },
    _b[user_1.USER_SUCCESS] = function (state, resp) {
        state.vendorName = resp.data.name;
        state.status = "success";
    },
    _b[user_1.USER_ERROR] = function (state) {
        state.status = "error";
    },
    _b);
exports["default"] = {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
};
