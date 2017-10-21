import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserVaults from '@/components/UserVaults'
import Vault from '@/components/Vault'
import Keep from '@/components/Product'
import SingleKeepView from '@/components/SingleKeepView'
import SingleVaultView from '@/components/SingleVaultView'
import Dashboard from '@/components/Dashboard'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
      path: '/keeps/:keepId',
      name: 'SingleKeepView',
      component: SingleKeepView
    }
  ]
})
