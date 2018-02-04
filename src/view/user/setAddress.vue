<template lang="html">
  <div class="">
    <x-header style="background-color:red">
      <span>我的收获地址</span>
    </x-header>
    <div class="" style="overflow:auto;height:93vh;">
      <ul>
        <li class="addressLi" @click="edit">
          <p class="addressP"><span>张春旭</span><span style="padding-left:20px">15957199647</span></p>
          <p class="addressP">浙江省嘉兴市桐乡市乌镇镇</p>
        </li>
      </ul>
    </div>

    <x-button type="warn" @click.native="add" class="add">新增收货地址</x-button>


    <div v-transfer-dom>
      <popup v-model="addShow" position="right" width="100%">
        <div>
          <x-header style="background-color:red">
            <span>新增收货地址</span>
            <span slot="overwrite-left" type="" @click="cancel" size="40" style="fill:#fff;position:relative;top:-2px;left:-3px;">返回</span>
            <span slot="right" type="" size="40" style="fill:#fff;position:relative;top:-2px;left:-3px;">保存</span>
          </x-header>
          <group>
            <x-input title="收货人" type="text" placeholder="请输入收货人的姓名" v-model="name"></x-input>
            <x-input title="电 话" v-model="mb" type="text" placeholder="请输入收货人的电话" ></x-input>
            <x-input title="地 址" v-model="address" type="text" placeholder="请输入收货人的地址" ></x-input>
          </group>
        </div>
      </popup>
    </div>


    <div v-transfer-dom>
      <popup v-model="editShow" position="right" width="100%">
        <div>
          <x-header style="background-color:red">
            <span>编辑收货地址</span>
            <span slot="overwrite-left" type="" @click="canceledit" size="40" style="fill:#fff;position:relative;top:-2px;left:-3px;">返回</span>
            <span slot="right" type="" size="40" style="fill:#fff;position:relative;top:-2px;left:-3px;">保存</span>
          </x-header>
          <group>
            <x-input title="收货人" type="text" placeholder="请输入收货人的姓名" v-model="name"></x-input>
            <x-input title="电 话" v-model="mb" type="text" placeholder="请输入收货人的电话" ></x-input>
            <x-input title="地 址" v-model="address" type="text" placeholder="请输入收货人的地址" ></x-input>
          </group>
        </div>
      </popup>
    </div>
  </div>

</template>

<script>

import { TransferDom, Popup,XHeader,XButton,Group,XInput } from 'vux'
export default {
  directives: {
    TransferDom
  },
  name: 'userInfo',
  data(){
    return {
      addShow:false,
      name:'',
      mb:'',
      address:'',
      editShow:false
    }
  },
  components:{
    XHeader,
    XButton,
    Popup,
    XInput,
    Group
  },
  methods:{
    add(){
      this.addShow = true;
    },
    edit(){
      this.editShow = true;
    },
    canceledit(){
      this.editShow = false;
    },
    cancel(){
      this.addShow = false;
    }
  }
}
</script>

<style lang="css">
.addressLi{
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  padding: 10px 0;
}
.addressP{
    text-align: left;
    padding-left: 20px;
    margin:0px;
}
.add{
    position: absolute ! important;
    top: 93vh;
}
</style>
