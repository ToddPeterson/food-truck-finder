"use strict";
exports.__esModule = true;
exports.store = void 0;
var vuex_1 = require("vuex");
var auth_1 = require("./modules/auth");
exports.store = vuex_1.createStore({
    modules: {
        auth: auth_1["default"]
    }
});
