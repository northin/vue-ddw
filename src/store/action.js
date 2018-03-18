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
  isLogin(store, data){
    return api.isLogin(data).then(res => {
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
  bookType(store, data){
    return api.bookType(data).then(res => {
      return res;
    })
  },
  bookStyle(store, data){
    return api.bookStyle(data).then(res => {
      return res;
    },resject=>{
      alert(resject)
      return resject;
    }).catch(function(error) {
      return error;
    })
  },
  book(store, data){
    return api.book(data).then(res => {
      return res;
    })
  },
  bookSearch(store, data){
    return api.bookSearch(data).then(res => {
      return res;
    })
  },
  styleSearch(store, data){
    return api.styleSearch(data).then(res => {
      return res;
    })
  },
  bookById(store, data){
    return api.bookById(data).then(res => {
      return res;
    })
  },
  collectionQry(store, data){
    return api.collectionQry(data).then(res => {
      return res;
    })
  },
  collectionDel(store, data){
    return api.collectionDel(data).then(res => {
      return res;
    })
  },
  collectionInsert(store, data){
    return api.collectionInsert(data).then(res => {
      return res;
    })
  },


  cartQry(store, data){
    return api.cartQry(data).then(res => {
      return res;
    })
  },
  cartDel(store, data){
    return api.cartDel(data).then(res => {
      return res;
    })
  },
  cartInsert(store, data){
    return api.cartInsert(data).then(res => {
      return res;
    })
  },
  cartUpdate(store, data){
    return api.cartUpdate(data).then(res => {
      return res;
    })
  },


  orderQry(store, data){
    return api.orderQry(data).then(res => {
      return res;
    })
  },
  orderDel(store, data){
    return api.orderDel(data).then(res => {
      return res;
    })
  },
  orderInsert(store, data){
    return api.orderInsert(data).then(res => {
      return res;
    })
  },
  orderUpdate(store, data){
    return api.orderUpdate(data).then(res => {
      return res;
    })
  },
  pay(store, data){
    return api.pay(data).then(res => {
      return res;
    })
  },

}

export default actions
