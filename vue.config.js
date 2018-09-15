const { clientAddonConfig } = require('@vue/cli-ui')

module.exports = {
  ...clientAddonConfig({
    id: 'org.vue.st.testcafe.client-addon',
    port: 8042
  })
}
