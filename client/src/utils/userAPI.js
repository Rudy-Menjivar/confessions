import axios from "axios"

export default {
    Signup: function(userData) {
        return axios.post("/api/signup", userData);
    }
}