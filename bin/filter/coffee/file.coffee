import Vue from 'vue'

Vue.filter '{{{name}}}', (value) ->
  if value?
    value = value.toString()
    value = value.charAt(0).toUpperCase() + value.slice(1)
  return value