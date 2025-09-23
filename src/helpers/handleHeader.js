async function authHeaderJson(encodedCredentials) {
  let headers = {
    Authorization: `Basic ${encodedCredentials}`,
  };
  return headers;
}

export const buildHeaders = {
  authHeaderJson,
};
