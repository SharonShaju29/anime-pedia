import { createStore } from "vuex";
import axios from "axios";
import { getFirstLettersUppercase } from "@/utils";

const axiosInstance = axios.create({
  // Set your API base URL
  crossDomain: true,
  headers: {
    "Content-Type": "application/json",
  },
});
axiosInstance.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.dHVzaGFyLnNhaW5pQGxvYmIuaW4.1InOHLHAMipL7u-8BHmP92fVbWADx9iiC9H0N1Cc6pc";

const store = createStore({
  state: {
    animeData: {},
    username: "",
  },
  mutations: {
    setAnimeData(state, value) {
      state.animeData = value;
    },
    setUsername(state, value) {
      state.username = value;
    },
  },
  actions: {
    getAnimeHome({ commit }) {
      axiosInstance
        .get(
          "https://tzab40im77.execute-api.ap-south-1.amazonaws.com/prod/getContent"
        )
        .then((res) => {
          commit("setAnimeData", res.data.content);
          commit(
            "setUsername",
            getFirstLettersUppercase(res.data.content.userName)
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    // Your getters go here
  },
});

export default store;
