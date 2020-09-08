<template>
  <div class="tt-manager-field teal lighten-4">
    <h4 class="tm-header white-text">Team Manager</h4>
    <div class="tm-container">
      <div class="row">
        <div class="col tm-photo-section">
          <div class="tm-photo">
            <img class="tm-photo-photo" :src="getMemberEdit.data.imageurl" />
            <div class="tm-photo-btn">
              <button class="btn">Upload Image</button>
            </div>
          </div>
        </div>
        <div class="col">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s6 cyan">
                <input
                  type="text"
                  placeholder="First Name"
                  v-model="getMemberEdit.data.name.firstname"
                />
              </div>
              <div class="input-field col s6 cyan">
                <input
                  type="text"
                  placeholder="Last Name"
                  v-model="getMemberEdit.data.name.lastname"
                />
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12 cyan">
                <input
                  type="email"
                  placeholder="email@address.com"
                  v-model="getMemberEdit.data.email"
                />
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12 cyan">
                <input type="text" placeholder="Phone Number" v-model="getMemberEdit.data.phone" />
              </div>
            </div>
          </form>
        </div>
        <div class="col">
          <button @click="memberEditShow" class="tm-btn btn cyan">
            <i class="far fa-edit"></i>
          </button>
          <button @click="memberDelShow" class="tm-btn btn red">
            <i class="far fa-minus-square"></i>
          </button>
        </div>
      </div>
    </div>
    <modal name="edit-member-modal">
      <div class="deleteModalContent">
        <h5>Are you sure you want to Edit: {{getMemberEdit.data.name.firstname}}</h5>
        <button @click="updateMember(getMemberEdit.ID)" class="btn-large cyan">Yes</button>
        <button @click="memberEditHide" class="btn-large red">No</button>
      </div>
    </modal>
    <modal name="delete-member-modal" class="modalBG">
      <div class="deleteModalContent">
        <h5>Are you sure you want to delete: {{getMemberEdit.data.name.firstname}}</h5>
        <button @click="deleteCurrentMember(getMemberEdit.ID)" class="btn-large cyan">Yes</button>
        <button @click="memberDelHide" class="btn-large red">No</button>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TMMain",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getMemberEdit"]),
  },
  methods: {
    ...mapActions(["deleteMember", "fetchMembers", "editMember"]),
    memberDelShow() {
      this.$modal.show("delete-member-modal");
    },
    memberDelHide() {
      this.$modal.hide("delete-member-modal");
    },
    memberEditShow() {
      this.$modal.show("edit-member-modal");
    },
    memberEditHide() {
      this.$modal.hide("edit-member-modal");
    },
    deleteCurrentMember(id) {
      this.deleteMember(id);
      this.fetchMembers();

      this.memberDelHide();
    },
    updateMember(id) {
      var data = {
        name: {
          firstname: this.getMemberEdit.data.name.firstname,
          lastname: this.getMemberEdit.data.name.lastname,
        },
        email: this.getMemberEdit.data.email,
        phone: this.getMemberEdit.data.phone,
        imageurl: "",
        project: "",
      };

      var parameterArray = [id, data];
      this.editMember(parameterArray);

      this.fetchMembers();
      this.memberEditHide();
    },
  },
};
</script>

<style>
.tt-manager-field {
  float: left;
  height: 80vh;
  width: 75%;
  margin-top: 10px;
  margin-left: 10px;
  background-size: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}

.tm-container {
  margin: 0 auto;
  width: 97%;
}

.tm-header {
  margin: 20px;
  padding-bottom: 10px;
  border-bottom: solid white;
}

.tm-photo-section {
  border: solid 1px white;
}

.tm-photo {
  width: 250px;
  height: 60vh;
}

.tm-photo-photo {
  margin-top: 10%;
  height: 80%;
  width: 100%;
  border: 1.5px dashed white;
  object-fit: cover;
}

.tm-photo-btn {
  margin-top: 20px;
  text-align: center;
}

.tm-btn {
  display: block;
  width: 70px;
  height: 70px;
  margin: 30%;
}

.tm-btn i {
  font-size: 250%;
}
</style>