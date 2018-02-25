
import * as types from './types.js'


const mutations = {
  [types.LOGIN]: (state, data) => {
    state.token = data;
    window.sessionStorage.setItem('token', data);
  },
  [types.LOGINOUT]: (state, data) => {
    window.sessionStorage.removeItem('token');
    state.token = window.sessionStorage.token;

  },
  [types.LOGINFAIL]: (state, data) => {
    // console.log(this;
    // state.isLoginFail = true
    // state.LoginSuccess = f
    //
  }
}



export default mutations
