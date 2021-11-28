const fs = require('fs')

const ENDPOINTS_PATH = 'src/pageEndPoints.json'
const PAGES_DIR = 'src/pages'

function walk(dir) {
  let files = fs.readdirSync(dir)
  let fileList = []
  files.forEach((file) => {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      fileList = fileList.concat(walk(dir + '/' + file))
    } else {
      fileList.push(dir + '/' + file)
    }
  })
  return fileList
}

function writeEndPointsFile(endPoints) {
  const contents = endPoints.map((endPoint) => ({
    name: makeCamelNameFromPath(endPoint),
    path: endPoint,
  }))

  const serialized = {
    title: 'Page End Points',
    routes: contents,
  }

  fs.writeFileSync(ENDPOINTS_PATH, JSON.stringify(serialized, null, 2))
  // console.log(JSON.stringify(serialized))
}

function makeCamelNameFromPath(path) {
  if (path === '/') {
    return 'Home'
  }

  return path.replace(/[-_/]([a-z])/g, function (g) {
    return g[1].toUpperCase()
  })
}

function main() {
  const files = walk(PAGES_DIR)
  const parsedFiles = files.map((file) => file.replace(PAGES_DIR, ''))

  let endPoints = []
  parsedFiles.forEach((file) => {
    /**
     * 1. not startWith '/_'
     * 2. not startWith '/api'
     * 3. remove index.?
     * 4. remove extension
     */
    if (file.startsWith('/_') || file.startsWith('/api')) {
      return
    }

    const parsed = (function (fileName) {
      const nameWithoutExt = fileName.split('.')[0]
      const name =
        nameWithoutExt.split('/').pop() === 'index'
          ? nameWithoutExt.split('/').slice(0, -1).join('/')
          : nameWithoutExt
      return name ? name : '/'
    })(file)

    endPoints.push(parsed)
  })

  writeEndPointsFile(endPoints.sort((a, b) => (a > b ? 1 : -1)))
}

main()
