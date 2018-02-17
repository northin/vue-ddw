<template>
  <div class="hello">
    <x-header style="background-color:red">
      <span>购物车</span>
      <div slot="overwrite-left" ></div>
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
             <div slot="content" class="demo-content vux-1px-t">

                 <div class="content-li">
                    <div class="" style="line-height: 62px;">
                      <check-icon :value.sync="demo1"></check-icon>
                    </div>
                     <div class="" @click="toDetail(index)">
                       <img src="" class="content-img" alt="" style="">
                     </div>
                     <div class="" :style="'width: 55%;text-align: left;'+(!item.isEdit?'padding-left: 28px;':'padding-right: 28px;')">
                       <div class=""  v-if=(!item.isEdit) @click="toDetail(index)" >
                         寻羊冒险记（精）
                       </div>
                       <div class=""  v-if=(!item.isEdit) @click="toDetail(index)" >
                         ¥ <span>36.30</span>
                       </div>
                       <div v-if=(!item.isEdit)>
                         *{{ item.number }}
                       </div>
                       <div class="content-edit" v-if=(item.isEdit)>
                            <x-number :min="0" width="80px" v-model="item.number"></x-number>
                       </div>
                     </div>
                     <div class="" v-if=(!item.isEdit)>
                       <x-button class="content-btn" @click.native=edit(index) style="width: 50%;height: 40%;margin-top: 30px;">
                         <i class="fa fa-pencil-square-o content-i" aria-hidden="true"></i>
                       </x-button>
                     </div>
                     <div class="" v-if=(item.isEdit)>
                       <x-button class="content-btn" @click.native=save(index) style="width: 50%;height: 40%;margin-top: 30px;">
                         <i class="fa fa-check content-i" aria-hidden="true"></i>
                       </x-button>
                     </div>
                 </div>

               </a>

             </div>
           </swipeout-item>
         </template>

        </swipeout>
    </div>
    <div class="buy-div" style="display:flex">
      <check-icon :value.sync="all" style="width:40%;text-align:left">全选</check-icon>
      <span>合计：</span><span>¥36.50</span>
      <x-button class="buy-btn" style="">
        结算（0）
      </x-button>
    </div>

  </div>
</template>

<script>
import { CheckIcon, XHeader,Swipeout,XNumber, SwipeoutItem, SwipeoutButton ,XButton} from 'vux'
import myfooter from '../components/myfooter.vue'
export default {
  name: 'index',
  data () {
    return {
      msg: 'index',
      list:[{"number":1,"isEdit":false},{"number":2,"isEdit":false}],
      demo1:false,
      all:false,

    }
  },
  methods:{
    toDetail(index){
      this.$router.push('/detail/'+index)
    },
    modify(){

    },
    edit(index){
      this.list[index].isEdit = true;
    },
    save(index){
      // console.log(this.list[index].number)
      this.list[index].isEdit = false;
    }
  },
  components: {
    myfooter,
    XHeader,
    CheckIcon,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    XButton,
    XNumber
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-li{
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  height: 67px;
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
.buy-div{
  position: relative;
  top:53vh;
  height: 40px;
  line-height: 40px;
  border-top: 1px solid #ccc;
  /* border-bottom:1px solid #ccc; */
}
.buy-btn{
  width: 120px;
  height: 98%;
  margin-left: 8px;
  background-color: red;
  border-radius: 0;
  outline: none;
  line-height: 38px;
}
</style>
