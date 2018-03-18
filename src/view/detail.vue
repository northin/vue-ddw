<template lang="html">
  <div class="">
    <x-header style="background-color:red">
      <span>详情</span>
      <!-- <span slot="right" @click="modify" size="40" style="fill:#fff;position:relative;top:-2px;left:-3px;">。。。</span> -->
    </x-header>
    <div class="">
      <tab :line-width="1" custom-bar-width="60px">
        <tab-item :selected="index == 1" @click.native="index = 1">商品</tab-item>
        <tab-item :selected="index == 2" @click.native="index = 2">详情</tab-item>
        <tab-item :selected="index == 3" @click.native="index = 3">评论</tab-item>
      </tab>
      <swiper :show-dots="false" height="80vh">
        <swiper-item v-if='(index == 1)'>
          <div class="">
            <img :src="bookSrc" alt="" class='detail-img'>
          </div>
          <div class="" style="width:70%;text-align:left;padding-left:10px;background-color:#fff;padding-top:10px">
            {{ bookName }}
          </div>
          <div class="" style="width:70%;text-align:left;padding-left:10px;;padding-bottom:10px"">
            ¥{{ price }}
          </div>
          <div class="comment">
            <div class="" style="width:70%;text-align:left;padding-left:10px">
              {{ data3 }}<rater v-model="data3" disabled></rater>
              <p>9414人评论</p>
            </div>
            <div class="" style="text-align:right">
              <button>我要写评论</button>
            </div>
          </div>

          <group label-width="5em" >
             <cell primary="content" title="作者" is-link @click.native="setIcon" >
               <div  class="" style="display:flex;justify-content: space-between;">
                 <div class="" >
                   {{ author }}
                 </div>
                 <div>
                    查看作品
                 </div>
               </div>

             </cell>
             <cell primary="content" title="出版" is-link @click.native="setIcon" >
               <div  class="" style="display:flex;justify-content: space-between;">
                 <div class="" style="font-size:13px;">
                    {{ compony }}{{ date }}
                 </div>
                 <div class="">
                   查看作品
                 </div>
               </div>

             </cell>
             <cell primary="content" title="分类" is-link @click.native="setIcon" >
               <div  class="" style="display:flex;justify-content: space-between;">
                 <div class="">
                    {{ typeData }}>{{ styleData }}
                 </div>
               </div>

             </cell>
           </group>
        </swiper-item>
        <swiper-item v-if='(index == 2)'>
          <div class="">
            <tab>
              <tab-item :selected="detailIndex == 1" @click.native="detailIndex = 1">图文详情</tab-item>
              <tab-item :selected="detailIndex == 2" @click.native="detailIndex = 2">出版信息</tab-item>
            </tab>
            <swiper :show-dots="false" height="80vh">
              <swiper-item v-if='(detailIndex == 1)'>
                <div class="">
                  <h3>推荐语</h3>
                  <div class="">
                    纯色哈口角是非好看不是进口帆布卡上班看见彼时彼刻上班开发局环保科技发布萨科减肥哈卡市东南部
                  </div>
                  <h3>内容</h3>
                  <div class="">
                    阿斯哦发红包爱护肤理念非常凉快呢阿斯合肥哪里呢
                  </div>
                  <h3>插图</h3>
                  <div class="">
                    <img src="" alt="">
                  </div>
                </div>
              </swiper-item>
              <swiper-item v-if='(detailIndex == 2)'>
                <div class="detailForm">
                  <form-preview :header-label="1" :body-items="list"></form-preview>
                </div>
              </swiper-item>
            </swiper>
          </div>
        </swiper-item>
        <swiper-item v-if='(index == 3)'>
          <div class="">
            <div class="" style="text-align:left;padding-bottom:10px;border-bottom:1px solid #ccc;">
              <template v-for="item in buttonList">
                <x-button mini class="detailButton">{{ item.label }}({{ item.value }})</x-button>
              </template>
            </div>
            <div style="height:64vh;overflow:auto">
              <ul class="">
                <li style="border-bottom:1px solid #ccc;">
                  <div class="liHeader">
                    <div class="">
                      张春旭
                    </div>
                    <div class="">
                      <rater v-model="data4" disabled></rater>
                    </div>
                  </div>
                  <div class="liContent">
                    阿飞更fj上课都被女方你家客服女生空间好就是不能见过百年个脑神经科女工n j k b nü
                  </div>
                  <div class="liFooter">
                    <div class="">
                      2015-11-10 23:23
                    </div>
                    <div class="">
                      <span><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>6</span>
                      <span><i class="fa fa-thumbs-o-down" aria-hidden="true"></i>1</span>
                    </div>
                  </div>
                </li>

              </ul>

            </div>
          </div>
        </swiper-item>
      </swiper>
    </div>

    <div class="buy-div" style="display:flex">
      <div class="" style="width:15%" @click="collection">
        <i :class="isColl?'fa fa-heart':'fa fa-heart-o'" style="position:absolute;color:red;top:5px;" aria-hidden="true"></i>
        <div style="font-size: 12px;padding-top: 10px;padding-left: 12px;">收藏</div>
      </div>
      <div class="" style="width:16%" @click="linkCart">
        <i class="fa fa-shopping-cart" style="position:absolute;top:5px;"  aria-hidden="true"></i>
        <div style="font-size: 12px;padding-top: 10px;padding-left: 14px;">购物车</div>
        <badge :text="cartNum" v-show="cartNum" style="position: absolute;top: 0;left:22%">{</badge>
      </div>
      <div class="" style="padding-left:8%">
        <x-button class="buy-btn" :gradients="['#FF5E3A', '#FF9500']"  style=" color:#fff">
          立即购买
        </x-button>
      </div>
      <div class="" style="">
        <x-button @click.native="goCart" class="buy-btn" :gradients="['#FF2719', '#FF61AD']" style=" color:#fff; margin-left: 0px;">
          加入购物车
        </x-button>
      </div>

    </div>

  </div>
</template>

<script>
import config from '../config/config'
import { CheckIcon, XHeader,Tab, TabItem,Swiper, SwiperItem, Rater,Group,Cell,XButton,Badge,FormPreview} from 'vux'
export default {
  data(){
    return {
      index:1,
      data3: 4.7,
      data4:10,
      bookName:'',
      price:'',
      date:'',
      compony:'',
      styleData:'',
      typeData:'',
      bookSrc:'',
      isColl:false,
      cartNum:0,
      author:'(日)村上春树',
      detailIndex:1,
      list: [{
        label: '书名',
        value: '海边的卡夫卡'
      }, {
        label: 'ISBN',
        value: '978468172648'
      }, {
        label: '作者',
        value: '(日)村上春树'
      },{
        label: '出版社',
        value: '上海译文出版社'
      }, {
        label: '出版时间',
        value: '2014-05-12'
      }],
      buttonList:[{
        label:"全部",
        value:9282
      },{
        label:"好评",
        value:9222
      },{
        label:"差评",
        value:6
      },{
        label:"中评",
        value:32
      }]
    }
  },
  computed:{
    srcPort:function(){
      return config.url+"/book/download?filename="
    }
  },
  created(){
    let id = this.$route.params.id
    this.$store.dispatch("bookById",{book_id:id}).then(res=>{
      this.author = "("+res.data.country+")"+res.data.author
      this.bookName = res.data.book_name;
      this.price = res.data.price;
      this.date = res.data.date;
      this.bookSrc = this.srcPort+res.data.picture
      this.compony = res.data.compony;
      this.list[0].value = res.data.book_name;
      this.list[1].value = res.data.isbn;
      this.list[2].value = this.author
      this.list[3].value = res.data.compony;
      this.list[4].value = res.data.date;
      return res.data.book_style
    }).then(res=>{
      return this.$store.dispatch("bookStyle",{style_id:res}).then(res=>{
        this.styleData = res.data[0].style_name
        return res.data[0].book_type
      })
    }).then(res => {
      // console.log(res)
      this.$store.dispatch("bookType",{type_id:res}).then(res=>{
        this.typeData = res.data[0].type_name
      })
    })
    this.$store.dispatch("isLogin").then(res=>{
      if(!res.data.errorCode){
        return true
      }else{
        return false
      }
    }).then(res=>{
      if(res){
        this.$store.dispatch("collectionQry",{book_id:id}).then(res=>{
          if(res.data.length){
            this.isColl = true
          }
        })
        this.$store.dispatch("cartQry",{}).then(res=>{
          if(res.data.length){
            for (var i = 0; i < res.data.length; i++) {
              this.cartNum += res.data[i].num
            }
          }
        })

      }
    })

  },
  methods:{
    linkCart(){
      this.$store.dispatch("isLogin").then(res=>{
        if(!res.data.errorCode){
          this.$router.push('/cart');
        }else{
          this.$router.push('/login');
        }
      })

    },
    goCart(){
      let book_id = this.$route.params.id
      this.$store.dispatch("cartInsert",{book_id:book_id,num:1}).then(res=>{
        if(!res){

        }else if(!res.data.errorCode){
          this.cartNum  = this.cartNum + 1
          this.$vux.alert.show({
           title: '加入成功',
           // content:res.data.errorMessage,
           onShow () {
           },
           onHide () {

           }
          })
        }else{
          const self = this;
          this.$vux.alert.show({
           title: '加入失败',
           // content:res.data.errorMessage,
           onShow () {
           },
           onHide () {
           }
          })
        }
      })
    },
    collection(){
      let id = this.$route.params.id
      if(this.isColl){
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
      }else{
        this.$store.dispatch("collectionInsert",{book_id:id}).then(res=>{
          if(!res){

          }else if(!res.data.errorCode){
            this.isColl = !this.isColl
            const self = this;
            this.$vux.alert.show({
             title: '添加收藏成功',
             // content:res.data.errorMessage,
             onShow () {
             },
             onHide () {
             }
            })
          }else{
            const self = this;
            this.$vux.alert.show({
             title: '添加收藏失败',
             // content:res.data.errorMessage,
             onShow () {
             },
             onHide () {
             }
            })
          }
        })
      }

    }
  },
  components:{
    FormPreview,
    XHeader,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Rater,
    Cell,
    Group,
    XButton,
    Badge
  }
}
</script>

<style lang="css" scoped>
.detail-img{
  display: block;
  /* width: 100%; */
  height: 200px;
  margin:0 auto;
  /* border: 1px solid #ccc; */
}
.detailButton{
  margin: 0 10px;
}
.vux-swiper{
  height: 100% ! important;
}
.comment{
  display: flex;
  background-color:#eee;
  padding:10px 0;
}
.buy-div{
  position: relative;
  top:0;
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
.liHeader{
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.liFooter{
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
</style>
