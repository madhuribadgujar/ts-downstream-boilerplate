#!/usr/bin/env node

import fs from 'fs'
import path from 'path'

const appName = process.argv[2]

if (!appName) {
  console.error('Usage: ts-downstream-boilerplate <Basic_Boilerplate_>')
  process.exit(1)
}

const targetDir = path.join(process.cwd(), appName)
const templateDir = path.join(__dirname, '../Src')
console.log(`Creating new app in ${targetDir}`)
function copy(src: string, dest: string) {
  fs.mkdirSync(dest, { recursive: true })

  for (const file of fs.readdirSync(src)) {
    const srcPath = path.join(src, file)
    const destPath = path.join(dest, file)

    if (fs.statSync(srcPath).isDirectory()) {
      copy(srcPath, destPath)
    } else {
      let content = fs.readFileSync(srcPath, 'utf8')
      content = content.replace(/__APP_NAME__/g, appName)
      fs.writeFileSync(destPath, content)
    }
  }
}

copy(templateDir, targetDir)
console.log(`${appName} created`)
