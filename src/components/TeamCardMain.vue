<template>
  <div>
    <div class="tt-TeamCard-Main cyan lighten-5">
      <div class="tt-TeamCard-Main-det">
        <p class="detail-name">
          <i class="far fa-user"></i>
          {{ fullName }}
        </p>
        <div class="detail-icons">
          <div class="detail-icons-icon">
            <i class="far fa-envelope"></i>
            <i
              class="fas fa-phone-alt"
              @click="copyNumber(memberData.data.phone)"
            ></i>
          </div>
        </div>
        <div class="detail-footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TeamCardMain",
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
    show() {
      this.$modal.show("deleteTeamMain");
    },
    hide() {
      this.$modal.hide("deleteTeamMain");
    },
    copyNumber(number) {
      navigator.clipboard.writeText(number).then(() => {
        alert("Phone Number Copied");
      });
    },
  },
};
</script>

<style>
.tt-TeamCard-Main {
  width: 95%;
  height: 150px;
  margin-bottom: 50px;
  box-shadow: 5px 5px 9px #d9e2e4;
}

.tt-TeamCard-Main-det {
  width: 100%;
  height: 90%;
  float: left;
  margin-top: 2.5%;
}

.detail-name {
  margin: 0 10px;
  font-size: 25px;
  border-top: solid 1px;
  padding-top: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-left: 2.5%;
}

.detail-name i {
  font-size: 150%;
}

.detail-icons {
  height: 50%;
  margin-top: 10px;
}

.detail-icons-icon {
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

.main-card-del {
  float: right;
}
</style>