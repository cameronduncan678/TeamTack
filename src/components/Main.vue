<template>
  <div class="tt-project-field">
    <ProjectCol :projData="allProjects" />
  </div>
</template>

<script>
import ProjectCol from "@/components/ProjectCol";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Main",
  methods: {
    ...mapActions(["fetchProjects"]),
  },
  computed: {
    ...mapGetters(["allProjects", "getTeam"]),
    filterData() {
      var projects = this.allProjects();
      var team = this.getTeam();

      var DataModel = { projectDoc: null, teamMembers: [] };
      var DataModelArray = [];

      projects.forEach((proj) => {
        DataModel.projectDoc = proj;

        team.forEach((member) => {
          if (member.data.project == proj.data.project) {
            DataModel.teamMembers.push(member);
          }
        });
      });

      return DataModelArray;
    },
  },
  created() {
    this.fetchProjects();
  },
  updated() {
    this.fetchProjects();
  },
  components: {
    ProjectCol,
  },
};
</script>

<style>
.tt-project-field {
  float: left;
  height: 80vh;
  width: 75%;
  margin-top: 10px;
  margin-left: 10px;
  background: url("../assets/images/BGfield.png") no-repeat;
  background-size: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
</style>