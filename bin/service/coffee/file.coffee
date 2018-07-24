import injector from 'vue-inject'

class {{{className}}} 
  @classVariable: 'this is my class variable'
  
  constructor: () ->
    @classVariable = 'something new'
    
  getValue: () -> @classVariable
  
injector.service '{{{name}}}', {{{className}}}