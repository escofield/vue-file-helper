<script lang="coffee">
{{#scriptComponentImports}}
{{{.}}}
{{/scriptComponentImports}}

export default
  name: {{{className}}}
  mixins: [{{#scriptComponentMixins}}{{{.}}}, {{/scriptComponentMixins}}]
  data: () ->
    msg: 'some data'
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
