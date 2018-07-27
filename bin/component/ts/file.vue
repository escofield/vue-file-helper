<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
{{#scriptComponentImports}}
{{{.}}}
{{/scriptComponentImports}}

@Component({
  name: '{{{name}}}',
  mixins: [{{#scriptComponentMixins}}{{{.}}}, {{/scriptComponentMixins}}],
  components: { }
})
export default class {{{className}}} extends Vue {}
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
