<template lang="html">
  <div class="">
    <x-header style="background-color:red">
      <span>资讯详情</span>
    </x-header>
    <div class="">
      112341412asda1
    </div>
  </div>
</template>

<script>
import { XHeader,Group,XInput,Confirm} from 'vux'
export default {
  name: 'userInfo',
  data () {
    return {
      saveDataValue:'',
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
