<template>
  <div class="build-status">
    <div class="content">
      <div class="info-block status">
        <div class="label">
          {{ $t('org.vue.st.testcafe.build-status.labels.status') }}
        </div>
        <div class="value">{{ $t(`org.vue.st.testcafe.build-status.${status || 'Idle'}`) }}</div>
      </div>
      <div class="info-block total">
        <div class="label">
          {{ $t('org.vue.st.testcafe.build-status.labels.total') }}
        </div>
        <div class="value">{{ total }}</div>
      </div>
      <div class="info-block skipped">
        <div class="label">
          {{ $t('org.vue.st.testcafe.build-status.labels.skipped') }}
        </div>
        <div class="value">{{ skipped }}</div>
      </div>
      <div class="info-block processed">
        <div class="label">
          {{ $t('org.vue.st.testcafe.build-status.labels.processed') }}
        </div>
        <div class="value">{{ processed }}</div>
      </div>
      <div class="info-block passed">
        <div class="label">
          {{ $t('org.vue.st.testcafe.build-status.labels.passed') }}
        </div>
        <div class="value">{{ passed }}</div>
      </div>
      <div class="info-block failed">
        <div class="label">
          {{ $t('org.vue.st.testcafe.build-status.labels.failed') }}
        </div>
        <div class="value">{{ failed }}</div>
      </div>
      <div class="info-block fixtures">
        <div class="label">
          {{ $t('org.vue.st.testcafe.build-status.labels.fixtures') }}
        </div>
        <div class="value">{{ fixtures }}</div>
      </div>
      <div class="info-block warnings">
        <div class="label">
          {{ $t('org.vue.st.testcafe.build-status.labels.warnings') }}
        </div>
        <div class="value">{{ warnings }}</div>
      </div>
      <div class="info-block duration">
        <div class="label">
          {{ $t('org.vue.st.testcafe.build-status.labels.duration') }}
        </div>
        <div class="value">{{ duration }}</div>
      </div>
      <div class="info-block startTime">
        <div class="label">
          {{ $t('org.vue.st.testcafe.build-status.labels.startTime') }}
        </div>
        <div class="value">{{ startTime }}</div>
      </div>
      <div class="info-block endTime">
        <div class="label">
          {{ $t('org.vue.st.testcafe.build-status.labels.endTime') }}
        </div>
        <div class="value">{{ endTime }}</div>
      </div>
      <div class="info-block userAgents">
        <div class="label">
          {{ $t('org.vue.st.testcafe.build-status.labels.userAgents') }}
        </div>
        <div class="value">{{ userAgents }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { size, round } from '../filters'

export default {
  // 同步共享的数据
  sharedData () {
    return {
      status: 'build-status.status',
      total: 'build-status.total',
      skipped: 'build-status.skipped',
      processed: 'build-status.processed',
      passed: 'build-status.passed',
      failed: 'build-status.failed',
      fixtures: 'build-status.fixtures',
      warnings: 'build-status.warnings',
      startTime: 'build-status.startTime',
      endTime: 'build-status.endTime',
      duration: 'build-status.duration',
      userAgents: 'build-status.userAgents'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~@vue/cli-ui/src/style/imports"

.build-status
  .content
    height 100%
    display grid
    grid-template-columns repeat(3, 1fr)
    grid-gap $padding-item

  .info-block
    &.emphasize
      .value
        font-weight bold
      &.errors .value
        color $vue-ui-color-danger !important
      &.warnings .value
        color $vue-ui-color-warning !important
</style>
