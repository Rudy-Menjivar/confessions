import axios from "axios";

export default {
  // Gets all categories 
  getCategories: function() {
    return axios.get("/api/profile");
  }
};
