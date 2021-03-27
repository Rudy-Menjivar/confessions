import axios from "axios"

export default {
    signup: function(userData) {
        return axios.post("/api/signup", userData);
    },
    login: function(userData) {
        // This route is under testing, please don't remove now
        // return axios.get("/api/login", { params: { data: userData}});
        return axios.post("/api/login", userData);
    },
    logout: function(userData) {
        return axios.post("/api/logout", userData);
    },
    getUserData: function (userData) {
        return axios.get("/api/user_data/",
        {
            headers:  {
                Authorization: `Bearer ${sessionStorage.getItem("myToken")}`
            }
        },
        { params: { data: userData}});
    },
}
