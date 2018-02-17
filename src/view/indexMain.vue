<template lang="html">
  <div class="">
    <search
    @result-click="resultClick"
    @on-change="getResult"
    :results="results"
    v-model="value"
    position="absolute"
    @on-focus="onFocus"
    @on-cancel="onCancel"
    @on-submit="onSubmit"
    ref="search"></search>
    <swiper :list="demo03_list" auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    <div class="index-contnt">
      <span>教辅</span>
      <span>童书</span>
      <span>历史</span>
      <span>工具书</span>
      <span>外语</span>
      <span>教辅</span>
      <span>童书</span>
      <span>历史</span>
      <span>工具书</span>
      <span>外语</span>
      <span>教辅</span>
      <span>童书</span>
      <span>历史</span>
      <span>工具书</span>
      <span>外语</span>
    </div>
    <div class="info">
      <h4 style="text-align:left;padding-left:20px;">资讯</h4>
      <p>ahfouahboahofihoihjcfhaiohnoiafhoaiashfhohoi1</p>
      <p>ahfouahboahofihoihjcfhaiohnoiafhoaiashfhohoi1</p>
      <p>ahfouahboahofihoihjcfhaiohnoiafhoaiashfhohoi1</p>
      <p>ahfouahboahofihoihjcfhaiohnoiafhoaiashfhohoi1</p>
    </div>

  </div>
</template>

<script>
import { Swiper,Search, GroupTitle, SwiperItem, XButton, Divider } from 'vux'
const baseList = [{
  url: 'javascript:',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/5.jpg',
  title: '送你一次旅行',
  fallbackImg: 'https://static.vux.li/demo/3.jpg'
}]
export default {
  data(){
    return {
      demo03_list:baseList,
      value:'',
      results:[],
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
  methods:{
    resultClick(){

    },
    getResult(){

    },
    onFocus(){

    },
    onSubmit(){

    },
    onCancel(){

    }
  }
}
</script>

<style lang="css" scoped>
.index-contnt span{
  width:19%;
  text-align: center;
  display: inline-block;
  line-height: 40px;
}
</style>
