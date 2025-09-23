import axios from "axios";
import { buildHeaders } from "./../helpers/handleHeader";

const baseURL = import.meta.env.VITE_APP_API_URL;
const timeout = import.meta.env.VITE_APP_API_TIMEOUT;

export const dexService = {
  uploadfile: async (formData, encodedCredentials) => {
    let headers = await buildHeaders.authHeaderJson(encodedCredentials);
    delete headers["Content-Type"];

    return await axios
      .post(`${baseURL}dataexchange/uploadDexFile`, formData, {
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
