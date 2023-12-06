import * as SecureStore from "expo-secure-store";
import Axios, { Method } from "axios";

export const Client = async (params) => {
  const token = await SecureStore.getItemAsync("accessToken");
  const { path, method, data, contentType = "application/json" } = params;
  const baseURL = "";

  const headers = {
    ...(token && {
      Authorization: `Bearer ${token}`,
    }),
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  let url = `${baseURL}${path}`;

  const requestBody = {
    method,
    url,
    timeout: 20000,
    headers,
    data: JSON.stringify(data),
    responseType: "json",
  };

  try {
    const response = await Axios(requestBody);
    return response;
  } catch (error) {
    throw error;
  }
};
