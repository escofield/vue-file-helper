var fs = require('fs')
var replace = require('replace')
var mustache = require('mustache')

module.exports = function({type, name, lang, html, style, filePath, indexPath, fileExt}) {
  var className = name.charAt(0).toUpperCase() + name.substr(1)
  var template = {
    'ts': {
      ext: 'ts',
      r1: '// GEN_INSERT_TOKEN_1 //',
      r2: '// GEN_INSERT_TOKEN_2 //',
    },
    'js': {
      ext: 'js',
      r1: '// GEN_INSERT_TOKEN_1 //',
      r2: '// GEN_INSERT_TOKEN_2 //',
    },
    'coffee': {
      ext: 'coffee',
      r1: '## GEN_INSERT_TOKEN_1 ##',
      r2: '## GEN_INSERT_TOKEN_2 ##',
    }
  }
  var view = Object.assign(template[lang], {className: className, name: name, style: style, html: html})
  fileExt = !!fileExt ? fileExt : view.ext
  var file = `${filePath}${name}.${fileExt}`
  var tPath = `${__dirname}\\${type}\\${lang}\\`
  view.rt1 = mustache.render(fs.readFileSync(`${tPath}replacement1.${view.ext}`).toString(),view)
  view.rt2 = mustache.render(fs.readFileSync(`${tPath}replacement2.${view.ext}`).toString(),view)
  view.t = mustache.render(fs.readFileSync(`${tPath}file.${fileExt}`).toString(),view)
  
  if(indexPath){
    var indexfile = `${indexPath}index.${view.ext}`
    view.i = mustache.render(fs.readFileSync(`${tPath}indexfile.${view.ext}`).toString(),view)
    try { fs.mkdirSync(indexPath)} catch (e) {;}
    if(!fs.existsSync(indexfile)){
      fs.writeFileSync(indexfile,view.i
      )
      console.log(`Created: ${indexfile}`)
    }else{
      replace({
        regex: view.r1,
        replacement: view.rt1,
        paths: [indexfile],
        recursive: false,
        silent: false
      })
      replace({
        regex: view.r2,
        replacement: view.rt2,
        paths: [indexfile],
        recursive: false,
        silent: false
      })
    }
  }
  try { fs.mkdirSync(filePath)} catch (e) {;}
  fs.writeFileSync(file,view.t)
  console.log(`Created: ${file}`)
}