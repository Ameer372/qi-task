import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance
      .get<T>(this.endpoint)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  getMerchant = (id: string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  getOrder = (id: string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  login = (username: string, password: string) => {
    return axiosInstance
      .post<T>(this.endpoint, { username, password })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };
}

export default APIClient;
