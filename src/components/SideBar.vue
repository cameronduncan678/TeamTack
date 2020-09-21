<template>
  <div class="tt-sidebar cyan lighten-4">
    <h4 class="sidebar-title">Team</h4>
    <div class="team-list-sidebar">
      <draggable :list="getTeam" group="teamDrag" @change="log">
        <div v-for="(member, index) in getTeam" :key="index">
          <CardSidebar :memberData="member" v-if="member.data.project == ''" />
        </div>
      </draggable>
      <div class="add-member-btn">
        <button @click="addMemberShow" class="btn cyan">
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
    <div class="team-manager-btn">
      <router-link to="/teammanager" class="btn cyan">
        <i class="fas fa-users-cog"></i>
      </router-link>
    </div>
    <modal id="add-member" name="add-member-modal" height="auto" class="modalBG">
      <div class="container">
        <h5 style="text-align:center; margin-top:40px;">Add new TeamMember</h5>
        <form class="col">
          <div>
            <div class="input-field">
              <input type="text" name="addFName" placeholder="First Name" v-model="addFName" />
            </div>
            <div class="input-field">
              <input type="text" name="addLName" placeholder="Last Name" v-model="addLName" />
            </div>
          </div>
          <div class>
            <div class="input-field">
              <input type="email" name="addEmail" placeholder="email" v-model="addEmail" />
            </div>
            <div class="input-field">
              <input type="text" name="addPhone" placeholder="phone" v-model="addPhone" />
            </div>
          </div>
        </form>
        <div style="text-align:center; margin-bottom:40px; margin-top:20px;">
          <button @click="addNewTeamMember" class="btn-large cyan">Add Member</button>
          <button @click="addMemberHide" class="btn-large red">Cancel</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import CardSidebar from "./TeamCardSB";
import { mapGetters, mapActions } from "vuex";
import draggable from "vuedraggable";

export default {
  name: "SideBar",
  data() {
    return {
      addFName: null,
      addLName: null,
      addEmail: null,
      addPhone: null,
    };
  },
  components: {
    CardSidebar,
    draggable,
  },

  methods: {
    ...mapActions(["fetchMembers", "addMember"]),
    addMemberShow() {
      this.$modal.show("add-member-modal");
    },
    addMemberHide() {
      this.$modal.hide("add-member-modal");
    },
    addNewTeamMember(e) {
      e.preventDefault;

      this.addMember({
        name: {
          firstname: this.addFName,
          lastname: this.addLName,
        },
        email: this.addEmail,
        phone: this.addPhone,
        project: "",
      });

      this.addMemberHide();
    },
    log: function (evt) {
      window.console.log(evt);
    },
  },
  computed: {
    ...mapGetters(["getTeam"]),
  },
  created() {
    this.fetchMembers();
  },
  updated() {
    this.fetchMembers();
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
  margin-top: 5px;
}
</style>
