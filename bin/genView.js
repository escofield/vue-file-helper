#! /usr/bin/env node
var generate = require('./generator')

var [ , , name] = process.argv

var p = `${process.env.INIT_CWD}\\src\\views\\`

if (name === undefined) {
  console.log(`Adds a view to the views directory, creats the index if it is missing.`)
  console.log(` Edit your main to include the /views/index.`)
  console.log('  Usage: [name]')
}else{

  generate({type:'view', name:name, filePath:p })
}
