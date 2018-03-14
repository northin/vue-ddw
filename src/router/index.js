import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index'
import IndexMain from '@/view/indexMain'
import User from '@/view/user/user'
import Cart from '@/view/cart'
import Order from '@/view/order'
import OrderDetail from '@/view/orderDetail'
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
import Detail from '@/view/detail'
import SearchDetail from '@/view/searchDetail'
import Login from '@/view/login'
import Register from '@/view/register'
import store from '@/store/index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,

      children:[
      	  {
	      	path:'',
	      	component: IndexMain,
	      },
	      {
	      	path:'index',
	      	component: IndexMain,
	      },
	      {
	      	path:'user',
	      	component: User,
          meta: {
            requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
          },
	      },
	      {
	      	path:'cart',
	      	component: Cart,
          meta: {
            requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
          },
	      },
	      {
	      	path:'search',
	      	component: Search,
	      },
      ]
    },{
      path:'/order/:order_id',
      component: Order,
      meta: {
        requireAuth: false // 添加该字段，表示进入这个路由是需要登录的
      }
    },{
      path:'/orderDetail/:order_status',
      component: OrderDetail,
      meta: {
        requireAuth: false // 添加该字段，表示进入这个路由是需要登录的
      }
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
    },{
      path: '/detail/:id',
      name: 'detail',
      component: Detail,
    },{
      path: '/searchDetail',
      name: 'searchDetail',
      component: SearchDetail,
    },{
      path: '/login',
      name: 'login',
      component: Login,
    },{
      path: '/register',
      name: 'register',
      component: Register,
    }
  ]
})
router.beforeEach((to, from, next) => {
  let token = store.state.token;
    //判断要去的路由有没有requiresAuth
  // console.log(to.meta.requireAuth);
  if(to.meta.requireAuth){
    console.log(token)
    if(token != 'undefined' && token != undefined){
      next();
    }else{
      next({
        path: '/login',
        query: {redirect: to.path}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
    }
  }else{
    next();//如果无需token,那么随它去吧
  }
})



export default router;
