export default
  namespaced: true
  state:
    first: ''
    last: ''
  getters:
    fullname: (state) -> "#{state.first} #{state.last}"
  mutations:
    updatefirst: (state, first) ->
      state.first = first
  actions:
    firstupdate: (context, first) ->
      context.commit('updatefirst', first)