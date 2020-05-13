import axios from "axios";

export default {
  // Saves a user to the database
  function (userData) {
    return axios.post("/api/users", userData);
  },

  getUsers: function () {
    return axios.get("/api/users");
  },
};
