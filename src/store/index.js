import Vue from "vue";
import Vuex from "vuex";

const db = require("../../firebase/db");

Vue.use(Vuex);

const projectsCollection = "teamTackProjects";
const membersCollection = "teamTackMembers";

export default new Vuex.Store({
  state: {
    projects: [],
    teamMembers: [],
    placeholderIMG:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  },
  getters: {
    allProjects: state => state.projects,
    getTeam: state => state.teamMembers,
    getPlaceholder: state => state.placeholderIMG
  },
  mutations: {
    storeProjects: (state, data) => {
      state.projects = data;
    },
    storeMembers: (state, data) => {
      state.teamMembers = data;
    },
    emptyCommit: () => {}
  },
  actions: {
    async fetchMembers({ commit }) {
      try {
        const data = await db
          .collection(membersCollection)
          .get()
          .then(snapshot => {
            var dataElements = [];
            snapshot.docs.forEach(doc => {
              dataElements.push({
                ID: doc.id,
                data: doc.data()
              });
            });
            return dataElements;
          });

        commit("storeMembers", data);
      } catch (err) {
        console.error(err);
      }
    },
    async fetchProjects({ commit }) {
      try {
        const data = await db
          .collection(projectsCollection)
          .get()
          .then(snapshot => {
            var dataElements = [];
            snapshot.docs.forEach(doc => {
              dataElements.push({
                ID: doc.id,
                data: doc.data()
              });
            });
            return dataElements;
          });

        commit("storeProjects", data);
      } catch (err) {
        console.error(err);
      }
    },
    deleteProject({ commit }, id) {
      try {
        db.collection(projectsCollection)
          .doc(id)
          .delete();
      } catch (err) {
        console.error(err);
      }
      commit("emptyCommit");
    },
    addProject({ commit }, projObject) {
      try {
        db.collection(projectsCollection).add(projObject);
      } catch (err) {
        console.error(err);
      }

      commit("emptyCommit");
    },
    addMember({ commit }, memberObject) {
      try {
        db.collection(membersCollection).add(memberObject);
      } catch (err) {
        console.error(err);
      }

      commit("emptyCommit");
    }
  }
});
