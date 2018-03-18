<template lang="html">
  <div class="">
    <x-header style="background-color:red">
      <span>我的收藏</span>
      <span slot="right" @click="modify" size="40" style="fill:#fff;position:relative;top:-2px;left:-3px;">编辑</span>
    </x-header>
    <div class="" style="">
      <div class="" style="margin-top:20px;" v-if="list.length == 0">
        暂无收藏
      </div>
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
                       <img :src="srcPort+item.picture" class="content-img" alt="" style="">
                     </div>
                     <div class="" style="width: 55%;text-align: left;padding-left: 28px;">
                       <div class="">
                         {{ item.book_name }}
                       </div>
                       <div class="">
                         ¥ <span>{{ item.price }}</span>
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
import config from '../../config/config'
import { XHeader,Swipeout, SwipeoutItem, SwipeoutButton, XButton } from 'vux'
export default {
  name: 'myCollection',
  data(){
    return {
      list:[]
    }
  },
  computed:{
    srcPort:function(){
      return config.url+"/book/download?filename="
    }
  },
  components:{
    XHeader,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    XButton
  },
  created(){
    this.$store.dispatch("collectionQry",{}).then(res=>{
      this.list = res.data.length==0?[]:res.data[0].bookList;
    })
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
      let id = this.list[index].book_id;
      this.$store.dispatch("collectionDel",{book_id:id}).then(res=>{
        if(!res){

        }else if(!res.data.errorCode){
          this.isColl = !this.isColl
          const self = this;
          this.$vux.alert.show({
           title: '取消收藏成功',
           // content:res.data.errorMessage,
           onShow () {
           },
           onHide () {
           }
          })
        }else{
          const self = this;
          this.$vux.alert.show({
           title: '取消收藏失败',
           // content:res.data.errorMessage,
           onShow () {
           },
           onHide () {
           }
          })
        }
      })
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
