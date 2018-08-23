#! /usr/bin/env node
var generate = require('./generator')

var [ , , name,] = process.argv

var p = `${process.env.INIT_CWD}\\src\\components\\`

if (name === undefined) {
  console.log(`Adds a component to the components directory, creats the index if it is missing.`)
  console.log(` Edit your main to include the /components/index.`)
  console.log('  Usage: [name]')
}else{

  generate({type:'component', name:name, filePath:p })
}
