<template>
  <div class="user">
    <x-header style="background-color:red">
      <span>个人主页</span>
      <div slot="overwrite-left" @click="toSet">
        <x-icon  type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
      </div>
    </x-header>
    <div class="userBoby">

      <div class="userTop">
        <div class="userPic" @click="toUserInfo">
          <img src="" alt="">
        </div>
        <div class="userName" @click="toUserInfo">
          {{ name }}
        </div>
      </div>

      <div class="userMoney">
        <div class="">
          <p>0</p>
          <p>可用礼券</p>
        </div>
        <div class="">
          <p>0</p>
          <p>余额</p>
        </div>
        <div class="">
          <p>0</p>
          <p>电子书余额</p>
        </div>
      </div>

      <div class="myOrder">
        <div class="myOrderTitle">
          <span>我的订单</span>
          <span>查看所有订单></span>
        </div>
        <div class="myOrderContent">
          <ul class="myOrderUl">
            <li>
              <i class="fa fa-credit-card-alt" aria-hidden="true"></i>
              <div>待付款</div>
              <badge text="1" style="    position: absolute;top: -6px;"></badge>
            </li>
            <li>
              <i class="fa fa-caret-square-o-right" aria-hidden="true"></i>
              <div>待发货</div>
              <badge text="1" style="    position: absolute;top: -6px;"></badge>
            </li>
            <li>
              <i class="fa fa-truck" aria-hidden="true"></i>
              <div>待收货</div>
              <badge text="1" style="    position: absolute;top: -6px;"></badge>
            </li>
            <li>
              <i class="fa fa-check-square" aria-hidden="true"></i>
              <div>待评论</div>
              <badge text="1" style="    position: absolute;top: -6px;"></badge>
            </li>
            <li>
              <i class="fa fa-money" aria-hidden="true"></i>
              <div>退款／售后</div>
              <badge text="1" style="    position: absolute;top: -6px;"></badge>
            </li>
          </ul>
        </div>
      </div>


      <div class="myTool">
        <div class="" @click="toCollection">
          <i class="fa fa-star" aria-hidden="true"></i>
          <div>收藏的商品</div>
        </div>
        <div class="">
          <i class="fa fa-home" aria-hidden="true"></i>
          <div>关注的店铺</div>
        </div>
        <div class="">
          <i class="fa fa-user" aria-hidden="true"></i>
          <div>客服帮助</div>
        </div>
        <div class="">
          <i class="fa fa-check" aria-hidden="true"></i>
          <div>安全中心</div>
        </div>
      </div>

    </div>


  </div>
</template>

<script>
import { XHeader,Badge } from 'vux'

export default {
  name: 'user',
  data () {
    return {
      msg: 'index',
      name:'',
    }
  },
  created(){
    this.$store.dispatch("userDetail").then(res => {
      // console.log(res)
      this.name = res.data.name
    })
  },
  components: {
      XHeader,
      Badge
  },
  methods:{
    toSet:function(){
      this.$router.push('/setSys')
    },
    toUserInfo(){
      this.$router.push('/userInfo')
    },
    toCollection(){
      this.$router.push('/collection')
    },
  }
}
</script>


<style scoped>
.userBoby{
  height: 80%;
  overflow: auto;
  background: #eee;
}
.userTop{
  display: flex;
  height: 80px;
  background-color: red;
  color:#fff;
}
.userPic{
  width: 30%;
}
.userPic img{
  width: 60px;
  height: 60px;
  border: 1px solid #ccc;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 50%;
}
.userName{
  line-height: 80px;
  margin-left: 10%;
}
.userMoney{
    display: flex;
    background-color:#fff;
    margin-bottom: 10px;
}
.userMoney div{
  width:33%
}
.userMoney div p{
  margin:5px;
}
.myOrder{
  background-color: #fff;
}
.myOrderTitle{
  display: flex;
  padding: 0 10px;
  border-bottom: 1px solid #eee;
  justify-content: space-between;
}
.myOrderUl{
  display: flex;
  padding-left: 0px;
  padding:10px 0px;
  margin:0 0 10px 0;
}
.myOrderUl li{
  position: relative;
  list-style: none;
  width: 20%;
}
.myOrderUl li div{
  font-size: 12px;
}
.myOrderUl li i{
  color:red;
}
.myTool{
  display: flex;
  background-color: #fff;
  margin-bottom: 10px;
}
.myTool> div{
  width: 25%;
  height: 70px;
  padding-top: 20px;

}
.myTool> div i{
  color: red;
}
.myTool> div div{
  margin-top: 10px;
  font-size: 12px;
}
</style>
