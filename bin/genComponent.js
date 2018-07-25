#! /usr/bin/env node
var generate = require('./generator')

var helper = require(`${process.env.INIT_CWD}/package.json`).vueHelper
var [ , , name, ...options] = process.argv

var p = `${process.env.INIT_CWD}\\src\\components\\`
var lang = (helper !== null && helper.lang !== null)? helper.lang : 'js'
var style = (helper !== null && helper.style !== null)? helper.style : null
var html = (helper !== null && helper.html !== null)? helper.html : null

if (name === undefined) {
  console.log(`Adds a component to the components directory, creats the index.${lang} if it is missing.`)
  console.log(` Edit your main to include the /components/index.${lang}.`)
  console.log('  Usage: [name]')
}else{

  generate({type:'component', name:name, style:style, html:html, lang:lang, filePath:p, indexPath:p, fileExt:'vue'})
}
