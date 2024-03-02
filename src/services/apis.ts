import axios from "axios";

export function doLogin() {
    return axios
        .post("/api/login", {
            username: "ankit",
            password: "ankit@1234",
        })
}