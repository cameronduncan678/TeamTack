import Vue from "vue";
import Router from "vue-router";
import TeamTack from "@/components/TeamTack";
import TeamManager from "@/components/TeamManager";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "TeamTack",
      component: TeamTack
    },
    {
      path: "/teammanager",
      name: "TeamManager",
      component: TeamManager
    }
  ]
});
