"use strict";
var _a, _b;
exports.__esModule = true;
var axios_1 = require("axios");
var auth_1 = require("../actions/auth");
var user_1 = require("../actions/user");
var AUTH_URL = "http://localhost:8000/api/user/token/";
function setAuthToken(token) {
    axios_1["default"].defaults.headers.common["Authorization"] = "";
    delete axios_1["default"].defaults.headers.common["Authorization"];
    if (token) {
        axios_1["default"].defaults.headers.common["Authorization"] = "Token " + token;
    }
}
var state = {
    token: localStorage.getItem("user-token") || "",
    status: ""
};
var getters = {
    isAuthenticated: function (state) { return !!state.token; },
    authStatus: function (state) { return state.status; }
};
var actions = (_a = {},
    _a[auth_1.AUTH_REQUEST] = function (_a, user) {
        var commit = _a.commit, dispatch = _a.dispatch;
        return new Promise(function (resolve, reject) {
            commit(auth_1.AUTH_REQUEST);
            axios_1["default"]
                .post(AUTH_URL, user)
                .then(function (resp) {
                var token = resp.data.token;
                localStorage.setItem("user-token", token);
                setAuthToken(token);
                commit(auth_1.AUTH_SUCCESS, token);
                dispatch(user_1.USER_REQUEST);
                resolve(resp);
            })["catch"](function (err) {
                commit(auth_1.AUTH_ERROR, err);
                localStorage.removeItem("user-token");
                console.log(err);
                reject(err);
            });
        });
    },
    _a);
var mutations = (_b = {},
    _b[auth_1.AUTH_REQUEST] = function (state) {
        state.status = "loading";
        console.log("auth loading");
    },
    _b[auth_1.AUTH_SUCCESS] = function (state, token) {
        state.status = "success";
        state.token = token;
        console.log("auth success");
    },
    _b[auth_1.AUTH_ERROR] = function (state) {
        state.status = "error";
        console.log("Auth error");
    },
    _b);
exports["default"] = {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
};
