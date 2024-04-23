import axios from "axios";

import LOCAL_STORAGE_KEYS from "@/constants/local-storage-keys";
import { ApiStatuses } from "@/types/api-statuses";

import { ENDPOINTS } from "./endpoints";

const config = {
  baseURL: ENDPOINTS.BASE_URL,
  validateStatus: (status: number) => status >= 200 && status < 400,
  timeout: 60000,
};

let isRefreshing = false;
let failedQueue: ((token: string) => Promise<any> | void)[] = [];

// EX: Push callback to failedQueue for retry request
function addFailedQueue(cb: (token: string) => Promise<any> | void) {
  failedQueue.push(cb);
}

function processFailedQueue(token: string) {
  failedQueue.map((cb) => cb(token));
  failedQueue = [];
}

function reloadApp() {
  localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);

  isRefreshing = false;
  failedQueue = [];
  // force reload app, reset all state
  // window.location.replace(`${LOCATION.SIGN_IN}?redirect=${window.history.state.as}`);
}

const axiosClient = axios.create(config);

const createAuthToken = (token: string) => `Bearer ${token}`;

export function setAppAccessToken(token: string) {
  axiosClient.defaults.headers.Authorization = createAuthToken(token);
}

axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config: originalRequest, response } = error;

    // EX: Handle 401 error
    if (response?.status === ApiStatuses.UNAUTHORIZED) {
      const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);

      // EX: Check if token is expired
      if (!token) {
        reloadApp();
        return Promise.reject(error);
      }

      // EX: Check if token is refreshing
      if (!isRefreshing) {
        isRefreshing = true;

        try {
          const refreshResponse = await axios({
            ...config,
            method: "post",
            url: "/auth/refresh",
            data: { token },
          });

          const newAccessToken = refreshResponse.data.payload;

          localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, newAccessToken);

          isRefreshing = false;

          setAppAccessToken(newAccessToken);

          // EX: Add callback to failedQueue for retry request and process it
          return await new Promise((resolve) => {
            addFailedQueue((newToken: string) => {
              originalRequest.headers.Authorization = createAuthToken(newToken);

              resolve(axiosClient(originalRequest));
            });

            processFailedQueue(newAccessToken);
          });
        } catch (_e) {
          reloadApp();
          return Promise.reject(error);
        }
      }

      // EX: ONLY add callback to failedQueue for retry request
      return new Promise((resolve) => {
        addFailedQueue((newToken: string) => {
          originalRequest.headers.Authorization = createAuthToken(newToken);

          resolve(axiosClient(originalRequest));
        });
      });
    }

    // EX: Handle other error
    return Promise.reject(error);
  },
);

export default axiosClient;
