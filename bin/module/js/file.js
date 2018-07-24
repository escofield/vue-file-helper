export class {{{className}}} {
  var firstUpdate = '{{{name}}}/firstupdate'
}

export default{
  namespaced: true,
  state:{
    first: '',
    last: '',
  },
  getters:{
    fullname(state){
      return "#{state.first} #{state.last}"
    }
  },
  mutations:{
    updatefirst(state, first){
      state.first = first
    }
  },
  actions:{
    firstupdate(context, first){
      context.commit('updatefirst', first)
    }
  }
}
