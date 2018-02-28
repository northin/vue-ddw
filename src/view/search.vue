<template>
  <div class="search">
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
    <flexbox :style="isFocus?'margin-top:45px':''">
      <flexbox-item :span="1/4" class="flexbox-left">
        <div class="flex-left">
          <x-button v-for="(item,index) in searchList" @click.native="bookType(index)"> {{ item.label }} </x-button>
          <!-- <x-button>教辅书</x-button>
          <x-button>考试</x-button>
          <x-button>外语</x-button>
          <x-button>教材</x-button> -->
        </div>
      </flexbox-item>
      <flexbox-item class="flex-right">
        <div class="flex-demo">
          <div class="top">
            <h4 style="padding-left:20px;">榜单</h4>
            <div class="" style="display:flex;justify-content: space-between;padding: 0 20px;">
              <div class="">
                <img src="" alt="">
                <p>总榜</p>
              </div>
              <div class="">
                <img src="" alt="">
                <p>新书榜</p>
              </div>
              <div class="">
                <img src="" alt="">
                <p>童书榜</p>
              </div>
            </div>
          </div>

          <div class="search-content">
            <h4 style="padding-left:20px;">{{ title }}</h4>
            <div class="">
              <span v-for="item in dataList">
                <a :href="'#/searchDetail?data='+item.label+'&dataId='+item.value"> {{item.label}} </a>
              </span>
            </div>
          </div>

        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Group, Cell,Search ,Flexbox, FlexboxItem,XButton} from 'vux'
import myfooter from '../components/myfooter.vue'
export default {
  name: 'index',
  data () {
    return {
      msg: 'index',
      value:"",
      results:[],
      isFocus:false,
      searchList:[],
      dataList:[],
      title:''
    }
  },
  components: {
    myfooter,
    Group,
    Cell,
    Search,
    Flexbox,
    FlexboxItem,
    XButton
  },
  created(){
    this.$store.dispatch("bookType",{}).then(res=>{
      let data = res.data;
      for (var i = 0; i < data.length; i++) {
        this.searchList.push({"label":data[i]["type_name"],"value":data[i]["type_id"]})
      }
      this.title = res.data[0]["type_name"]
      console.log(res.data[0]["type_id"])
      return res.data[0]["type_id"]

    }).then(res=>{
      console.log(res)
      this.$store.dispatch("bookStyle",{"book_type":res}).then(res=>{
        let data = res.data;
        for (var i = 0; i < data.length; i++) {
          this.dataList.push({"label":data[i]["style_name"],"value":data[i]["style_id"]})
        }
      })
    })



  },
  methods:{
    bookType(value){
      // console.log(value);
      let titleData = this.searchList[value]["label"]
      let queryData = this.searchList[value]["value"]
      this.title = titleData;
      this.$store.dispatch("bookStyle",{"book_type":queryData}).then(res=>{
        let data = res.data;
        this.dataList = [];
        for (var i = 0; i < data.length; i++) {
          this.dataList.push({"label":data[i]["style_name"],"value":data[i]["style_id"]})
        }
      })


    },
    resultClick(){

    },
    getResult(){

    },
    onFocus(){
      this.isFocus = true;
    },
    onSubmit(){

    },
    onCancel(){
      this.isFocus = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search{
  background-color: #eee;
}
.flexbox-left{
  margin-right: 10px;
  background-color: #fff;
  height: 86vh;
}
.flex-left{
  /* margin-top: 45px; */
  text-align: center;

}
.flex-right{
  background-color: #fff;
  margin-left: 0 ! important  ;
  height: 86vh;
  overflow: auto;
}
.flex-left button{
  background-color: #fff;
  font-size: 13px;
  padding: 0;
  margin-top: 0;
  height: 40px;
  line-height: 40px;
}
.top{
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
.search-content span{
  width: 30%;
  font-size: 13px;
  display: inline-block;
  text-align: center;
  line-height: 30px;

}
</style>
