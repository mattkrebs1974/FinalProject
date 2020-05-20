import axios from "axios";

export default {
  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },

  getUsers: function () {
    return axios.get("/api/users");
  },

  login: function (user) {
    return axios.post("/api/users/login", user);
  },

  performancedata: function () {
    console.log("performance it is");
    return axios.get("/api/data/performance");
  },

  surveydata: function () {
    console.log("survey it is");
    return axios.get("/api/data/survey");
  },
};
