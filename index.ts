#!/usr/bin/env node

import fs from 'fs'
import path from 'path'

const appName = process.argv[2]

if (!appName) {
  console.error('Usage: create-ts-downstream-boilerplate <app-name>')
  process.exit(1)
}

const targetDir = path.join(process.cwd(), appName)
const templateDir = __dirname

console.log(`Creating new TypeScript API project "${appName}"...`)

// Create target directory
if (fs.existsSync(targetDir)) {
  console.error(`Directory ${appName} already exists!`)
  process.exit(1)
}

fs.mkdirSync(targetDir, { recursive: true })

// Files to copy with content replacement
const filesToCopy = ['Src', '.env', '.gitignore']

// Template files that need renaming
const templateFiles: Record<string, string> = {
  'README-template.md': 'README.md',
  'tsconfig-template.json': 'tsconfig.json'
}

function copyRecursive(src: string, dest: string): void {
  if (fs.statSync(src).isDirectory()) {
    fs.mkdirSync(dest, { recursive: true })
    for (const file of fs.readdirSync(src)) {
      const srcPath = path.join(src, file)
      const destPath = path.join(dest, file)
      copyRecursive(srcPath, destPath)
    }
  } else {
    let content = fs.readFileSync(src, 'utf8')
    content = content.replace(/__APP_NAME__/g, appName)
    fs.writeFileSync(dest, content)
  }
}

// Copy regular files
for (const file of filesToCopy) {
  const srcPath = path.join(templateDir, file)
  const destPath = path.join(targetDir, file)

  if (fs.existsSync(srcPath)) {
    copyRecursive(srcPath, destPath)
  }
}

// Copy template files with renaming
for (const [templateFile, targetFile] of Object.entries(templateFiles)) {
  const srcPath = path.join(templateDir, templateFile)
  const destPath = path.join(targetDir, targetFile)

  if (fs.existsSync(srcPath)) {
    let content = fs.readFileSync(srcPath, 'utf8')
    content = content.replace(/__APP_NAME__/g, appName)
    fs.writeFileSync(destPath, content)
  }
}

// Copy package-template.json as package.json
const packageTemplatePath = path.join(templateDir, 'package-template.json')
const packagePath = path.join(targetDir, 'package.json')

if (fs.existsSync(packageTemplatePath)) {
  let packageContent = fs.readFileSync(packageTemplatePath, 'utf8')
  packageContent = packageContent.replace(/__APP_NAME__/g, appName)
  fs.writeFileSync(packagePath, packageContent)
}

console.log(`✅ Project "${appName}" created successfully!`)
console.log(`\nNext steps:`)
console.log(`  cd ${appName}`)
console.log(`  npm install`)
console.log(`  npm run dev`)
console.log(`\nHappy coding! 🚀`)
