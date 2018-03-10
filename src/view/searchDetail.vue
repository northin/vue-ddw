<template lang="html">
  <div class="searchDetail">
    <div class="" style="display:flex">
      <span class="return" @click="back">返回</span>
      <search
      :class="isFocus?'box-focus':''"
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="absolute"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"></search>
    </div>
    <div class="" style="height:93vh;overflow:auto;">
      <ul>
        <li v-if="searchList.length == 0">
          暂无数据
        </li>
        <li v-for="(item,index) in searchList" @click="goto(item.book_id)">
          <div class="li-content" style="display:flex">
            <img class="li-img" :src="'http://localhost:8081/book/download?filename='+item.picture" alt="">
            <div class="">
              <h4 style="text-align:left;">{{ item.book_name }}</h4>
              <p class="li-author">({{ item.country }}) {{ item.author }}</p>
              <p class="li-price">¥{{ item.price }}</p>
              <p class="li-comment">100.0%好评（2022767人）</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import { Swiper,Search, GroupTitle, SwiperItem, XButton, Divider } from 'vux'
export default {
  data(){
    return {
      value:'',
      results:[],
      isFocus:false,
      searchList:[],
    }
  },
  components: {
    Swiper,
    SwiperItem,
    GroupTitle,
    XButton,
    Divider,
    Search
  },
  created(){
    let searchData = this.$route.query.data
    let style_id = this.$route.query.dataId;

    this.value = searchData

    this.$store.dispatch("bookSearch",{book_name:searchData,author:searchData,book_style:style_id}).then(res=>{

      this.searchList = res.data;
    })




  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    resultClick(){

    },
    getResult(){

    },
    goto(value){
      this.$router.push('/detail/'+value)
    },
    onFocus(){
      // console.log(1)
      this.isFocus = true;
    },
    onSubmit(){

      this.$store.dispatch("styleSearch",{style_name:this.value}).then(res=>{
        if(!res.data.length){
          return null;
        }else{
          return res.data[0].style_id;
        }

      }).then(res=>{
        console.log(res);
        this.$store.dispatch("bookSearch",{book_name:this.value,author:this.value,book_style:res}).then(res=>{

          this.searchList = res.data;
        })
      })
    },
    onCancel(){

    }
  }
}
</script>

<style lang="css" scoped>
.return{
  display: inline-block;
  width: 16%;
  height: 44px;
  line-height: 44px;
  background-color: #eee;
}
.box-focus{
  left:16%;
  /* text-align: right; */
  width:84% ! important;
}
.li-content{
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}
.li-img{
  width: 26%;
  padding-right: 20px;
  height:100px;
  padding-top: 20px;
  padding-left: 20px;
}
.li-author{
  font-size: 12px;
  color: #999;
  text-align: left;
}
.li-price{
  color:red;
  text-align: left;
  padding-top: 5px;
}
.li-comment{
  font-size: 12px;
  color: #999;
  text-align: left;
}
</style>
