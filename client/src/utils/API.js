import axios from "axios";

export default {
  // Gets all confession posts
  getConfessions: function() {
    return axios.get("/api/profile");
  },
  // Gets the confession post with the given id
  getConfession: function(id) {
    return axios.get("/api/profile/" + id);
  },
  // Deletes the confession post with the given id
  deleteConfession: function(id) {
    return axios.delete("/api/profile/" + id);
  },
  // Saves a confession post to the database
  saveConfession: function(confessionData) {
    return axios.post("/api/profile", confessionData);
  }
};
