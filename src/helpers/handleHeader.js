async function authHeaderJson(userName, password) {
  const credentials = btoa(`${userName}:${password}`);

  let headers = {
    // "Content-Type": "application/json; charset=utf-8",
    // "Access-Control-Allow-Origin": import.meta.env.VITE_APP_ALLOWED_ORIGIN,
    Authorization: `Basic ${credentials}`,
  };
  return headers;
}

export const buildHeaders = {
  authHeaderJson,
};
