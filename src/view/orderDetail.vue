<template lang="html">
    <div class="">
      <x-header style="background-color:red">
        <span>订单查看</span>
      </x-header>
      <div>
       <tab :line-width=2 active-color='#fc378c' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" class="orderDetailSwiper" style="height: 85vh;" :show-dots="false">

        <swiper-item :key="index">
          <div v-for="(item, index) in dataList" class="tab-swiper vux-center">
            <div class="bookDetail" v-for="(itemBook,indexbook) in item.cartList">
              <img class="bookDetailImg" :src="srcPort+itemBook.bookList[0].picture" alt="">
              <div class="bookDetailName">
                {{ itemBook.bookList[0].book_name }}
              </div>
              <div class="bookDetailPrice">
                <div class="">
                  ¥{{ itemBook.bookList[0].price }}
                </div>
                <div class="">
                  *{{  itemBook.num  }}
                </div>
              </div>
            </div>
            <div class="bookFooter">
              <span>共{{ item.cartList.length }}件商品</span>
              <span>共¥{{ item.payMoney }}</span>
            </div>
            <div class="bookBtn" style="display:flex;justify-content: flex-end;margin-bottom:10px;">
              <x-button v-if="status==0"  @click.native="goCancle(item.order_id)" style="width:30%;font-size:12px;margin:0">取消订单</x-button>

              <x-button v-if="status==0" @click.native="goPay(item.order_id)" style="width:30%;font-size:12px;margin:0 10px 0 10px;background-color:red">立即支付</x-button>
            </div>
          </div>
        </swiper-item>
      </swiper>
    </div>

    <confirm v-model="show"
      title="确认"
      @on-cancel="onCancel"
      @on-confirm="onConfirm"
      @on-show="onShow"
      @on-hide="onHide">
        <p style="text-align:center;">你确定取消吗?</p>
      </confirm>
    </div>
</template>

<script>
import config from '../config/config'
import { CheckIcon, XHeader,Swiper,XNumber, SwiperItem ,XButton,Tab, TabItem,Confirm} from 'vux'
export default {
  data () {
    return {
      msg: 'index',
      list:['待付款', '待发货', '待收货', '待评价'],
      dataList:[],
      index:-1,
      demo2:1,
      status:-2,
      show:false,
      currentOrder:'',
    }
  },
  computed:{
    srcPort:function(){
      return config.url+"/book/download?filename="
    }
  },
  created(){
    let order_status = this.$route.params.order_status
    this.index = order_status - 1;
    this.status= order_status-1;
    // this.$store.dispatch("orderQry",{order_status:order_status}).then(res=>{
    //   this.dataList = res.data;
    // })
  },
  watch: {
    index: function(oldDemo2,newDemo2){
      this.orderQry(oldDemo2)
      this.status = oldDemo2
    }
  },
  methods:{
    onCancel(){

    },
    onShow(){

    },
    onHide(){

    },
    onConfirm(){
      this.$store.dispatch("orderDel",{order_id:this.currentOrder}).then(res=>{
        if(!res){

        }else if(!res.data.errorCode){
          let self = this
          this.$vux.alert.show({
           title: '取消成功',
           // content:res.data.errorMessage,
           onShow () {
           },
           onHide () {
             self.orderQry(0)
           }
          })
        }else{
          const self = this;
          this.$vux.alert.show({
           title: '取消失败',
           // content:res.data.errorMessage,
           onShow () {
           },
           onHide () {
           }
          })
        }
      })
    },
    orderQry(num){
      this.$store.dispatch("orderQry",{order_status:num+1,pageNum:10,pageSize:1}).then(res=>{
        this.dataList = res.data.data.result;
      })
    },
    goPay(num){
      this.$router.push('/order/'+num)
    },
    goCancle(num){
      console.log(1)
      this.show = true;
      this.currentOrder = num;
    }
  },
  components: {
    XHeader,
    CheckIcon,
    Swiper,
    XButton,
    SwiperItem,
    XNumber,
    Tab,
    Confirm,
    TabItem
  }
}
</script>

<style lang="css">
.bookDetail{
  display: flex;
  background-color: #eee;
  border-top: 1px solid #ccc;

}
.bookFooter{
  text-align: right;
  padding-right: 20px;
  line-height: 50px;
  height: 50px;
}
.bookDetailImg{
  width: 80px;
  padding:10px;
  height: 80px;
}
.bookDetailName{
  width: 60%;
  padding-top: 20px;
}
.bookDetailPrice{
  width:20%;
  padding-top: 20px;
}
</style>
