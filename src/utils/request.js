import axios from 'axios';
import {BASE_URI} from "../constants/config";

export const request = axios.create({
    baseURL: BASE_URI,
    // 此处添加默认 header
    headers: {

    },
})


// 请求拦截器
request.interceptors.request.use((config) => {
    // 此处可以拦截所有请求
    return config;
}, err => Promise.reject(err));


request.interceptors.response.use((response) => {
    // 此处可以拦截所有响应结果
    return response;
}, err => Promise.reject(err));