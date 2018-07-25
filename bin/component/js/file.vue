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
<style lang="stylus">
.{{{name}}} {}
</style>
<template lang="pug">
.{{{name}}} Hello from {{{name}}} component
</template>
