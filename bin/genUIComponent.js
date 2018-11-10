#! /usr/bin/env node
var generate = require('./generator')

var [ , , name,] = process.argv

var p = `${process.env.INIT_CWD}\\src\\theme\\components\\`

if (name === undefined) {
  console.log(`Adds a UI component to the components directory, creats the index if it is missing.`)
  console.log(` Edit your main to include the /src/theme/components/index.`)
  console.log('  Usage: [name]')
}else{

  generate({type:'ui', name:name, filePath:p })
}
