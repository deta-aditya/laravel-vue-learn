import Home from './src/routes/Home'
import Foo from './src/routes/Foo'
import Bar from './src/routes/Bar'

export default [
  { path: '/', component: Home },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
]