import axios from "axios";

const baseURL = import.meta.env.VITE_APP_API_URL;
const timeout = import.meta.env.VITE_APP_API_TIMEOUT;

export const authService = {
  authenticate: async (userName, password) => {
    return await axios.post(
      `${baseURL}authenticate`,
      {},
      {
        auth: { username: userName, password: password },
        timeout: timeout,
      }
    );
  },
};
