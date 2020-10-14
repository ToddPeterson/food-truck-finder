"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var router_1 = require("./router");
var store_1 = require("./store");
var axios_1 = require("axios");
var vue_axios_1 = require("vue-axios");
vue_1.createApp(App_vue_1["default"])
    .use(router_1["default"])
    .use(store_1.store)
    .use(vue_axios_1["default"], axios_1["default"])
    .mount("#app");
