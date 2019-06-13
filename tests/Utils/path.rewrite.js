const fs = require('fs')
const readline = require('readline')
const path = require('path')

const components = [
  'core_hello',
  'core_rate',
  'core_switch',
  'core_tooltip'
]
const coverageFileName = 'coverage_test/lcov.info'

const isMatchLine = function (line) {
  for (const comp of components) {
    if (line.includes(comp)) {
      return comp
    }
  }
  return null
}

const fileStream = fs.createReadStream(coverageFileName)

const lineReader = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
})

let coverage = ''

lineReader.on('line', function (line) {
  const matchComp = isMatchLine(line)
  if (!matchComp) {
    coverage += line + '\n'
  } else {
    let newLine = ''
    // const parts = line.split('.nyc_output/js/')
    const parts = line.split('.nyc_output' + path.sep + 'js' + path.sep)
    if (parts.length > 1) {
      newLine += parts[0]
      newLine += 'src' + path.sep
      // newLine += matchComp + '/'
      newLine += parts[1]
      coverage += newLine + '\n'
    }
  }
})

lineReader.on('close', function () {
  fs.writeFileSync(coverageFileName, coverage)
})
