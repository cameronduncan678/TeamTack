<template>
  <div class="Card-SideBar cyan lighten-5">
    <div class="card-sidebar-content">
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
</style>