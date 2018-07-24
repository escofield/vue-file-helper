#! /usr/bin/env node
var generate = require('./generator')

var helper = require(`${process.env.INIT_CWD}/package.json`).vueHelper
var [ , , name, ...options] = process.argv

var p = `${process.env.INIT_CWD}\\src\\views\\`
var lang = (helper !== null && helper.lang !== null)? helper.lang : 'js'

if (name === undefined) {
  console.log(`Adds a view to the views directory, creats the index.${lang} if it is missing.`)
  console.log(` Edit your main to include the /views/index.${lang}.`)
  console.log('  Usage: [name]')
}else{

  generate({type:'view', name:name, lang:lang, filePath:p, indexPath:p, fileExt:'vue'})
}
