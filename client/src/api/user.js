import { basePath, apiVersion } from "./config";

export function signUpApi(data) {
  const url = `${basePath}/${apiVersion}/sign-up`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result.user) {
        return { ok: true, message: "Usuario creado correctamente." };
      } else {
        return { ok: false, message: result.message };
      }
    })
    .catch((err) => {
      return { ok: false, message: err.message };
    });
}
