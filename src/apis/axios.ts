/*
 * @Author: LOG
 * @FilePath: \vue3-netease\src\apis\axios.ts
 * @Descripttion:
 * @version:
 * @Date: 2022-05-02 21:45:33
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-04 14:08:30
 */
import axios from "axios";
import qs from "qs";

// axios.defaults.baseURL = "/api";

//post请求头
// axios.defaults.headers.post["Content-Type"] = "application/json";

//允许跨域携带cookie信息
// axios.defaults.withCredentials = true;

//设置超时
axios.defaults.timeout = 2000;
// 请求拦截
axios.interceptors.request.use(
  (config) => {
    // console.log("axios请求",config);
    return config;
  },
  (error) => {
    console.log("请求出错");
    return Promise.reject(error);
  }
);

// 响应拦截
axios.interceptors.response.use(
  (response) => {
    // console.log("axios响应：",response)
    if (response.status == 200) {
      // 返回值正确的情况下，如果有token值将其存储到localStorage中
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      
      // 返回值正确的情况下，如果有cookies值将其存储到cookie中
      if (response.data.cookie) {
        document.cookie = response.data.cookie;
      }
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    console.log("响应拦截:", error);
    return Promise.reject(error);
    // alert(JSON.stringify(error));
  }
);

export default {
  post(url: any, data: any) {
    return new Promise((resolve, reject) => {
      axios({
        method: "post",
        url,
        data: qs.stringify(data),
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  get(url: any, data: any) {
    return new Promise((resolve, reject) => {
      axios({
        method: "get",
        url,
        params: data,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
