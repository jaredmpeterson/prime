import axios from "axios";

const instance = axios.create({
  baseURL: "https://prime-diet.firebaseio.com/"
});

export default instance;
