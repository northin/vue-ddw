<template>
  <div class="userInfo">
    <x-header style="background-color:red">
      <span>我的资料</span>
    </x-header>
    <div class="">
      <group>
         <cell title="头像" is-link @click.native="setIcon">
           <span slot="icon" class="title-span">
             <i class="fa fa-user" aria-hidden="true"></i>
           </span>
           <div>
             <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
           </div>
         </cell>
         <cell title="昵称" is-link @click.native="setNiName">
           <span slot="icon" class="title-span">
             <i class="fa fa-heart" aria-hidden="true"></i>
           </span>
           <div>
             <span>淡淡的</span>
           </div>
         </cell>
         <cell title="性别" is-link @click.native="setSex">
           <span slot="icon" class="title-span">
             <i class="fa fa-venus" aria-hidden="true"></i>
           </span>
           <div>
             <span>男</span>
           </div>
         </cell>
         <cell title="个人介绍" is-link @click.native="setDesc">
           <span slot="icon" class="title-span">
             <i class="fa fa-bars" aria-hidden="true"></i>
           </span>
           <div>
             <div :class="(isBars?'abled':'disAbled')">
               {{ bars }}
             </div>
           </div>
         </cell>
       </group>

       <group>
          <cell title="QQ" is-link  @click.native="setQQ">
            <span slot="icon" class="title-span" >
              <i class="fa fa-qq" aria-hidden="true"></i>
            </span>
            <div>
              <div :class="(isQQ?'abled':'disAbled')">
                {{ qqhao }}
              </div>
            </div>
          </cell>
          <cell title="邮箱" is-link  @click.native="setEmail">
            <span slot="icon" class="title-span">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
            <div>
              <div :class="(isEmail?'abled':'disAbled')">
                {{ email }}
              </div>
            </div>
          </cell>
        </group>
    </div>


    <!-- 头像 -->
    <div v-transfer-dom>
     <popup v-model="showIcon" @on-hide="" @on-show="">
       <div class="popup0">
         <group>
           <div class="popup0-div">从相册中选取</div>
         </group>
         <group>
           <div class="popup0-div">拍照</div>
         </group>
         <group>
           <div class="popup0-div" @click="clearIcon">取消</div>
         </group>
       </div>
     </popup>
   </div>

   <!-- 性别 -->
   <div v-transfer-dom>
    <popup v-model="showSex" @on-hide="" @on-show="">
      <div class="popupSex">
        <group>
          <div class="popup0-div">男</div>
        </group>
        <group>
          <div class="popup0-div">女</div>
        </group>
        <group>
          <div class="popup0-div" @click="clearIcon">取消</div>
        </group>
      </div>
    </popup>
  </div>

  </div>
</template>

<script>
import { TransferDom,XHeader,Cell,Group,Popup } from 'vux'
export default {
  directives: {
    TransferDom
  },
  name: 'userInfo',
  data () {
    return {
      msg: '',
      title:'头像',
      showIcon:false,
      showSex:false,
      isBars:false,
      bars:'介绍一下自己',
      isQQ:false,
      qqhao:'输入您的qq号',
      isEmail:false,
      email:'输入您的邮箱'
    }
  },
  components: {
      XHeader,
      Cell,
      Group,
      Popup
  },
  methods:{
    setNiName(){
      this.$router.push('/setNiName')
    },
    setQQ(){
      this.$router.push('/setQQ')
    },
    setEmail(){
      this.$router.push('/setEmail')
    },
    setDesc(){
      this.$router.push('/setDesc')
    },
    setIcon:function(){
      this.showIcon = true
    },
    setSex:function(){
      this.showSex = true
    },
    clearIcon:function(){
      this.showIcon = false
    }
  }
}
</script>


<style scoped>
.title-span{
  padding-right: 10px;
}
.disAbled{
  color: #ccc;
}
.abled{
  color: #999;
}
.popup0-div{
  text-align: center;
  padding:10px 0;
}
</style>
