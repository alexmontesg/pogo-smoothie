'use strict'

const fs = require('fs')
const path = require('path')

class File {
  getContent(fileName, key) {
    const file = path.join(__dirname, '..', '..', 'data', `${fileName}.json`)
    const fileContent = fs.readFileSync(file)
    const content = JSON.parse(fileContent)
    if (key) return content[key]
    return content
  }
}

module.exports = File
