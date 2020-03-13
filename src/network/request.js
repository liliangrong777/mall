import axios from 'axios'
//最终方案
const request = (config) => {
  //1、创建instance实例
  const instance1 = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/wh',
    timeout: 5000
  })
  //2、axios拦截器
  //2.1请求拦截作用
  instance1.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })
  //2.2响应拦截
  instance1.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  //3、发送真正的网络请求
  return instance1(config)
}
export {
  request
};
