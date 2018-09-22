import VueProgress from 'vue-progress-path'
import HelloWorld from './components/HelloWorld.vue'
import WebpackDashboard from './components/WebpackDashboard.vue'
import WebpackAnalyzer from './components/WebpackAnalyzer.vue'
import TestCafeStatistics from './components/TestCafeStatistics.vue'
import TestView from './components/TestView.vue'

// 你可以安装额外的 Vue 插件
// 使用全局的 'Vue' 变量
Vue.use(VueProgress, {
  defaultShape: 'circle'
})

// 注册一个自定义组件
// (工作原理类似 'Vue.component')
ClientAddonApi.component('org.vue.st.testcafe.components.helloworld', HelloWorld)
ClientAddonApi.component('org.vue.st.testcafe.components.dashboard', WebpackDashboard)
ClientAddonApi.component('org.vue.st.testcafe.components.analyzer', WebpackAnalyzer)
ClientAddonApi.component('org.vue.st.testcafe.components.statistics', TestCafeStatistics)
ClientAddonApi.component('org.vue.st.testcafe.components.testview', TestView)

// 在 vue-router 中为 /addon/<id> 添加子路由。
// 例如，addRoutes('foo', [ { path: '' }, { path: 'bar' } ])
// 将会向路由器添加 /addon/foo/ 和 /addon/foo/bar。
// 我们在此用 'test-webpack-route' 名称创建一个新的 '/addon/vue-webpack/' 路由
ClientAddonApi.addRoutes('org.vue.st.testcafe', [
  { path: '', name: 'org.vue.st.testcafe.routes.test', component: TestView }
])

// Locales
const locales = require.context('./locales', true, /[a-z0-9]+\.json$/i)
locales.keys().forEach(key => {
  const locale = key.match(/([a-z0-9]+)\./i)[1]
  ClientAddonApi.addLocalization(locale, locales(key))
})
