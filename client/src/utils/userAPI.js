import axios from "axios"

export default {
    getSignup: function() {
        return axios.get("/api/signup");
    }
}