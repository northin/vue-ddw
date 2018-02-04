<template lang="html">
  <div class="">
    <mySet :setTitle="'设置QQ号'"  @doSave=save></mySet>
  </div>
</template>

<script>
import mySet from '../../components/mySet.vue'
export default {
  name: 'setQQ',
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
