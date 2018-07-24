<script>
import { Component, Vue } from 'vue-property-decorator'

let VueTidyRoutes = require('vue-tidyroutes').default

@Component({
  name: '{{{name}}}',
  components: { }
})
class {{{className}}} extends Vue {
  beforeRouteEnter(to, from, next){
    return next((vm) => {
      //TODO validate auth
    })
  }
}

VueTidyRoutes.route ('/{{{name}}}', {name: '{{{name}}}', component: {{{className}}}})
export default {{{className}}}
</script>
<style lang="stylus">
.{{{name}}} {}
</style>
<template lang="pug">
.{{{name}}} Hello from {{{name}}} component
</template>