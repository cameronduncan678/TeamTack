<template>
  <div class="Card-SideBar cyan lighten-5">
    <div class="card-sidebar-content">
      <img class="card-sidebar-photo" src="../assets/images/portraitTest01.jpeg" />
      <div class="card-sidebar-icons">
        <i class="far fa-envelope"></i>
        <i class="fas fa-phone-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSidebar",
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
  font-size: 200%;
}

.card-sidebar-icons i {
  padding: 25%;
  display: block;
  cursor: pointer;
}
</style>