#! /usr/bin/env node
var generate = require('./generator')

var [ , , name] = process.argv

var p = `${process.env.INIT_CWD}/src/mixins/`

if (name === undefined) {
  console.log(`Adds a mixin to the mixins directory, creats the index if it is missing.`)
  console.log('  Usage: [name]')
}else{
  generate({type:'mixin', name:name, filePath:p})
}
