/*
 * @Author: LOG
 * @FilePath: \vue3-netease\src\apis\request.ts
 * @Descripttion:
 * @version:
 * @Date: 2022-05-02 21:45:33
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-05 14:26:56
 */
import axios from "./axios";
let { get, post } = axios;
// 例子
export const test_get = (data: object) => get(`/test`, data);
export const test_post = (data: object) => post(`/test`, data);
export const getArtist = (data: object) => get(`/api/artist/list`, data);

// 手机密码登录
export const loginCellphone = (data: object) => get(`/api/login/cellphone`, data);
// 获取轮播图
export const getBanner = (data: object) => get(`/api/banner`, data);
// 获取推荐歌单
export const getPersonalized = (data: object) => get(`/api/recommend/resource`, data);
// 获取最新音乐
export const getNewSong = (data: object) => get(`/api/personalized/newsong`, data);