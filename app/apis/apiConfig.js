import baseUrl from "./host";
import apisauce from "apisauce";
import {getUserTokenFromCookie} from './cookies'

const tokens = getUserTokenFromCookie()
const apiConfig = apisauce.create({
  baseURL: "http://localhost:5001/api/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    "Authorization": "Bearer " + tokens

  },
});

apiConfig.addRequestTransform((request) => {
  request.headers["Access-Control-Allow-Origin"] = "*";
  request.headers["Access-Control-Allow-Methods"] =
    "GET,PUT,POST,DELETE,PATCH,OPTIONS";
    request.headers["Access-Control-Allow-Credentials"] =
    true;
});

apiConfig.addResponseTransform((response) => {
  if (response.status === 401) {
    // Handle unauthorized response
  }
});

export default apiConfig;
