import axios from "axios";

const instance = axios.create({
  baseURL: "https://nexisa-backend.vercel.app/api",
});

export default instance;
