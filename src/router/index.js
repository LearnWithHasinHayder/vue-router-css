import Vue from "vue";
import Router from "vue-router";

import Public from "../views/Public.vue";
import Login from "../views/Login.vue";
import Admin from "../views/Admin.vue";
import AdminDashboard from "../views/AdminDashboard.vue";
import Fallback from "../views/Fallback.vue";

import MiddlewareStylesheet from "./middleware/stylesheet";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Public,
      meta: {
        stylesheet: "public"
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        stylesheet: "login"
      }
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta: {
        stylesheet: "admin"
      }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: AdminDashboard,
      meta: {
        stylesheet: "admin"
      }
    },
    {
      path: "/fallback",
      name: "fallback",
      component: Fallback
    }
  ]
});

router.beforeEach(MiddlewareStylesheet);

export default router;
