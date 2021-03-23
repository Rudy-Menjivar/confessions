import axios from "axios"

export default {
    Login: function(userData) {
        // return axios.post("/api/login", userData);
        return axios.get("/api/login", { params: { data: userData}});
    },
    Signup: function(userData) {
        return axios.post("/api/signup", userData);
    }
}