<script>
import { Component, Vue } from 'vue-property-decorator'

export default  {
  name: '{{{name}}}',
  data: () => {
    return {
      msg: 'some data',
    }
  },
}
</script>
<style{{#style}} lang="{{style}}"{{/style}}>
.{{{name}}} {}
</style>
<template{{#html}} lang="{{html}}"{{/html}}>
.{{{name}}Hello from {{{name}}} component
</template>