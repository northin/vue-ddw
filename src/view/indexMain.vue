<template lang="html">
  <div class="">
    <swiper :list="demo03_list" auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    <div class="index-contnt">
      <span v-for="(item,index) in list">
          <a :href="'#/searchDetail?data='+item.style_name+'&dataId='+item.style_id"> {{ item.style_name }} </a>

      </span>
    </div>
    <div class="info">
      <h4 style="text-align:left;padding-left:20px;">资讯</h4>
      <p><a @click="goInfo(1)">hfouahboahofihoihjcfhaiohnoiafhoaiashfhohoi1</a></p>
      <p><a @click="goInfo(2)">hfouahboahofihoihjcfhaiohnoiafhoaiashfhohoi1</a></p>
      <p><a @click="goInfo(3)">hfouahboahofihoihjcfhaiohnoiafhoaiashfhohoi1</a></p>
      <p><a @click="goInfo(4)">hfouahboahofihoihjcfhaiohnoiafhoaiashfhohoi1</a></p>
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
      list:[],
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
    this.$store.dispatch("bookStyle",{}).then(res=>{
      this.list = res.data;
    })
  },
  methods:{
    goInfo(str){
      console.log(1)
      this.$router.push("/info/"+str)
    },
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
  /* width:19%; */
  padding:0px 20px;
  text-align: center;
  display: inline-block;
  line-height: 40px;
}
</style>
