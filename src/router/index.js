import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index'
import User from '@/view/user/user'
import Cart from '@/view/cart'
import Search from '@/view/search'
import UserInfo from '@/view/user/userInfo'
import SetNiName from '@/view/user/setNiName'
import SetEmail from '@/view/user/setEmail'
import SetQQ from '@/view/user/setQQ'
import SetDesc from '@/view/user/setDesc'
import SetSys from '@/view/user/setSys'
import AboutShop from '@/view/user/aboutShop'
import SetAddress from '@/view/user/setAddress'
import Collection from '@/view/user/collection'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children:[
      	  {
	      	path:'',
	      	component: Index,
	      },
	      {
	      	path:'index',
	      	component: Index,
	      },
	      {
	      	path:'user',
	      	component: User
	      },
	      {
	      	path:'cart',
	      	component: Cart,
	      },
	      {
	      	path:'search',
	      	component: Search,
	      },
      ]
    },{
      path: '/userInfo',
      name: 'userInfo',
      component: UserInfo,
    },{
      path: '/setNiName',
      name: 'setNiName',
      component: SetNiName,
    },{
      path: '/setEmail',
      name: 'setEmail',
      component: SetEmail,
    },{
      path: '/setQQ',
      name: 'setQQ',
      component: SetQQ,
    },{
      path: '/setDesc',
      name: 'setDesc',
      component: SetDesc,
    },{
      path: '/setSys',
      name: 'setSys',
      component: SetSys,
    },{
      path: '/aboutShop',
      name: 'aboutShop',
      component: AboutShop,
    },{
      path: '/setAddress',
      name: 'setAddress',
      component: SetAddress,
    },{
      path: '/collection',
      name: 'collection',
      component: Collection,
    }
  ]
})
