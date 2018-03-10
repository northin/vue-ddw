import axios from 'axios'
import store from '../store'
import router from '../router'
import config from '../config/config'

axios.defaults.timeout = 50000
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

//创建一个axios的实例
const instance = axios.create();
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.interceptors.request.use = instance.interceptors.request.use;
axios.interceptors.response.use = instance.interceptors.response.use;
//request拦截器
instance.interceptors.request.use(
  config => {
    //每次请求前检测state的token
    if(store.state.token){
      config.headers.Authorization = `token ${store.state.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err);
  }
)

//response拦截器

instance.interceptors.response.use(
    response => {
        if(response.data.errorCode == -2){
          router.replace({ //跳转到登录页面
              path: '/login',
              query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
          });

        }else{
          return response;
        }

    },
    error => { //默认除了2XX之外的都是错误的，就会走这里
      console.log(error)
        if(error.response){
            switch(error.response.status){
                case 500:
                    // store.dispatch('UserLogout'); //可能是token过期，清除它
                    router.replace({ //跳转到登录页面
                        path: '/login',
                        query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
                    });
            }
        }
        return Promise.reject(error.response);
    }
);

// instance.interceptors.response.use(
//   response => {
//     return response
//   },
//   error => {
//     if(error.response){
//       switch (error.response.status) {
//         case 401:
//           // store.dispatch('userLogin');
//           router.replace({
//             path:'/', //没有token 返回登录页
//             query: { redirect: router.currentRoute.fullPath }  //登录后跳转到该页面
//           })
//
//       }
//
//     }
//     return Promise.reject(error.response.data);
//   }
// )

export default {
  userLogin(data){
    return instance.post(config.url+'/user/login',data);
  },
  userLoginOut(data){
    return instance.post(config.url+'/user/loginOut',data);
  },
  isLogin(data){
    return instance.post(config.url+'/user/isLogin',data);
  },
  register(data){
    return instance.post(config.url+'/user/register',data);
  },
  userDetail(data){
    return instance.post(config.url+'/userDetail/getDetail',data);
  },
  userDetailUpdate(data){
    return instance.post(config.url+'/userDetail/update',data);
  },
  addressInsert(data){
    return instance.post(config.url+'/address/insert',data);
  },
  addressUpdate(data){
    return instance.post(config.url+'/address/update',data);
  },
  addressSelect(data){
    return instance.post(config.url+'/address/get',data);
  },
  addressDelete(data){
    return instance.post(config.url+'/address/delete',data);
  },

  bookType(data){
    return instance.post(config.url+'/book/getType',data);
  },
  bookStyle(data){
    return instance.post(config.url+'/book/getStyle',data);
  },
  book(data){
    return instance.post(config.url+'/book/getBook',data);
  },
  bookSearch(data){
    return instance.post(config.url+'/book/getCondBook',data);
  },
  styleSearch(data){
    return instance.post(config.url+'/book/getCondStyle',data);
  },
  bookById(data){
    return instance.post(config.url+'/book/getById',data);
  },
  collectionQry(data){
    return instance.post(config.url+'/collection/get',data);
  },
  collectionDel(data){
    return instance.post(config.url+'/collection/delete',data);
  },
  collectionInsert(data){
    return instance.post(config.url+'/collection/insert',data);
  },
  cartQry(data){
    return instance.post(config.url+'/cart/get',data);
  },
  cartDel(data){
    return instance.post(config.url+'/cart/delete',data);
  },
  cartInsert(data){
    return instance.post(config.url+'/cart/insert',data);
  },
  cartUpdate(data){
    return instance.post(config.url+'/cart/update',data);
  }




}
