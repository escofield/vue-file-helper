#! /usr/bin/env node
var generate = require('./generator')

var [ , , name] = process.argv

var p = `${process.env.INIT_CWD}/src/filters/`

if (name === undefined) {
  console.log(`Adds a filter to the filters directory, creates the index if it is missing.`)
  console.log(` Edit your main to include the /filters/index`)
  console.log('  Usage: [name]')
}else{
  generate({type:'filter', name:name, filePath:p })
}
