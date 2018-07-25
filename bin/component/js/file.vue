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
<template{{#html}} lang="{{html}}"{{/html}}>
.{{{name}}} Hello from {{{name}}} component
</template>
<style{{#style}} lang="{{style}}"{{/style}}>
{{#styleImports}}
{{{.}}}
{{/styleImports}}
.{{{name}}} {}
</style>
