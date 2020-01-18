import Root from './src/routes/Root'
import Login from './src/routes/Login'
import Admin from './src/routes/Admin'
import Home from './src/routes/Home'
import Foo from './src/routes/Foo'
import Bar from './src/routes/Bar'

export default [
  { path: '/', component: Root },
  { path: '/login', component: Login },
  { path: '/admin', component: Admin,
    children: [
      { path: '/', component: Home },
      { path: 'foo', component: Foo },
      { path: 'bar', component: Bar },
    ]
  },
]