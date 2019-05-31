#! /usr/bin/env node
var generate = require('./generator')

var [ , , name] = process.argv

var p = `${process.env.INIT_CWD}/src/services/`

if (name === undefined) {
  console.log(`Adds a service to the services directory, creats the index if it is missing.`)
  console.log(` Edit your main to include the /store/services/index.`)
  console.log('  Usage: [name]')
}else{

  generate({type:'service', name:name, filePath:p })
}
