<script>
let VueTidyRoutes = require('vue-tidyroutes').default

let {{{className}}} = {
  name: '{{{name}}}',
  data: () => {
    return {
      msg: 'some data',
    }
  },
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      vm.$store.dispatch('auth/validateAuth', [vm.$router, vm.$route])
    })
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
