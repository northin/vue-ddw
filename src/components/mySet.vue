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

  </div>
</template>

<script>
import { XHeader,Group,XInput} from 'vux'
export default {
  name: 'userInfo',
  data () {
    return {
      saveData:''
    }
  },
  props:['setTitle','setType'],
  methods:{
    parentC(){
      this.$emit('doSave', this.saveData)
    }
  },
  components:{
    XHeader,
    Group,
    XInput
  }
}
</script>

<style lang="css" scoped>
</style>
