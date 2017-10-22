import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserVaults from '@/components/UserVaults'
import Vault from '@/components/Vault'
import Keep from '@/components/Product'
import SingleProductView from '@/components/SingleProductView'
import SingleVaultView from '@/components/SingleVaultView'
import Dashboard from '@/components/Dashboard'
import Cart from '@/components/Cart'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/account',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/vaults',
      name: 'UserVaults',
      component: UserVaults
    },
    {
      path: '/vaults/:vaultId',
      name: 'Vault',
      component: SingleVaultView
    },
    {
      path: '/products/:productId',
      name: 'SingleProductView',
      component: SingleProductView
    }
  ]
})
