<template lang="html">
  <div class="order">
    <x-header style="background-color:red">
      <span>订单清算</span>
    </x-header>
    <div class="orderBody">
      <div class="orderAddress" @click="showAddress">
        <div class="">
          <div class="">
            <span>{{ addressName }}</span>
            <span>{{ addressMobile }}</span>
          </div>
          <div class="" style="text-align:left">
            {{ addressDetail }}
          </div>
        </div>
        <div class="" style="line-height: 44px;height: 44px;">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>

      <div class="orderBook" @click="showOrderDetail">
        <div class="">
          <img :src="'http://localhost:8081/book/download?filename='+bookSrc" class="orderBookImg" alt="">
        </div>
        <div class="orderBookRight">
          <div class="">
            <div>¥{{ allPay }}</div>
            <div>共{{ allNum }}件</div>
          </div>
          <div class="" style="line-height: 10vh;height: 10vh;padding-left:10px;">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </div>

        </div>
      </div>

      <group>
        <cell class="orderCell" title="支付方法" is-link></cell>
        <cell class="orderCell" title="开具发票" is-link></cell>
      </group>

    </div>

    <div class="orderFooter">
      <div class="">
        实付：¥{{ allPay }}
      </div>
      <div class="">
        <x-button class="order-btn" style="background-color:red;color:#fff;" @click.native="">
          去支付
        </x-button>
      </div>
    </div>


    <div v-transfer-dom>
      <popup v-model="addressShow" position="right" width="100%">
        <div>
          <x-header style="background-color:red">
            <span>选择收货地址</span>
            <span slot="overwrite-left" type="" @click="cancelAddress" size="40" style="fill:#fff;position:relative;top:-2px;left:-3px;">返回</span>
            <span slot="right" type="" @click="addressSave" size="40" style="fill:#fff;position:relative;top:-2px;left:-3px;">保存</span>
          </x-header>
          <div class="" style="height:93vh;overflow:auto">
            <template v-for="(item,index) in addressList">
                <div slot="content" class="demo-content vux-1px-t">
                    <div class="content-li">
                       <div class="" style="line-height: 62px;">
                         <check-icon :value.sync="item.isChose" @click.native="chose(index)"></check-icon>
                       </div>
                       <div class="orderAddress">
                         <div class="">
                           <div class="">
                             <span>{{ item.address_name }}</span>
                             <span>{{ item.address_mobile }}</span>
                           </div>
                           <div class="">
                             {{ item.address }}
                           </div>
                         </div>
                       </div>
                    </div>
                  </div>

            </template>
          </div>
        </div>
      </popup>
    </div>

    <div v-transfer-dom>
      <popup v-model="orderDetailShow" position="right" width="100%">
        <div>
          <x-header style="background-color:red">
            <span>订单详情</span>
            <span slot="overwrite-left" type="" @click="cancelOrderDetail" size="40" style="fill:#fff;position:relative;top:-2px;left:-3px;">返回</span>
          </x-header>
          <div class="" style="height:93vh;overflow:auto">
            <template v-for="(item,index) in list">
                <div slot="content" class="demo-content vux-1px-t">
                    <div class="content-li">
                        <div class="" @click="toDetail(item.bookList[0].book_id)">
                          <img :src="'http://localhost:8081/book/download?filename='+item.bookList[0].picture" class="content-img" alt="" style="">
                        </div>
                        <div class="" style="width: 55%;text-align: left;padding-right: 28px;">
                          <div class=""  v-if=(!item.isEdit) @click="toDetail(item.bookList[0].book_id)" >
                            {{ item.bookList[0].book_name }}
                          </div>
                          <div class="" style="color:red">
                            ¥ <span>{{ item.bookList[0].price }}</span>
                          </div>
                          <div>
                            *{{ item.num }}
                          </div>
                        </div>
                    </div>
                  </div>

            </template>

            <div class="orderDetailFoot">
              <span>商品金额</span>
              <span>¥{{ allPay }}</span>
            </div>
            <div class="" style="text-align:right;padding-right:10px">
              <span>店铺合计: ¥{{ allPay }}</span>
            </div>
          </div>
        </div>
      </popup>
    </div>

    <confirm v-model="show"
      title="确认"
      @on-cancel="onCancel"
      @on-confirm="onConfirm"
      @on-show="onShow"
      @on-hide="onHide">
        <p style="text-align:center;">你确定修改吗?</p>
      </confirm>


  </div>

</template>

<script>

