<template lang="html">
  <div class="">
    <mySet :setTitle="'设置邮箱'" :setType="'email'" @doSave=save></mySet>
  </div>
</template>

<script>
import mySet from '../../components/mySet.vue'
export default {
  name: 'setEmail',
  data () {
    return {

    }
  },
  methods:{
    save(value){
      console.log(value)
    }
  },
  components:{
    mySet
  }
}
</script>

<style lang="css">
</style>
