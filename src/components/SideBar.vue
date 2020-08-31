<template>
  <div class="tt-sidebar cyan lighten-4">
    <h4 class="sidebar-title">Team</h4>
    <div class="team-list-sidebar">
      <div v-for="(member, index) in getTeam" :key="index">
        <CardSidebar :memberData="member" v-if="member.project == null" />
      </div>
      <div class="add-member-btn">
        <button class="btn cyan">
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
    <div class="team-manager-btn">
      <router-link to="/teammanager" class="btn cyan">
        <i class="fas fa-users-cog"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import CardSidebar from "./TeamCardSB";
import { mapGetters } from "vuex";

export default {
  name: "SideBar",
  components: {
    CardSidebar,
  },
  computed: {
    ...mapGetters(["getTeam"]),
  },
};
</script>

<style>
.tt-sidebar {
  width: 300px;
  height: 80vh;
  float: left;
  margin-left: 10px;
  margin-top: 10px;
}

.sidebar-title {
  text-align: center;
  padding: 20px;
  border-top: solid white;
  border-bottom: solid white;
  color: white;
}

.team-list-sidebar {
  margin: 0 auto;
  width: 90%;
  height: 65%;
  background: #4dd0e1;
  overflow-y: scroll;
}

.team-list-sidebar-teammem {
  width: 85%;
  height: 120px;
  margin: 0 auto;
  margin-top: 30px;
  box-shadow: 5px 5px 9px #749999;
  padding: 10px;
  background: #0097a7;
}

.team-list-sidebar-teammem-port {
  width: 40%;
  height: 100%;
  float: left;
}

.team-list-sidebar-teammem-port-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-list-sidebar-teammen-name {
  float: left;
  text-align: center;
  margin-left: 10px;
  margin-top: 20px;
  color: white;
}

.team-manager-btn {
  text-align: center;
  margin-top: 10px;
}

.team-manager-btn button {
  width: 30%;
}

.add-member-btn {
  text-align: center;
  margin-bottom: 30px;
}

.add-member-btn button {
  width: 30%;
  height: 60px;
}
</style>