<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

let VueTidyRoutes = require('vue-tidyroutes').default

@Component({
  name: '{{{name}}}',
  components: { }
})
class {{{className}}} extends Vue {
  beforeRouteEnter(to: String, from: String, next: any){
    return next((vm: {{{className}}}) => {
      //TODO validate auth
    })
  }
}

VueTidyRoutes.route ('/{{{name}}}', {name: '{{{name}}}', component: {{{className}}}})
export default {{{className}}}
</script>
<style{{#style}} lang="{{style}}"{{/style}}>
.{{{name}}} {}
</style>
<template{{#html}} lang="{{html}}"{{/html}}>
.{{{name}}Hello from {{{name}}} component
</template>