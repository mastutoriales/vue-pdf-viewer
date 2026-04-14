const fs = require('fs')
const path = require('path')

const distDir = path.resolve(__dirname, '..', 'dist')
const indexFile = path.join(distDir, 'index.js')

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true })
}

fs.writeFileSync(indexFile, "module.exports = require('./vue3-pdf-viewer.js')\n")
