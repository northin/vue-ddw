<template lang="html">
  <div class="">
    <x-header style="background-color:red">
      <span>我的收藏</span>
      <span slot="right" @click="modify" size="40" style="fill:#fff;position:relative;top:-2px;left:-3px;">编辑</span>
    </x-header>
    <div class="" style="">
       <swipeout>
         <!-- :ref="'swipeoutItem'+index" -->
         <template v-for="(item,index) in list">
           <swipeout-item :ref="'swipeoutItem'+index" transition-mode="follow" >
             <div slot="right-menu">
               <swipeout-button @click.native="onButtonClickR(index)" type="warn">删除</swipeout-button>
             </div>
             <div slot="left-menu">
               <swipeout-button @click.native="onButtonClickL(index)" type="warn"><i class="fa fa-minus" aria-hidden="true"></i></swipeout-button>
             </div>
             <div slot="content" class="demo-content vux-1px-t">
                 <div class="content-li">
                     <div class="">
                       <img src="" class="content-img" alt="" style="">
                     </div>
                     <div class="" style="width: 55%;text-align: left;padding-left: 28px;">
                       <div class="">
                         寻羊冒险记（精）{{index}}
                       </div>
                       <div class="">
                         ¥ <span>36.30</span>
                       </div>
                     </div>
                     <div class="" >
                       <x-button class="content-btn" style="width: 50%;height: 40%;margin-top: 30px;">
                         <i class="fa fa-cart-arrow-down content-i" aria-hidden="true"></i>
                       </x-button>
                     </div>
                 </div>

             </div>
           </swipeout-item>
         </template>

        </swipeout>
    </div>
  </div>

</template>

<script>

import { XHeader,Swipeout, SwipeoutItem, SwipeoutButton, XButton } from 'vux'
export default {
  name: 'myCollection',
  data(){
    return {
      list:[1,2]
    }
  },
  components:{
    XHeader,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    XButton
  },
  methods:{
    modify(){
      // console.log(this.$refs.swipeoutItem)
      var a = [1,2]
      for (var i = 0; i < a.length; i++) {
        this.$refs["swipeoutItem"+i][0].open("left");
      }
    },
    onButtonClickR(index){
      console.log(index)
    },
    onButtonClickL(index){
      // console.log(this.$refs["swipeoutItem"+index])
      this.$refs["swipeoutItem"+index][0].open("right");
    }
  }
}
</script>

<style lang="css">
.content-li{
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}
.content-img{
  width: 50px;
  height: 60px;
  display: block;
  margin-left: 20px;
  border: 1px solid #ccc;
}
.content-btn{
  width: 50%;
  height: 40%;
  margin-top: 30px;
  position: relative;
}
.content-i{
  position: absolute;
  top: 4px;
  left: 4px;
}
</style>
