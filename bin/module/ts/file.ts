export class {{{className}}} {
  public static readonly firstUpdate = '{{{name}}}/firstupdate'
}

export default{
  namespaced: true,
  state:{
    first: '',
    last: '',
  },
  getters:{
    fullname(state: any){
      return "#{state.first} #{state.last}"
    }
  },
  mutations:{
    updatefirst(state: any, first: any){
      state.first = first
    }
  },
  actions:{
    firstupdate(context: any, first: any){
      context.commit('updatefirst', first)
    }
  }
}
