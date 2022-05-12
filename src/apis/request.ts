/*
 * @Author: LOG
 * @FilePath: \vue3-netease\src\apis\request.ts
 * @Descripttion:
 * @version:
 * @Date: 2022-05-02 21:45:33
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-12 23:35:46
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
// 获取精品歌单
export const getTopPlayList = (data: object) => get(`/api/top/playlist/highquality`, data);
// 获取热门歌单分类
export const getPlayListHot = (data: object) => get(`/api/playlist/hot`, data);
// 获取全部歌单分类tag
export const getPlayListCat = (data: object) => get(`/api/playlist/catlist`, data);
// 获取指定歌单类型的歌单  空参数则为全部
export const getPlayList = (data: object) => get(`/api/top/playlist`, data);
// 获取精品歌单标签列表
export const getHighPlayListTags = (data: object) => get(`/api/playlist/highquality/tags`, data);
// 获取所有排行榜id
export const getRankListID = (data: object) => get(`/api/toplist`, data);
// 根据id获取排行榜详情（缩略）
export const getRankListSymple = (data: object) => get(`/api/toplist/detail`, data);
// 根据id获取排行榜详情（详细）
export const getRankListDetail = (data: object) => get(`/api/playlist/detail`, data);

// 获取歌手列表
export const getArtistList = (data: object) => get(`/api/artist/list`, data);


// 获取歌单内歌曲详细信息
export const getPlayListDetail = (data: object) => get(`/api/playlist/detail`, data);

// 播放歌曲
export const getSongUrl = (data: object) => get(`/api/song/url`, data);
// 歌曲的详细信息
export const getSongDetail = (data: object) => get(`/api/song/detail`, data);
// 获取每日推荐歌单
export const getRecommendMusic = (data: object) => get(`/api/recommend/songs`, data);



