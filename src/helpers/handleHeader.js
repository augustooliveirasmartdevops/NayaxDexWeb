import { handleLocalStorageCredentials } from "./handleLocalStorageCredentials";

async function authHeaderJson() {
  var credentials = handleLocalStorageCredentials.getCredentials();

  console.log("credentials", credentials);

  let headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": import.meta.env.VITE_APP_ALLOWED_ORIGIN,
    Authorization: `Bearer ${credentials}`,
  };
  return headers;
}

export const buildHeaders = {
  authHeaderJson,
};
