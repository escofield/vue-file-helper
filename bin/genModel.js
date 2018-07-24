#! /usr/bin/env node
var generate = require('./generator')

var helper = require(`${process.env.INIT_CWD}/package.json`).vueHelper
var [ , , name, ...options] = process.argv

var p = `${process.env.INIT_CWD}\\src\\models\\`
var lang = (helper !== null && helper.lang !== null)? helper.lang : 'js'

if (name === undefined) {
  console.log(`Adds a model to the models directory, creats the index.${lang} if it is missing.`)
  console.log('  Usage: [name]')
}else{
  generate({type:'model', name:name, lang:lang, filePath:p})
}
