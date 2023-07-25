import axios from "axios";

export const baseAPI = axios.create({
  baseURL: "/api/Cuota/ObtenerCuotas",
});

export async function fetchData(url) {
  try {
    const response = await baseAPI.get(url);
    return response.data;
  } catch (error) {
    return error.response.status;
  }
}
