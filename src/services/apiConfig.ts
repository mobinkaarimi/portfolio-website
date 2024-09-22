import axios from "axios";

export const baseUrl = "https://mobin-karimi-portfolio.chbk.run/api/v1/";
export const axiosInstance = axios.create({
  baseURL: baseUrl,
});
