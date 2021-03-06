import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("../views/About.vue")
    },
    {
        path: "/vendor",
        name: "vendor",
        component: () => import("../views/Vendor.vue")
    },
    {
        path: "/vendor/login",
        name: "login",
        component: () => import("../views/Login.vue")
    },
    {
        path: "/vendor/create",
        name: "create_vendor",
        component: () => import("../views/CreateVendor.vue")
    },
    {
        path: "/vendor/me",
        name: "vendor_detail",
        component: () => import("../views/VendorDetail.vue")
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
