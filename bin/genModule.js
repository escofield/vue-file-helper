#! /usr/bin/env node
var generate = require('./generator')

var [ , , name] = process.argv

var p = `${process.env.INIT_CWD}/src/store/`

if (name === undefined) {
  console.log(`Adds a module to the modules directory, creats the index if it is missing.`)
  console.log(` Edit your main to include the /store/modules/index.`)
  console.log('  Usage: [name]')
}else{

  generate({type:'module', name:name, filePath:p })
}
