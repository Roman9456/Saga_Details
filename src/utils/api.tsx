import axios from "axios";

export const getItemApi = () => {
  return axios.get(import.meta.env.VITE_HOST).then((response) => response.data);
};
export const getItemDetailApi = (id: string) => {
  return axios
    .get(import.meta.env.VITE_HOST + `/${id}`)
    .then((response) => response.data);
};
