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
        <li>
          <div class="li-content" style="display:flex">
            <img class="li-img" src="" alt="">
            <div class="">
              <h4 style="text-align:left;">新华字典(第11版)</h4>
              <p class="li-author">中国社会科学院语言研究生编</p>
              <p class="li-price">¥15.00</p>
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
      isFocus:false
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
    this.value = this.$route.query.data
  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    resultClick(){

    },
    getResult(){

    },
    onFocus(){
      // console.log(1)
      this.isFocus = true;
    },
    onSubmit(){

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
