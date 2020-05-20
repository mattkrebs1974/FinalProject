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

  performancedata: function (data) {
    console.log("performance it is");
    return axios.post("/api/data/performance",data);
  },

  surveydata: function (data) {
    console.log("survey it is");
    return axios.post("/api/data/survey",data);
  },
};
