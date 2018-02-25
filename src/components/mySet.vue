<template lang="html">
  <div class="">
    <x-header style="background-color:red">
      <span>{{ setTitle }}</span>
      <a slot="right" @click="parentC">保存</a>
    </x-header>
    <div class="">
      <group>
        <x-input :title=(setTitle.substr(2)) name="" :placeholder="('请输入'+setTitle.substr(2))" v-model="saveData" :is-type="setType"></x-input>
      </group>
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
import { XHeader,Group,XInput,Confirm} from 'vux'
export default {
  name: 'userInfo',
  data () {
    return {
      saveDataValue:'',
      show:false
    }
  },
  computed:{
    saveData:{
      get:function(){
        return this.initData
      },
      set: function(v){
        this.saveDataValue = v;
      }
    }
  },
  props:['setTitle','setType','initData'],
  methods:{
    parentC(){
      this.show = true;
    },
    onCancel(){

    },
    onShow(){

    },
    onHide(){

    },
    onConfirm(){
      this.$emit('doSave', this.saveDataValue)
    }

  },
  components:{
    XHeader,
    Group,
    XInput,
    Confirm
  }
}
</script>

<style lang="css" scoped>
</style>
