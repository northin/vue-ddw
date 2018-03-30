<template lang="html">
  <div class="">
    <x-header style="background-color:red">
      <span>我的收获地址</span>
    </x-header>
    <div class="" style="overflow:auto;height:86vh;">
      <ul>
        <li class="addressLi" v-for="(item,index) in addressList" @click="edit(index)">
          <div class="">
            <p class="addressP"><span>{{ item.address_name }}</span><span style="padding-left:20px">{{ item.address_mobile }}</span></p>
            <p class="addressP">{{ item.address }}</p>
          </div>
          <div class="" style="margin-right:20px;">
            <x-button type="primary" @click.native.stop="deleteAdd(index)" class="delete">删除</x-button>
          </div>

        </li>
      </ul>
    </div>

    <x-button type="warn" @click.native="add" class="add">新增收货地址</x-button>


    <confirm v-model="show"
      title="提示"
      @on-cancel="onCancel"
      @on-confirm="onConfirm"
      @on-show="onShow"
      @on-hide="onHide">
        <p style="text-align:center;">你确定删除吗?</p>
      </confirm>

    <div v-transfer-dom>
      <popup v-model="addShow" position="right" width="100%">
        <div>
          <x-header style="background-color:red">
            <span>选择收货地址</span>
            <span slot="overwrite-left" type="" @click="cancel" size="40" style="fill:#fff;position:relative;top:-2px;left:-3px;">返回</span>
            <span slot="right" type="" @click="addSave" size="40" style="fill:#fff;position:relative;top:-2px;left:-3px;">保存</span>
          </x-header>
          <group>
            <x-input title="收货人" type="text" placeholder="请输入收货人的姓名" v-model="addName"></x-input>
            <x-input title="电 话" v-model="addMb" type="text" placeholder="请输入收货人的电话" ></x-input>
            <x-input title="地 址" v-model="addAddress" type="text" placeholder="请输入收货人的地址" ></x-input>
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
            <span slot="right" @click="editSave" type="" size="40" style="fill:#fff;position:relative;top:-2px;left:-3px;">保存</span>
          </x-header>
          <group>
            <x-input title="收货人" type="text" placeholder="请输入收货人的姓名" v-model="editName"></x-input>
            <x-input title="电 话" v-model="editMb" type="text" placeholder="请输入收货人的电话" ></x-input>
            <x-input title="地 址" v-model="editAddress" type="text" placeholder="请输入收货人的地址" ></x-input>
          </group>
        </div>
      </popup>
    </div>
  </div>

</template>

<script>

import { TransferDom, Popup,XHeader,XButton,Group,XInput,Confirm } from 'vux'
export default {
  directives: {
    TransferDom
  },
  name: 'userInfo',
  data(){
    return {
      addShow:false,
      addressList:[],
      addName:'',
      addMb:'',
      addAddress:'',
      editShow:false,
      editName:'',
      editMb:'',
      editAddress:'',
      editAddressId:'',
      show:false,
      choseId:''
    }
  },
  components:{
    XHeader,
    XButton,
    Popup,
    XInput,
    Group,
    Confirm
  },
  created(){
    this.init(this);

  },
  methods:{
    onCancel(){},
    onConfirm(){
      const data = {addressId:this.addressList[this.choseId].addressId};
      this.$store.dispatch("addressDelete",data).then(res => {
        if(!res.data.errorCode){
          const self = this;
          this.$vux.alert.show({
           title: '删除成功',
           content:res.data.errorMessage,
           onShow () {
           },
           onHide () {
             self.$options.methods.init(self);
           }
          })
        }else{
          this.$vux.alert.show({
           title: '删除失败',
           content:res.data.errorMessage,
           onShow () {
           },
           onHide () {

           }
         })
        }
      })
    },
    onShow(){},
    onHide(){},
    init(self){
      self.$store.dispatch("addressSelect",{pageSize:1,pageNum:10}).then(res => {
        self.addressList = res.data.data.result;
      })
    },
    addSave(){
      const data = Object.create(null)
      data.address_name = this.addName
      data.address_mobile = this.addMb
      data.address = this.addAddress
      this.$store.dispatch("addressInsert",data).then(res => {
        if(!res.data.errorCode){
          const self = this;
          this.$vux.alert.show({
           title: '新增成功',
           content:res.data.errorMessage,
           onShow () {
           },
           onHide () {
             self.addShow = false
             self.$options.methods.init(self);
           }
          })
        }else{
          this.$vux.alert.show({
           title: '新增失败',
           content:res.data.errorMessage,
           onShow () {
           },
           onHide () {

           }
         })
        }
      })
    },
    add(){
      this.addShow = true;
    },
    deleteAdd(value){
      this.show = true
      this.choseId = value
    },
    edit(value){
      this.editMb = this.addressList[value].address_mobile;
      this.editName = this.addressList[value].address_name;
      this.editAddress = this.addressList[value].address;
      this.editAddressId = this.addressList[value].addressId;
      this.editShow = true;
    },
    editSave(){
      const data = Object.create(null)
      data.address_name = this.editName
      data.address_mobile = this.editMb
      data.address = this.editAddress
      data.addressId = this.editAddressId
      this.$store.dispatch("addressUpdate",data).then(res => {
        if(!res.data.errorCode){
          const self = this;
          this.$vux.alert.show({
           title: '修改成功',
           content:res.data.errorMessage,
           onShow () {
           },
           onHide () {
             self.editShow = false
             self.$options.methods.init(self);
           }
          })
        }else{
          this.$vux.alert.show({
           title: '修改失败',
           content:res.data.errorMessage,
           onShow () {
           },
           onHide () {

           }
         })
        }
      })
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
  display: flex;
  justify-content: space-between;
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
