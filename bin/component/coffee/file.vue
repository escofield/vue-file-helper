<script lang="coffee">
export default
  name: {{{className}}} 
  data: () ->
    msg: 'some data'
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