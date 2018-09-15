<script>
import authGuard from '../{{#depth}}../{{/depth}}mixins/authGuard'
import VueTidyRoutes from 'vue-tidyroutes'

let {{{className}}} = {
  name: '{{{componentName}}}',
  mixins: [authGuard],
  data: () => {
    return {
      msg: 'some data',
    }
  },
}
VueTidyRoutes.route('/:locale(\\w\\w)?/{{{fileName}}}', {
  name: '{{{componentFullName}}}',
  component: {{{className}}},
  meta: { layout: 'authenticated' }
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
