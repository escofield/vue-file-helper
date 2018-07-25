<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: '{{{name}}}',
  components: { }
})
export default class {{{className}}} extends Vue {}
</script>
<style{{#style}} lang="{{style}}"{{/style}}>
{{#styleImports}}
{{{.}}}
{{/styleImports}}
.{{{name}}} {}
</style>
<template{{#html}} lang="{{html}}"{{/html}}>
.{{{name}}} Hello from {{{name}}} component
</template>