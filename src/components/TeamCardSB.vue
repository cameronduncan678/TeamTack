<template>
  <div class="Card-SideBar cyan lighten-5">
    <div class="card-sidebar-content">
      <i class="far fa-user"></i>
      {{ fullName }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CardSidebar",
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
    copyNumber(number) {
      navigator.clipboard.writeText(number).then(() => {
        alert("Phone Number Copied");
      });
    },
  },
};
</script>

<style>
.Card-SideBar {
  width: 85%;
  height: 80px;
  margin: 10% auto;
  padding: 10px;
  box-shadow: 5px 5px 9px #5a9999;
}

.card-sidebar-content {
  height: 60px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  font-size: 150%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.sb-card-del {
  float: right;
  height: 30%;
  width: 10%;
}

.sb-card-del i {
  font-size: 100%;
}
</style>