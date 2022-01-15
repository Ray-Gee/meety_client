import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080",
    // headers: {
    //     post: {
    //         "Access-Control-Allow-Origin": "*",
    //         'Content-Type': 'application/json;charset=utf-8'
    //     }
    // }
});
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export default instance;