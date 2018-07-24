<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: '{{{name}}}',
  components: { }
})
export default class {{{className}}} extends Vue {}
</script>
<style lang="stylus">
.{{{name}}} {}
</style>
<template lang="pug">
.{{{name}}} Hello from {{{name}}} component
</template>