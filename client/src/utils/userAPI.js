import axios from "axios"

export default {
    Login: function(userData) {
        // This route is under testing, please don't remove now
        // return axios.get("/api/login", { params: { data: userData}});
        return axios.post("/api/login", userData);
    },
    Signup: function(userData) {
        return axios.post("/api/signup", userData);
    }
}