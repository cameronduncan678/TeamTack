import Vue from "vue";
import Vuex from "vuex";

const db = require("../../firebase/db");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [],
    teamMembers: [
      {
        name: "John Doe",
        email: "john@Doe.com",
        phone: "012324812222",
        project: null,
        photo:
          "https://www.neilsonreeves.co.uk/wp-content/uploads/Corporate-Headshot-grey-background.jpg"
      },
      {
        name: "Jane Doe",
        email: "jane@Doe.com",
        phone: "09123673813",
        project: "!DO NOT DELETE!",
        photo:
          "https://i.pinimg.com/originals/67/5f/40/675f409cfcbea9281f6649ca096caf25.jpg"
      },
      {
        name: "Brabara McDougal",
        email: "bard@workemail.com",
        phone: "0989213456",
        project: "!DO NOT DELETE!",
        photo:
          "https://www.epicscotland.com/wp-content/uploads/2019/09/Business-Headshot-Women-015.jpg"
      },
      {
        name: "Elizabeth Elysie",
        email: "elizabeth@workemail.com",
        phone: "0666981134",
        project: "Test Proj",
        photo:
          "https://www.glamourshots.com/wp-content/uploads/2015/08/Business_Women_Head_Shot-799x600.jpg"
      }
    ]
  },
  getters: {
    allProjects: state => state.projects,
    getTeam: state => state.teamMembers
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

      commit("emptyCommit");
    }
  }
});
