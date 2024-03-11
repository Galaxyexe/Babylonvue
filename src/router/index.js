import Vue from 'vue'
import Router from 'vue-router'

// import Navbar from '@/components/Navbar'
import ProfilePage from '@/components/ProfilePage'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import About from '@/components/About'
import News from '@/components/News'
import Games from '@/components/Games'
import Login from '@/components/Login'
import Game1 from '@/components/gamelist/Game1'
import GameTemplate from '@/components/GameTemplate'

Vue.use(Router)

export default new Router({
  mode: 'history', // history changes url path so you don't need a # before page
  routes: [
    {
      path: '/profilepage',
      name: 'ProfilePage',
      component: ProfilePage
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/games',
      name: 'Games',
      component: Games
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/game1',
      name: 'Game1',
      component: Game1
    },
    {
      path: '/gametemplate',
      name: 'GameTemplate',
      component: GameTemplate
    }
  ]
})
