var fs = require('fs-extra')
var replace = require('replace')
var mustache = require('mustache')

String.prototype.reUpCaseAll = function (search) {
  if (replace === undefined) {
      return this.toString();
  }
  return this.split(search).map(x => {
    return x.charAt(0).toUpperCase() + x.slice(1)    
  }).join('');
}
module.exports = function({type, name, filePath}) {
  const p = name.split('/')
  const o = p.pop()
  let subPath = filePath
  var depth = []

  try { fs.mkdirSync(subPath)} catch (e) {;}

  if(p && p.length > 0) {
    for(const s in p) {
      subPath = `${subPath}${p[s]}\\`
      depth.push('')
      try { fs.mkdirSync(subPath)} catch (e) {;}
    }
  }
  var upCaseName = o.reUpCaseAll('-').reUpCaseAll('.')
  var camelClassName = upCaseName.charAt(0).toLowerCase() + upCaseName.slice(1)

  var view = {
    r1: '// GEN_INSERT_TOKEN_1 //',
    r2: '// GEN_INSERT_TOKEN_2 //',
    className:  upCaseName,
    componentName: o.replace(/\./g,'-').replace(/\//g,'-'),
    componentFullName: name.replace(/\./g,'-').replace(/\//g,'-'),
    camelClassName: camelClassName,
    name: o,
    fileName: name,
    depth: depth
  }

  fs.copySync(`${__dirname}\\templates`, `${process.env.INIT_CWD}/vue-helper-templates/`, {overwrite: false})
  var tPath = `${process.env.INIT_CWD}\\vue-helper-templates\\${type}\\`
  console.log(tPath)
  var files = fs.readdirSync(tPath)
  var mainFile = String(files.filter(x => x.startsWith('file.'))) || ''
  var indexFile = String(files.filter(x => x.startsWith('indexfile.'))) || ''
  var mainExt = mainFile.split('.').pop()
  var indexExt = indexFile.split('.').pop()

  var file = `${filePath}${name}.${mainExt}`

  if(fs.existsSync(file)) {
    console.log(`************ ${file}`)
    console.log(`ERROR:  file exists!`)
    return
  }
  view.rt1 = mustache.render(fs.readFileSync(`${tPath}replacement1`).toString(),view)
  view.rt2 = mustache.render(fs.readFileSync(`${tPath}replacement2`).toString(),view)
  view.t = mustache.render(fs.readFileSync(`${tPath}file.${mainExt}`).toString(),view)
  console.log(`writing dir ${subPath}`)

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