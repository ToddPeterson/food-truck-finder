"use strict";
exports.__esModule = true;
var vue_router_1 = require("vue-router");
var Home_vue_1 = require("../views/Home.vue");
var routes = [
    {
        path: "/",
        name: "home",
        component: Home_vue_1["default"]
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () { return Promise.resolve().then(function () { return require("../views/About.vue"); }); }
    },
    {
        path: "/vendor",
        name: "vendor",
        component: function () { return Promise.resolve().then(function () { return require("../views/Vendor.vue"); }); }
    },
    {
        path: "/vendor/login",
        name: "login",
        component: function () { return Promise.resolve().then(function () { return require("../views/Login.vue"); }); }
    },
    {
        path: "/vendor/create",
        name: "createvendor",
        component: function () { return Promise.resolve().then(function () { return require("../views/CreateVendor.vue"); }); }
    }
];
var router = vue_router_1.createRouter({
    history: vue_router_1.createWebHistory(process.env.BASE_URL),
    routes: routes
});
exports["default"] = router;
