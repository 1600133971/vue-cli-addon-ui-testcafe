<template>
  <div class="vue-webpack-dashboard">
    <div class="pane-toolbar">
      <VueIcon icon="dashboard"/>
      <div class="title">{{ $t('org.vue.st.testcafe.dashboard.title') }}</div>

      <VueButton
        class="icon-button"
        icon-left="sync"
        v-tooltip="$t('org.vue.vue-webpack.sizes.help')"
      />
    </div>

    <div class="content vue-ui-grid default-gap">
      <BuildStatus />
      <BuildProgress />
      <AssetList />
      <ModuleList />
    </div>

  </div>
</template>

<script>
import Dashboard from '../mixins/Dashboard'

import BuildStatus from './BuildStatus'
import BuildProgress from './BuildProgress'
import SpeedStats from './SpeedStats'
import AssetList from './AssetList'
import ModuleList from './ModuleList'

export default {
  mixins: [
    Dashboard
  ],

  components: {
    BuildStatus,
    BuildProgress,
    SpeedStats,
    AssetList,
    ModuleList
  }
}
</script>

<style>
@import '~vue-progress-path/dist/vue-progress-path.css';
</style>

<style lang="stylus" scoped>
@import "~@vue/cli-ui/src/style/imports"

.vue-webpack-dashboard
  .content
    grid-template-columns 9fr 4fr

    >>>
      .title
        color lighten($vue-ui-color-dark, 60%)
        font-size 20px
        font-weight lighter
        text-align center
        margin-bottom $padding-item

      .list
        display grid
        grid-template-columns 1fr
        grid-gap 16px

      .info-block
        v-box()
        box-center()
        font-weight lighter
        text-align center

        .label
          color lighten($vue-ui-color-dark, 60%)
          font-size 20px

        .value
          color $vue-ui-color-dark
          font-size 24px
          .vue-ui-dark-mode &
            color $vue-ui-color-light

          .secondary
            opacity .75
            font-size 16px

  .pane-toolbar,
  .content >>> > div
    padding $padding-item
    background $vue-ui-color-light-neutral
    border-radius $br
    .vue-ui-dark-mode &
      background $vue-ui-color-dark

  .pane-toolbar
    margin-bottom $padding-item

  .logo
    margin $padding-item 0
    v-box()
    box-center()
    .webpack-logo
      width 32px
      height @width
</style>
