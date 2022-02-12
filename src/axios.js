import axios from "axios";

const instance = axios.create({
    // baseURL: "http://meety-server-1:9090",
    baseURL: "http://0.0.0.0:9090",
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        // post: {
        //     "Access-Control-Allow-Origin": "*",
        //     'Content-Type': 'application/json;charset=utf-8'
        // }
    }
});
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export default instance;