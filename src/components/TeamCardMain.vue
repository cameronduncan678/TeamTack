<template>
  <div>
    <div class="tt-TeamCard-Main cyan lighten-5">
      <div class="tt-TeamCard-Main-port">
        <img class="tt-TeamCard-Main-port-img" src="../assets/images/portraitTest01.jpeg" />
      </div>
      <div class="tt-TeamCard-Main-det">
        <p class="detail-name">John Doe</p>
        <div class="detail-icons">
          <div class="detail-icons-icon">
            <i class="far fa-envelope"></i>
            <i class="fas fa-phone-alt"></i>
          </div>
        </div>
        <div class="detail-footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamCardMain",
};
</script>

<style>
.tt-TeamCard-Main {
  width: 95%;
  height: 250px;
  margin-bottom: 50px;
  box-shadow: 5px 5px 9px #d9e2e4;
}

.tt-TeamCard-Main-port {
  width: 50%;
  height: 100%;
  float: left;
}

.tt-TeamCard-Main-port-img {
  height: 90%;
  width: 95%;
  margin-top: 5%;
  float: right;
  object-fit: cover;
}

.tt-TeamCard-Main-det {
  width: 50%;
  height: 90%;
  float: left;
  margin-top: 2.5%;
}

.detail-name {
  margin: 0 10px;
  font-size: 25px;
  border-top: solid 1px;
  border-bottom: solid 1px;
  font-weight: 10;
}

.detail-icons {
  height: 50%;
  margin-top: 10%;
}

.detail-icons-icon {
  padding: 10px;
  font-size: 250%;
}

.detail-icons-icon i {
  padding: 5%;
  cursor: pointer;
}

.detail-footer {
  border-top: solid 1px;
  margin: 0 10px;
}
</style>