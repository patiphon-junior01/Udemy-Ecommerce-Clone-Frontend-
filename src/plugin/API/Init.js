import axios from "axios";

// console.log(process.env.BASEURL);
// "http://localhost:3005"
const Axios = axios.create({
  baseURL: "https://www.melivecode.com",
});
Axios.defaults.timeout = 25000;

export default Axios;
