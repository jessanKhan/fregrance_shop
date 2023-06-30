import apiConfig from "../apiConfig";
import {
  SIGNUP,
  LOGIN,
  REQUEST_PASSWORD_RESET,
  PASSWORD_RESET,
  GET_USER,
} from "./endpoints";

const api = apiConfig;


export const signup = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("submitted",data)
      const response = await api.post(SIGNUP, data);
      console.log("first response xx: ",response)
      if (response.ok) resolve(response);
      else reject(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const test =async ()=>{
  return new Promise(async (resolve, reject) => {
    try {
      const response = await api.get('test');
      console.log("first response test: ",response)
      if (response.ok) resolve(response);
      else reject(response);
    } catch (error) {
      reject(error);
    }
  });
}

export const login = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await api.post(LOGIN, data);
      if (response.ok) resolve(response);
      else reject(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const requestPasswordReset = async (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await api.get(REQUEST_PASSWORD_RESET + email);
      if (response.ok) resolve(response);
      else reject(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const resetPassword = async (password, token) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await api.post(`${PASSWORD_RESET}/${token}`, {
        password,
      });
      console.log(response);
      if (response.ok) resolve(response);
      else reject(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const getUser = async (user_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await api.get(`users?user_id=${user_id}`);
      console.log(response);
      if (response.ok) resolve(response);
      else reject(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const passwordResetAuth = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await api.post(PASSWORD_RESET, data);
      if (response.ok) resolve(response);
      else reject(response);
    } catch (error) {
      reject(error);
    }
  });
};


