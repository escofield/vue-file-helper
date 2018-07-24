<script lang="coffee">
import VueTidyRoutes from 'vue-tidyroutes'
{{{className}}} =
  name: '{{{name}}}'
  data: () ->
      msg: 'some data'
  
VueTidyRoutes.route '/{{{name}}}',
                   name: '{{{name}}}'
                   component: {{{className}}}

export default {{{className}}}
</script>
<style lang="stylus">
.{{{name}}} {}
</style>
<template lang="pug">
.{{{name}}} Hello from {{{name}}} component
</template>