import api from '../api'
import * as types from './types.js'

const actions = {
  login(store, loginData){
    return api.userLogin(loginData).then(res => {
      // console.log(res);
      if(!res.data.errorCode){
        store.commit(types.LOGIN, res.data.data);
      }else{
        store.commit(types.LOGINFAIL);
      }
      return res;
    })
  },
  loginOut(store, loginData){
    return api.userLoginOut(loginData).then(res => {
      // console.log(res);
      if(!res.data.errorCode){
        store.commit(types.LOGINOUT);
      }else{
        // store.commit(types.LOGINFAIL);
      }
      return res;
    })
  },
  register(store, data){
    return api.register(data).then(res => {
      return res;
    })
  },
  userDetail(store, data){
    return api.userDetail(data).then(res => {
      return res;
    })
  },
  userDetailUpdate(store, data){
    return api.userDetailUpdate(data).then(res => {
      return res;
    })
  },
  addressInsert(store, data){
    return api.addressInsert(data).then(res => {
      return res;
    })
  },
  addressSelect(store, data){
    return api.addressSelect(data).then(res => {
      return res;
    })
  },
  addressUpdate(store, data){
    return api.addressUpdate(data).then(res => {
      return res;
    })
  },
  addressDelete(store, data){
    return api.addressDelete(data).then(res => {
      return res;
    })
  },


}

export default actions
