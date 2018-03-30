import config from '../config/config'
var mixin = {
  computed:{
    srcPort:function(){
      return config.url+"/book/download?filename="
    }
  }
}

export default mixin;
