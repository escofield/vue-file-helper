#! /usr/bin/env node
var generate = require('./generator')

var helper = require(`${process.env.INIT_CWD}/package.json`).vueHelper
var [ , , name, ...options] = process.argv

var p = `${process.env.INIT_CWD}\\src\\mixins\\`
var lang = (helper !== null && helper.lang !== null)? helper.lang : 'js'

if (name === undefined) {
  console.log(`Adds a mixin to the mixins directory, creats the index.${lang} if it is missing.`)
  console.log('  Usage: [name]')
}else{
  generate({type:'mixin', name:name, lang:lang, filePath:p})
}
