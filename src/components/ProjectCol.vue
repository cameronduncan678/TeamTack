<template>
  <div class="tt-project-section">
    <!--Project Column-->
    <span v-for="(proj, index) in projData" :key="index" class="tt-project-col">
      <div class="tt-project-col-container">
        <div class="tt-project-col-title">
          {{ proj.data.project }}
          <button @click="delShow(proj.ID)" class="project-del btn cyan">
            <i class="fas fa-times"></i>
          </button>
          <modal name="delete-modal" class="modalBG">
            <div class="deleteModalContent">
              <h5>Are you sure you want to delete this Project?</h5>
              <button @click="deleteCol(storeID)" class="btn-large cyan">Yes</button>
              <button @click="delHide" class="btn-large red">No</button>
            </div>
          </modal>
        </div>
        <div class="tt-project-col-teamlist">
          <TeamCardMain />
          <TeamCardMain />
          <TeamCardMain />
        </div>
      </div>
    </span>
    <!--Add Project Button-->
    <span class="tt-addProject">
      <button @click="addShow" class="btn cyan add-btn mr-3">
        <i class="fas fa-plus"></i>
      </button>
    </span>
    <!--Add Project Modal-->
    <modal class="modalBG" name="add-modal">
      <div class="addProjectContent">
        <h5>Add new Project</h5>
        <form>
          <input
            id="project-name-input"
            name="projectName"
            type="text"
            placeholder="Project Name"
            v-model="projectName"
            required
          />
          <input
            @click="addNewProject"
            type="submit"
            value="Add Project"
            class="btn-large cyan addBTN"
          />
        </form>
        <button @click="addHide" class="btn-large red cancelBTN">Cancel</button>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import TeamCardMain from "./TeamCardMain";

export default {
  name: "ProjectCol",
  components: {
    TeamCardMain,
  },
  data() {
    return {
      storeID: null,
      projectName: null,
    };
  },
  props: ["projData"],
  methods: {
    ...mapActions(["fetchProjects", "deleteProject", "addProject"]),
    deleteCol(id) {
      this.deleteProject(id);
      this.fetchProjects();
      this.delHide();
    },
    addNewProject(e) {
      e.preventDefault();

      if (this.projectName) {
        const newProj = this.projectName;
        this.addProject({
          project: newProj,
        });
        this.addHide();
      }
    },

    delShow(id) {
      this.$modal.show("delete-modal");

      this.storeID = id;
    },
    delHide() {
      this.$modal.hide("delete-modal");

      this.storeID = null;
    },
    addShow() {
      this.$modal.show("add-modal");
    },
    addHide() {
      this.$modal.hide("add-modal");

      this.projectName = null;
    },
  },
};
</script>

<style>
.tt-project-section {
  height: 100%;
}

.tt-project-col {
  width: 40%;
  height: 100%;
  border-right: solid #d1d1d1;
  border-left: solid #d1d1d1;
  background: white;
  display: inline-block;
  margin-right: -4px;
  white-space: nowrap;
  vertical-align: top;
}

.tt-project-col-container {
  width: 90%;
  height: 100%;
  margin-left: 5%;
}

.tt-project-col-title {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 20px;
  font-size: 40px;
  text-align: center;
  font-weight: 200;
  border-bottom: solid #d1d1d1;
  border-top: solid #d1d1d1;
}

.project-del {
  color: white;
  height: 40px;
}

.tt-project-col-teamlist {
  width: 95%;
  height: 75%;
  margin-top: 20px;
  margin-left: 2.5%;
  overflow-y: scroll;
}

.tt-addProject {
  width: 100px;
  display: inline-block;
  margin: 20px;
}

.add-btn {
  width: 80px;
  height: 80px;
  position: relative;
  margin-bottom: 1300px;
  margin-left: 40px;
}

.modalBG {
  background: rgba(0, 0, 0, 0.1);
}

.deleteModalContent {
  margin-top: 10%;
}

.addProjectContent {
  width: 80%;
  margin: 0 auto;
  margin-top: 10%;
}
.cancelBTN {
  float: right;
}

.addBTN {
  float: left;
}
</style>
