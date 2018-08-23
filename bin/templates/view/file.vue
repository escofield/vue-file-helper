<script>
{{#scriptViewImports}}
{{{.}}}
{{/scriptViewImports}}

let {{{className}}} = {
  name: '{{{name}}}',
  mixins: [{{#scriptViewMixins}}{{{.}}}, {{/scriptViewMixins}}],
  data: () => {
    return {
      msg: 'some data',
    }
  },
}
VueTidyRoutes.route('/{{{name}}}', { name: '{{{name}}}', component: {{{className}}} })

export default {{{className}}}
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
