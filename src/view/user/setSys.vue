<template>
  <div class="userInfo">
    <x-header style="background-color:red">
      <span>设置</span>
    </x-header>
    <div class="">
      <group>
         <cell title="我的资料" is-link @click.native="toUserInfo">
           <span slot="icon" class="title-span">
             <i class="fa fa-user" aria-hidden="true"></i>
           </span>
           <div>

           </div>
         </cell>
         <cell title="收货地址" is-link @click.native="setAddress">
           <span slot="icon" class="title-span">
             <i class="fa fa-location-arrow" aria-hidden="true"></i>
           </span>
         </cell>
         <cell title="关于书城" is-link @click.native="aboutShop">
           <span slot="icon" class="title-span">
             <i class="fa fa-book" aria-hidden="true"></i>
           </span>
         </cell>
       </group>

       <div class="" style="margin-top:20px">
          <x-button type="warn">退出</x-button>
       </div>
    </div>

  </div>
</template>

<script>
import { XHeader,Cell,Group,XButton } from 'vux'
export default {
  name: 'userInfo',
  data () {
    return {
      msg: '',
    }
  },
  components: {
      XHeader,
      Cell,
      Group,
      XButton
  },
  methods:{
    toUserInfo(){
      this.$router.push('/userInfo')
    },
    setAddress(){
      this.$router.push('/setAddress')
    },
    aboutShop(){
      this.$router.push('/aboutShop')
    }
  }
}
</script>


<style scoped>
.title-span{
  padding-right: 10px;
}
.disAbled{
  color: #ccc;
}
.abled{
  color: #999;
}
.popup0-div{
  text-align: center;
  padding:10px 0;
}
</style>
