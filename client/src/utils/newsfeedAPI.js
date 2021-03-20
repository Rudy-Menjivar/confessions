import axios from "axios";

export default {
  // Gets all confession posts
  getConfessions: function() {
    return axios.get("/api/newsfeed");
  },
  // Gets the confession post with the given id
  getConfession: function(id) {
    return axios.get("/api/newsfeed/" + id);
  },
  // Deletes the confession post with the given id
  deleteConfession: function(id) {
    return axios.delete("/api/newsfeed/" + id);
  },
  // Saves a confession post to the database
  saveConfession: function(confessionData) {
    return axios.post("/api/newsfeed", confessionData);
  },
  // Update a confession post with a given id
  updateConfession: function(id, body) {
    return axios.put("/api/newsfeed/" + id, body);
  }
};
