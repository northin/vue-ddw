<template lang="html">
  <div class="login">
    <div class="login-head">
      <span @click="back">返回</span>
    </div>
    <h2>账号密码登录</h2>
    <div class="login-form">
      <x-input title="" ref="user" v-model="user" :is-type="isEmailOrMobile" required @on-change="userChange" :icon-type="userIconType" placeholder="请输入手机号／邮箱">
        <div slot="label" style="padding-right:10px;">
           <i class="fa fa-user-o" aria-hidden="true"></i>
        </div>
      </x-input>
      <x-input title="" ref="pass" v-model="pass" type="password" required @on-change="passChange" @on-focus="passChange" is-type="password" :icon-type="passIconType" placeholder="请输入密码">
        <div slot="label" style="padding-right:14px;">
          <i class="fa fa-lock" aria-hidden="true"></i>
        </div>
      </x-input>
      <x-button :disabled="isDis" @click.native="login" style="margin-top:20px;">登陆</x-button>
    </div>
    <div class="login-footer">
      <span><a href="#">忘记密码？</a></span>
      <span><a href="#/register">立即注册</a></span>
    </div>
  </div>
</template>

<script>
import { XInput, Group, XButton, Cell } from 'vux'
export default {
  name:'login',
  data(){
    return {
      user:'',
      userIconType:'',
      pass:'',
      passIconType:'',
      isDis:true,
      isEmailOrMobile:function (value) {
        return {
          valid: value != '',
          msg: 'Must be 2333'
        }
      },
    }
  },
  methods:{
    userChange(){
      if(this.$refs.user.valid && this.$refs.pass.valid && this.pass != ''){
        this.isDis = false;
      }else{
        this.isDis = true;
      }
    },
    passChange(){
      if(this.$refs.user.valid && this.$refs.pass.valid && this.pass != ''){
        this.isDis = false;
      }else{
        this.isDis = true;
      }
    },
    back(){
      this.$router.go(-1);
    },
    login(){
      let data = {}
      if(isNaN(this.user)){
        data.email = this.user;
      }else{
        data.mobile = this.user;
      }
      data.password = this.pass
      this.$store.dispatch("login",data).then(res => {
          if(!res.data.errorCode){
            // const self = this;
            this.$toast('登录成功',()=>this.$router.push('/user'))
            // this.$vux.alert.show({
            //  title: '登录成功',
            //  content:res.data.errorMessage,
            //  onShow () {
            //  },
            //  onHide () {
            //    self.$router.push('/index')
            //  }
            // })
          }else{
            this.$toast('登录失败')
          //   this.$vux.alert.show({
          //    title: '登录失败',
          //    content:res.data.errorMessage,
          //    onShow () {
          //    },
          //    onHide () {
           //
          //    }
          //  })
          }

      })
    }
  },
  components: {
    XInput,
    XButton,
    Group,
    Cell
  }
}
</script>

<style lang="css" scoped>
.login{
  padding: 0px 20px;
}
.login-head{
  margin:20px 0px;
  text-align: left;
  padding-left: 10px;

}
.login-footer{
  display: flex;
  justify-content: space-between;
  padding:10px;

}
.login-footer a{
  color: red;
}
</style>
