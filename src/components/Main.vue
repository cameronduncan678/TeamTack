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
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchProjects"]),
  },
  computed: {
    ...mapGetters(["allProjects", "getTeam"]),
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