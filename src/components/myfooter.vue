<template>
  <div class="footer">
    <ul class="myfooter">
      <li :class="(isActive == 'index'? 'active':'')" @click="goto('index')">
        <i class="fa fa-home" aria-hidden="true"></i>
        <div>首页</div>
      </li>
      <li :class="(isActive == 'search'? 'active':'')" @click="goto('search')">
        <i class="fa fa-bars" aria-hidden="true"></i>
        <div>分类</div>
      </li>
      <li :class="(isActive == 'cart'? 'active':'')" @click="goto('cart')">
        <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
        <div>购物车</div>
        <badge v-if="cartNum != 0" :text="cartNum" style="    position: absolute;top: 0;"></badge>
      </li>
      <li :class="(isActive == 'user'? 'active':'')" @click="goto('user')">
        <i class="fa fa-user" aria-hidden="true"></i>
        <div>我的</div>
        <badge v-if="userNum != 0"  :text="userNum" style="    position: absolute;top: 0;"></badge>
      </li>
    </ul>
  </div>
</template>

<script>
import { Badge } from 'vux'
export default {
  name: 'myfooter',
  data () {
    return {
      isActive:'index',
      userNum:0,
      cartNum:0
    }
  },
  components: {
    Badge
  },
  created:function(){
    // console.log(this.$route)
    let urlParams = this.$route.path;
    this.isActive = urlParams.substr(1)
    this.$store.dispatch("isLogin").then(res=>{
      if(!res.data.errorCode){
        return true
      }else{
        return false
      }
    }).then(res=>{
      if(res){
        this.$store.dispatch("cartQry",{}).then(res=>{
          this.cartNum = res.data.length
        })
        this.$store.dispatch("orderQryAll",{order_status:1}).then(res=>{
          this.userNum = res.data.length;
        })
      }
    })
  },
  methods:{
    goto:function(str){
      this.$router.push(str)
      this.isActive = str
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myfooter{
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding-left: 0;
  margin: 0px;
  height: 50px;
  border-top: 1px solid #ccc;
}
.myfooter li{
  list-style: none;
  width: 25%;
  cursor: pointer;
  color: #666;
}
.myfooter li.active{
  color:red;
}
.myfooter li i{
  margin-top: 5px;
  font-size: 25px;
}
.myfooter li div{
  font-size: 12px;
}
</style>
