<template lang="html">
  <div class="login">
    <div class="login-head">
      <span @click="back">返回</span>
    </div>
    <h2>注册新账号</h2>
    <div class="login-form">
      <x-input title="" ref="user" v-model="user" :max="13" is-type="china-mobile" required @on-change="userChange" :icon-type="userIconType" placeholder="请输入手机号">
        <div slot="label" style="padding-right:10px;">
           <i class="fa fa-user-o" aria-hidden="true"></i>
        </div>
      </x-input>
      <x-input title="" ref="pass" v-model="pass" type="password" required @on-change="passChange" @on-focus="passChange" is-type="password" :icon-type="passIconType" placeholder="请输入密码">
        <div slot="label" style="padding-right:14px;">
          <i class="fa fa-lock" aria-hidden="true"></i>
        </div>
      </x-input>
      <x-input title="" ref="pass1" v-model="pass1" :equal-with="pass" type="password" required @on-change="passChange" @on-focus="passChange" is-type="password" :icon-type="passIconType" placeholder="请确认密码">
        <div slot="label" style="padding-right:14px;">
          <i class="fa fa-lock" aria-hidden="true"></i>
        </div>
      </x-input>
      <x-button :disabled="isDis" @click.native="register" style="margin-top:20px;">注册</x-button>
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
      pass1:'',
      passIconType:'',
      isDis:true,
    }
  },
  methods:{
    userChange(){
      if(this.$refs.user.valid && this.$refs.pass.valid && this.pass != '' && this.$refs.pass1.valid && this.pass1 != ''){
        this.isDis = false;
      }else{
        this.isDis = true;
      }
    },
    passChange(){
      if(this.$refs.user.valid && this.$refs.pass.valid && this.pass != '' && this.$refs.pass1.valid && this.pass1 != ''){
        this.isDis = false;
      }else{
        this.isDis = true;
      }
    },
    back(){
      this.$router.go(-1);
    },
    register(){
      let data = {}
      data.mobile = this.user;
      data.password = this.pass

      this.$store.dispatch("register",data).then(res => {
          if(!res.data.errorCode){
            const self = this;
            this.$vux.alert.show({
             title: '注册成功',
             content:res.data.errorMessage,
             onShow () {
             },
             onHide () {
               self.$router.push('/login')
             }
            })
          }else{
            this.$vux.alert.show({
             title: '注册失败',
             content:res.data.errorMessage,
             onShow () {
             },
             onHide () {

             }
           })
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
