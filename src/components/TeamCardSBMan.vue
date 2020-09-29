<template>
  <div class="Card-SideBar-man cyan lighten-5">
    <div class="card-sidebar-content-man">
      <i class="fas fa-cog settings" @click="storeMemberData(memberData)"></i>
      {{ fullName }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CardSidebarMan",
  props: ["memberData"],
  data() {
    return {
      fullName:
        this.memberData.data.name.firstname +
        " " +
        this.memberData.data.name.lastname,
    };
  },
  methods: {
    ...mapGetters(["getPlaceholder"]),
    ...mapActions(["fetchMember"]),
    storeMemberData(data) {
      this.fetchMember(data);
    },
  },
};
</script>

<style>
.settings {
  cursor: pointer;
}

.Card-SideBar-man {
  width: 85%;
  height: 80px;
  margin: 10% auto;
  padding: 10px;
  box-shadow: 5px 5px 9px #5a9999;
}

.card-sidebar-content-man {
  height: 60px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  font-size: 150%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>