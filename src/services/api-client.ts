import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance.get<T>(this.endpoint).then((res) => res.data);
  };
}

export default APIClient;
