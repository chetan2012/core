import ActivityActionInst from "./../activityTracker/activityAction";
import SessionManagement from "../SessionManagement";
import ErrorActionInst from "./../errorHandler/errorActions";
import { handleNonLoginApiErrors } from "../utility/index";

function getUrl(config) {
  if (config.baseURL) {
    return config.url.replace(`${config.baseURL}`, "");
  }
  return config.url;
}

const genAPIKey = request => `${request.method}_${getUrl(request)}`;

export const setupInterceptor = $http => {
  $http.interceptors.request.use(
    request => {
      const key = genAPIKey(request);
      ActivityActionInst.requestInitiated(key);
      const token = SessionManagement.getCookie("Authorization");
      if (token) {
          request.headers["Authorization"] = `Bearer ${token}`;
      }
      return request;
    },
    error => {
      return { error };
    }
  );

  $http.interceptors.response.use(
    response => {
      const key = genAPIKey(response.config);
      ActivityActionInst.requestFinished(key);
      return response;
    },
    error => {
      const key = genAPIKey(error.config);
      ActivityActionInst.requestFinished(key);
      if (handleNonLoginApiErrors(error.response))
        if(error.response.status != 401)
        ErrorActionInst.errorReceived(error.response.status);
        else {
          const refreshToken = SessionManagement.getCookie("refreshToken");
          if (refreshToken) {
            // refreshTokenApi(error.response, refreshToken);
          }
        }
      return { error };
    }
  );
};
