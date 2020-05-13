import axios from "axios";

export default {
  // Saves a user to the database
  saveUser:function(userData) {
    return axios.post("http://localhost:3002/api/users", userData);
  },

  getUsers: function () {
    return axios.get("/api/users");
  },

 
};