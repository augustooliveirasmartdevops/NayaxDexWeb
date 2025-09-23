import axios from "axios";
import { buildHeaders } from "./../helpers/handleHeader";

const baseURL = import.meta.env.VITE_APP_API_URL;
const timeout = import.meta.env.VITE_APP_API_TIMEOUT;

export const authService = {
  uploadfile: async (file) => {
    let headers = await buildHeaders.authHeaderJson();
    return await axios
      .post(`${baseURL}uploadDexFile`, file, {
        timeout: timeout,
        headers: headers,
      })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error;
      });
  },
};
