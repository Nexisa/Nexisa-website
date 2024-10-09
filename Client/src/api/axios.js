import axios from "axios";

const instance = axios.create({
  baseURL: "https://nexisa-website.vercel.app/api",
});

export default instance;
