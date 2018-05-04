const fs = require('fs'),
  ejs = require("ejs"),
  yaml = require('js-yaml')

// read yml
let cfg = yaml.safeLoad(fs.readFileSync('_config.yml', 'utf8'));

// transfer yml link to html link
function transferLink(obj) {
  if (typeof obj !== 'string') {
    return obj
  }

  // []()
  let newObj = obj.replace(/(\[)(.*?)(\]\()(.*?)(\))/g, function (match, p1, p2, p3, p4, p5) {
    return `<a href="${p4}" target="_blank">${p2}</a>`
  })

  return newObj 
}

// traveral object
function traversalObject(obj, cb) {
  if (Object.prototype.toString.call(obj) === '[object Null]' ||
    Object.prototype.toString.call(obj) === '[object Undefined]' ||
    typeof obj !== 'object'
  ) {
    return obj
  }

  let newObj = Array.isArray(obj) ? [] : {}
  let keys = Object.keys(obj)
  keys.forEach((key) => {
    newObj[key] = typeof obj[key] === 'object' ? traversalObject(obj[key], cb) : cb(obj[key])
  })
  return newObj
}

let modifiedCfg = traversalObject(cfg, transferLink)

// render ejs
function ejs2html(path, information) {
  fs.readFile(path, 'utf8', function (err, data) {
    if (err) { console.log(err); return false; }
    var ejs_string = data,
      template = ejs.compile(ejs_string),
      html = template(information);
    fs.writeFile('index.html', html, function (err) {
      if (err) { console.log(err); return false }
      return true;
    });
  });
}

ejs2html(__dirname + "/index.ejs", modifiedCfg)