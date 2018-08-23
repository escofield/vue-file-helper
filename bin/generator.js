var fs = require('fs-extra')
var replace = require('replace')
var mustache = require('mustache')

module.exports = function({type, name, filePath}) {
  var className = name.charAt(0).toUpperCase() + name.substr(1)
  className = className.replace('-','_').replace('.','_')
  var template = {
    r1: '// GEN_INSERT_TOKEN_1 //',
    r2: '// GEN_INSERT_TOKEN_2 //',
  }

  fs.copySync(`${__dirname}\\templates`, `${process.env.INIT_CWD}/vue-helper-templates/`, {overwrite: false})
  var tPath = `${process.env.INIT_CWD}\\vue-helper-templates\\${type}\\`
  console.log(tPath)
  var files = fs.readdirSync(tPath)
  var mainFile = String(files.filter(x => x.startsWith('file.'))) || ''
  var indexFile = String(files.filter(x => x.startsWith('indexfile.'))) || ''
  var mainExt = mainFile.split('.').pop()
  var indexExt = indexFile.split('.').pop()

  var view = Object.assign(template, {className: className, name: name})
  var file = `${filePath}${name}.${mainExt}`

  view.rt1 = mustache.render(fs.readFileSync(`${tPath}replacement1`).toString(),view)
  view.rt2 = mustache.render(fs.readFileSync(`${tPath}replacement2`).toString(),view)
  view.t = mustache.render(fs.readFileSync(`${tPath}file.${mainExt}`).toString(),view)
  
  try { fs.mkdirSync(filePath)} catch (e) {;}

  if(indexFile.length > 0){
    var indexfile = `${filePath}index.${indexExt}`
    view.i = mustache.render(fs.readFileSync(`${tPath}indexfile.${indexExt}`).toString(),view)
    
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
  fs.writeFileSync(file,view.t)
  console.log(`Created: ${file}`)
}