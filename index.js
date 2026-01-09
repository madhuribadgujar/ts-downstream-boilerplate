#!/usr/bin/env node
'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const fs_1 = __importDefault(require('fs'))
const path_1 = __importDefault(require('path'))
const appName = process.argv[2]
if (!appName) {
  console.error('Usage: ts-downstream-boilerplate <Basic_Boilerplate_>')
  process.exit(1)
}
const targetDir = path_1.default.join(process.cwd(), appName)
const templateDir = path_1.default.join(__dirname, 'Src')
console.log(`Creating new app in ${targetDir}`)
function copy(src, dest) {
  fs_1.default.mkdirSync(dest, { recursive: true })
  for (const file of fs_1.default.readdirSync(src)) {
    const srcPath = path_1.default.join(src, file)
    const destPath = path_1.default.join(dest, file)
    if (fs_1.default.statSync(srcPath).isDirectory()) {
      copy(srcPath, destPath)
    } else {
      let content = fs_1.default.readFileSync(srcPath, 'utf8')
      content = content.replace(/__APP_NAME__/g, appName)
      fs_1.default.writeFileSync(destPath, content)
    }
  }
}
copy(templateDir, targetDir)
console.log(`${appName} created`)
//# sourceMappingURL=index.js.map
