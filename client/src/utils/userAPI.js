import axios from "axios"

export default {
    Login: function(userData) {
        // return axios.post("/api/login", userData);
        return axios.post("/api/login", userData);
    },
    Signup: function(userData) {
        return axios.post("/api/signup", userData);
    }
}