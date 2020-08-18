import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

const db = require('../../firebase/db');
const dotEnv = require('dotenv');

dotEnv.config({ path: '../../config/config.env' });

const PROJECTS = process.env.PROJECTS_BD;

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        projects: []
    },
    getters: {
        allProjects: (state) => state.projects
    },
    mutations: {
        storeProjects: (state, data) => {
            state.projects = data;
        },
    },
    actions: {
        async fetchProjects({ commit }) {
            try {
                const data = await db.collection('teamTackProjects')
                    .get()
                    .then((snapshot) => {
                        var dataElements = [];
                        snapshot.docs.forEach((doc) => {
                            dataElements.push(doc.data());
                        })
                        return dataElements;
                    })

                commit('storeProjects', data);
            } catch (err) {
                console.error(err);
            }
        }


    }
})