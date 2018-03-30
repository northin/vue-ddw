let myPlugin = {}

myPlugin.install = function(Vue){
  // 第一个是提示信息，第二个是点击确认后的事件
  Vue.prototype.$toast = function (message,fn = function(){}) {
    this.$vux.alert.show({
     title: message,
     content:"",
     onShow () {
     },
     onHide () {
       fn()
      //  self.$router.push('/index')
     }
    })

  }

}

export default myPlugin
