import App from './src/App'
import Foo from './src/routes/Foo'
import Bar from './src/routes/Bar'

export default [
  { path: '/', component: App },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]