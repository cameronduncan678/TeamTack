<template>
  <div class="Card-SideBar cyan lighten-5">
    <div class="card-sidebar-content">
      <img class="card-sidebar-photo" v-bind:src="memberData.photo" />
      <div class="card-sidebar-icons">
        <i class="far fa-envelope"></i>
        <i class="fas fa-phone-alt"></i>
      </div>
      <button class="sb-card-del btn cyan" @click="show">
        <i class="fas fa-times"></i>
      </button>
    </div>

    <modal name="deleteTeam" class="modalBG">
      <div class="deleteModalContent center-align">
        <h5>Are you sure you want to delete: {{memberData.name}}</h5>
        <div class="center-align">
          <button class="btn-large cyan">Yes</button>
          <button @click="hide" class="btn-large red">No</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  name: "CardSidebar",
  props: ["memberData"],
  methods: {
    show() {
      this.$modal.show("deleteTeam");
    },
    hide() {
      this.$modal.hide("deleteTeam");
    },
  },
};
</script>

<style>
.Card-SideBar {
  width: 85%;
  height: 120px;
  margin: 10% auto;
  padding: 3%;
  box-shadow: 5px 5px 9px #5a9999;
}

.card-sidebar-content {
  width: 98%;
  height: 95%;
  margin: 0 auto;
  padding: 5px;
  border-top: solid 1px;
  border-bottom: solid 1px;
}

.card-sidebar-photo {
  width: 60%;
  height: 100%;
  object-fit: cover;
  float: left;
}

.card-sidebar-icons {
  float: left;
  font-size: 150%;
}

.card-sidebar-icons i {
  padding: 25%;
  display: block;
  cursor: pointer;
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