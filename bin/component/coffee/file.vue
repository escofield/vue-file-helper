<script lang="coffee">
export default
  name: {{{className}}} 
  data: () ->
    msg: 'some data'
</script>
<style lang="stylus">
.{{{name}}} {}
</style>
<template lang="pug">
.{{{name}}} Hello from {{{name}}} component
</template>