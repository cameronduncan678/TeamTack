import Vue from "vue";
import Vuex from "vuex";

const db = require("../../firebase/db");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: []
  },
  getters: {
    allProjects: state => state.projects
  },
  mutations: {
    storeProjects: (state, data) => {
      state.projects = data;
    },
    emptyCommit: () => {}
  },
  actions: {
    async fetchProjects({ commit }) {
      try {
        const data = await db
          .collection("teamTackProjects")
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
        db.collection("teamTackProjects")
          .doc(id)
          .delete();
      } catch (err) {
        console.error(err);
      }
      commit("emptyCommit");
    },
    addProject({ commit }, projObject) {
      try {
        db.collection("teamTackProjects").add(projObject);
      } catch (err) {
        console.error(err);
      }

      commit();
    }
  }
});
