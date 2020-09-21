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
    memberEdit: {
      ID: "00000",
      data: {
        name: {
          firstname: "Firstname",
          lastname: "Lastname"
        },
        email: "email",
        phone: "phone",
        project: ""
      }
    }
  },
  getters: {
    allProjects: state => state.projects,
    getTeam: state => state.teamMembers,
    getPlaceholder: state => state.placeholderIMG,
    getMemberEdit: state => state.memberEdit
  },
  mutations: {
    storeProjects: (state, data) => {
      state.projects = data;
    },
    storeMembers: (state, data) => {
      state.teamMembers = data;
    },
    storeMemberEdit: (state, data) => {
      state.memberEdit = data;
    },
    emptyCommit: () => {}
  },
  actions: {
    //--- Fetch all teammember data in an Array
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
    //--- Fetch all Projects in an Array
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
    //---Fetch an individual Team member data
    fetchMember({ commit }, data) {
      commit("storeMemberEdit", data);
    },
    //--- Delete a project by doc id
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
    deleteMember({ commit }, id) {
      try {
        db.collection(membersCollection)
          .doc(id)
          .delete();
      } catch (err) {
        console.error(err);
      }
      commit("emptyCommit");
    },
    //--- Add a new Project
    addProject({ commit }, projObject) {
      try {
        db.collection(projectsCollection).add(projObject);
      } catch (err) {
        console.error(err);
      }

      commit("emptyCommit");
    },
    //--- Add a new teammember
    addMember({ commit }, memberObject) {
      try {
        db.collection(membersCollection).add(memberObject);
      } catch (err) {
        console.error(err);
      }

      commit("emptyCommit");
    },
    //--- Edit Team Member
    editMember({ commit }, arr) {
      try {
        db.collection(membersCollection)
          .doc(arr[0])
          .update(arr[1]);
      } catch (err) {
        console.error(err);
      }
      commit("emptyCommit");
    }
  }
});
