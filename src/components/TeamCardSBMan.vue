<template>
  <div class="Card-SideBar cyan lighten-5">
    <div class="card-sidebar-content">
      <img class="card-sidebar-photo" v-bind:src="memberData.photo" />
      <div class="card-Manager-icons">
        <i class="fas fa-cog"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSidebarMan",
  props: ["memberData"],
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

.card-Manager-icons {
  float: left;
  font-size: 300%;
}

.card-Manager-icons i {
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