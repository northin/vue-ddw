<template lang="html">
  <div class="">
    <mySet :setTitle="'设置个人介绍'" :initData=initData @doSave=save></mySet>
  </div>
</template>

<script>
import mySet from '../../components/mySet.vue'
export default {
  name: 'setDesc',
  data () {
    return {
      initData:''
    }
  },
  created(){
    this.$store.dispatch("userDetail").then(res => {
      this.initData = res.data.intruction;
    })
  }, 
  methods:{
    save(value){
      this.$store.dispatch("userDetailUpdate",{intruction:value}).then(res => {
        if(!res.data.errorCode){
          this.$vux.alert.show({
           title: '介绍修改',
           content:res.data.errorMessage,
           onShow () {
           },
           onHide () {
             // self.$router.push('/index')
           }
          })

        }else{
          this.$vux.alert.show({
           title: '介绍修改',
           content:res.data.errorMessage,
           onShow () {
           },
           onHide () {

           }
         })

        }
      })
    }
  },
  components:{
    mySet
  }
}
</script>

<style lang="css">
</style>
