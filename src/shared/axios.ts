import axios from "axios";
import { API_URL } from "./constants";

const instance = axios.create({
  baseURL: API_URL,
  params: {
    api_key: "84d23d1ea2504e1e6b171a06af819654",
  },
});

export default instance;
