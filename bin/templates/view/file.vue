<script>
import VueTidyRoutes from 'vue-tidyroutes'
import { GUID } from '../{{#depth}}../{{/depth}}AppConfig'

let {{{className}}} = {
  name: '{{{componentName}}}',
  mixins: [],
  data() {
    return {
      msg: 'some data',
    }
  },
}
VueTidyRoutes.route(`/:locale(\\w\\w)?/:spaceId(${GUID})/{{{fileName}}}`, {
  name: '{{{componentFullName}}}',
  component: {{{className}}},
  meta: { layout: 'authenticated' },
})

export default {{{className}}}
</script>
<template lang="pug">
include ../{{#depth}}../{{/depth}}mixins/html
.{{{componentName}}} Hello from {{{componentName}}} component
  idle-display(v-if="isAppIdle")
</template>
<style lang="less" scoped>
@import '../{{#depth}}../{{/depth}}theme/custom.less';
@import '../{{#depth}}../{{/depth}}theme/fluidMixins.less';
.{{{componentName}}} {}
</style>
