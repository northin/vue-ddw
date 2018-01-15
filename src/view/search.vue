<template>
  <div class="hello">
    search
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
import myfooter from '../components/myfooter.vue'
export default {
  name: 'index',
  data () {
    return {
      msg: 'index',
    }
  },
  components: {
    myfooter,
    Group,
    Cell
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
