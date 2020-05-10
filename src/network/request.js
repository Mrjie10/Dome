import axios from 'axios'
export function request(config) {
const instance = axios.create({
  baseURL: 'http://152.136.185.210:8000/api/n3'
})
  instance.interceptors.response.use(config => { // 响应 拦截     --request 请求拦截
    // console.log(config.data);
    return config.data

  },error => {
    console.log(error);
  });
  return instance(config)
}