import { TransferDom, Popup,XHeader,XButton,Group,XInput,Confirm,Cell,CheckIcon} from 'vux'
export default {
  directives: {
    TransferDom
  },
  name: 'userInfo',
  data(){
    return {
      addressShow:false,
      orderDetailShow:false,
      list:[],
      addressList:[],
      allPay:'',
      allNum:"",
      bookSrc:'',
      addressName:'',
      addressMobile:'',
      addressDetail:'',
      addressId:'',
      show:false,
    }
  },
  components:{
    XHeader,
    XButton,
    Popup,
    XInput,
    Group,
    Confirm,
    Cell,
    CheckIcon
  },
  computed:{
    orderId:function(){
      return this.$route.params.order_id
    }
  },
  created(){
    this.$store.dispatch("orderQry",{order_id:this.orderId}).then(res=>{
      console.log(res.data[0])
      if(res.data[0].cartList.length){
        this.allNum = res.data[0].cartList.length
        this.list = res.data[0].cartList;
        this.allPay = res.data[0].payMoney;
        this.bookSrc = res.data[0].cartList[0].bookList[0].picture
        this.addressName = res.data[0].address[0].address_name
        this.addressMobile = res.data[0].address[0].address_mobile
        this.addressDetail= res.data[0].address[0].address
        return res.data[0].address[0].addressId
      }
    }).then(resData=>{
      this.$store.dispatch("addressSelect").then(res=>{
        for (var i = 0; i < res.data.data.length; i++) {
          if(res.data.data[i].addressId == resData){
            res.data.data[i].isChose = true;
            this.addressId = res.data.data[i].addressId
          }else{
            res.data.data[i].isChose = false;
          }

        }

        this.addressList = res.data.data;
      })
    })




  },
  methods:{
    init(){
      this.$store.dispatch("orderQry",{order_id:this.orderId}).then(res=>{
        console.log(res.data[0])
        if(res.data[0].cartList.length){
          this.allNum = res.data[0].cartList.length
          this.list = res.data[0].cartList;
          this.allPay = res.data[0].payMoney;
          this.bookSrc = res.data[0].cartList[0].bookList[0].picture
          this.addressName = res.data[0].address[0].address_name
          this.addressMobile = res.data[0].address[0].address_mobile
          this.addressDetail= res.data[0].address[0].address
          return res.data[0].address[0].addressId
        }
      }).then(resData=>{
        this.$store.dispatch("addressSelect").then(res=>{
          for (var i = 0; i < res.data.data.length; i++) {
            if(res.data.data[i].addressId == resData){
              res.data.data[i].isChose = true;
              this.addressId = res.data.data[i].addressId
            }else{
              res.data.data[i].isChose = false;
            }

          }

          this.addressList = res.data.data;
        })
      })
    },
    chose(index){
      for (var i = 0; i < this.addressList.length; i++) {
        this.addressList[i].isChose = false
      }
      console.log(this.addressList)
      this.addressList[index].isChose = true;
      this.addressId = this.addressList[index].addressId;

    },
    showAddress(){
      this.addressShow = true;
    },
    cancelAddress(){
      this.addressShow = false;
    },
    addressSave(){
      this.show = true
    },
    showOrderDetail(){
      this.orderDetailShow = true;
    },
    cancelOrderDetail(){
      this.orderDetailShow = false;
    },
    onCancel(){
      this.show = false
    },
    onConfirm(){
      this.$store.dispatch("orderUpdate",{order_id:this.orderId,address_id:this.addressId}).then(res=>{
        if(!res){

        }else if(!res.data.errorCode){
          let self = this
          this.$vux.alert.show({
           title: '修改成功',
           // content:res.data.errorMessage,
           onShow () {
           },
           onHide () {
             self.addressShow = false
             self.init()
           }
          })
        }else{
          const self = this;
          this.$vux.alert.show({
           title: '修改失败',
           // content:res.data.errorMessage,
           onShow () {
           },
           onHide () {
           }
          })
        }
      })
    },
    onShow(){

    },
    onHide(){

    }
  }
}
</script>

<style lang="css">
.order{
  background-color: #eee;
}
.orderBookImg{
  width: 20vw;
  height: 10vh;
}
.orderAddress{
  display: flex;
  justify-content:space-between;
  padding: 5px 10px;
  background-color: #fff;
}
.orderBook{
  margin-top: 20px;
  background-color: #fff;
  display: flex;
  padding: 5px 10px;
  justify-content:space-between;
  border-bottom: 1px solid #ccc;
}
.orderBookRight{
  line-height: 5vh;
  display: flex;
  justify-content:space-between;
}
.orderCell{
  background-color: #fff;
}
.orderFooter{
  display: flex;
  position: absolute;
  top: 93vh;
  height: 45px;
  line-height: 45px;
  border-top: 1px solid #ccc;
  width: 100vw;
}
.orderFooter div:first-child{
  flex:3
}
.orderFooter div:last-child{
  flex:1;
}
.content-li{
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  height: 67px;
  background-color: #fff;
}
.content-img{
  width: 50px;
  height: 60px;
  margin-right: 20px;
  display: block;
  margin-left: 20px;
  border: 1px solid #ccc;
}
.orderDetailFoot{
  display: flex;
  justify-content: space-between;
  padding:0 10px;
  margin-top:20px;
}
</style>
