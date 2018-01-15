import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index'
import User from '@/view/user'
import Cart from '@/view/cart'
import Search from '@/view/search'

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
	      	component: User,
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
    }
  ]
})
