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
         <div class="" style="margin-top:10px;" v-if="list.length == 0">
           购物车为空
         </div>
         <template v-for="(item,index) in list">
           <swipeout-item :ref="'swipeoutItem'+index" transition-mode="follow" >
             <div slot="right-menu">
               <swipeout-button @click.native="onButtonClickR(item.cart_id)" type="warn">删除</swipeout-button>
             </div>
             <div slot="content" class="demo-content vux-1px-t">

                 <div class="content-li">
                    <div class="" style="line-height: 62px;">
                      <check-icon :value.sync="item.isChose" @click.native="chose(index)"></check-icon>
                    </div>
                     <div class="" @click="toDetail(item.bookList[0].book_id)">
                       <img :src="'http://localhost:8081/book/download?filename='+item.bookList[0].picture" class="content-img" alt="" style="">
                     </div>
                     <div class="" :style="'width: 55%;text-align: left;'+(!item.isEdit?'padding-left: 28px;':'padding-right: 28px;')">
                       <div class=""  v-if=(!item.isEdit) @click="toDetail(item.bookList[0].book_id)" >
                         {{ item.bookList[0].book_name }}
                       </div>
                       <div class=""  v-if=(!item.isEdit) @click="toDetail(item.bookList[0].book_id)" >
                         ¥ <span>{{ item.bookList[0].price }}</span>
                       </div>
                       <div v-if=(!item.isEdit)>
                         *{{ item.num }}
                       </div>
                       <div class="content-edit" v-if=(item.isEdit)>
                            <x-number :min="0" width="80px" v-model="item.num"></x-number>
                       </div>
                     </div>
                     <div class="" v-if=(!item.isEdit)>
                       <x-button class="content-btn" @click.native=edit(index) style="width: 50%;height: 40%;margin-top: 30px;">
                         <i class="fa fa-pencil-square-o content-i" aria-hidden="true"></i>
                       </x-button>
                     </div>
                     <div class="" v-if=(item.isEdit)>
                       <x-button class="content-btn" @click.native=save(index,item.num,item.cart_id,item.bookList[0].book_id) style="width: 50%;height: 40%;margin-top: 30px;">
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
      <check-icon :value.sync="all" @click.native="allChose" style="width:40%;text-align:left">全选</check-icon>
      <span>合计：</span><span>¥{{ allPay }}</span>
      <x-button class="buy-btn" style="" @click.native="order">
        结算（{{ num }}）
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
      list:[],
      // demo1:false,
      all:false,
      allPay:0,
      num:0,
      choseCartId:[],
    }
  },
  created(){
    this.$store.dispatch("cartQry",{}).then(res=>{
      if(res.data.length){

        for (var i = 0; i < res.data.length; i++) {
          res.data[i].isEdit = false;
          res.data[i].isChose = false;
        }
        this.list = res.data;

      }
    })
  },
  methods:{
    order(){
      if(this.choseCartId.length){
        this.$store.dispatch("addressSelect").then(res => {
          return res.data.data.length == 0?null:res.data.data[0].addressId;
        }).then(res=>{
          this.$store.dispatch("orderInsert",{payMoney:this.allPay,address_id:res,cart_id:this.choseCartId}).then(res=>{
            if(!res.data.errorCode){
              let order_id = res.data.data
              console.log(order_id)
              this.$router.push('/order/'+order_id);
            }else{
              this.$vux.alert.show({
               title: '下单失败',
               onShow () {
               },
               onHide () {
               }
              })
            }
          })
        })

      }
    },
    allChose(){
      if(this.all){
        for (var i = 0; i < this.list.length; i++) {
          this.list[i].isChose = true
          this.allPay += (+this.list[i].bookList[0].price)*(+this.list[i].num).toFixed(2);
          this.num += this.list[i].num
          this.choseCartId.push(this.list[i].cart_id)
        }
      }else{
        for (var i = 0; i < this.list.length; i++) {
          this.list[i].isChose = false
          this.allPay -= (+this.list[i].bookList[0].price)*(+this.list[i].num).toFixed(2);
          this.num -= this.list[i].num
          this.choseCartId = []
        }
      }

    },
    chose(index){
      let bookData = this.list[index]
      if(bookData.isChose){
        let flag = false;
        for (var i = 0; i < this.list.length; i++) {
          if(!this.list[i].isChose){
            flag = true
          }
        }
        if(!flag){
          this.all = true;
        }
        this.allPay += (+bookData.bookList[0].price)*(+bookData.num).toFixed(2);
        this.num += bookData.num
        this.choseCartId.push(bookData.cart_id)
      }else{
        this.allPay -= (+bookData.bookList[0].price)*(+bookData.num).toFixed(2);
        this.num -= bookData.num
        let index = this.choseCartId.indexOf(bookData.cart_id)
        if(index>0){
          this.choseCartId.splice(index-1,1)
        }else if(index==0){
          this.choseCartId.shift()
        }
        this.all = false
      }
    },
    onButtonClickR(cart_id){
      this.$store.dispatch("cartDel",{cart_id:cart_id}).then(res=>{
        if(!res){

        }else if(!res.data.errorCode){
          let self = this
          this.$vux.alert.show({
           title: '删除成功',
           // content:res.data.errorMessage,
           onShow () {
           },
           onHide () {
             self.$store.dispatch("cartQry",{}).then(res=>{
               if(res.data.length){

                 for (var i = 0; i < res.data.length; i++) {
                   res.data[i].isEdit = false;
                 }
                 self.list = res.data;

               }
             })
           }
          })
        }else{
          const self = this;
          this.$vux.alert.show({
           title: '删除失败',
           // content:res.data.errorMessage,
           onShow () {
           },
           onHide () {
           }
          })
        }
      })
    },
    toDetail(index){
      this.$router.push('/detail/'+index)
    },
    modify(){

    },
    edit(index){
      this.list[index].isEdit = true;
    },
    save(index,num,cart_id,book_id){
      // console.log(this.list[index].number)
      this.$store.dispatch("cartUpdate",{book_id:book_id,num:num,cart_id:cart_id}).then(res=>{
        if(!res){

        }else if(!res.data.errorCode){
          let self = this
          this.$vux.alert.show({
           title: '修改成功',
           // content:res.data.errorMessage,
           onShow () {
           },
           onHide () {
             self.list[index].isEdit = false;
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
  justify-content: space-between;
  width: 100vw;
  position: absolute;
  top: 86vh;
  height: 40px;
  line-height: 40px;
  border-top: 1px solid #ccc;
  /* border-bottom:1px solid #ccc; */
}
.buy-btn{
  width: 120px;
  height: 98%;
  margin-left: 8px;
  margin-right: 0;
  background-color: red;
  border-radius: 0;
  outline: none;
  line-height: 38px;
}
</style>
