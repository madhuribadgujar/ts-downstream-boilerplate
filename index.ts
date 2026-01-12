#!/usr/bin/env node

import fs from 'fs'
import path from 'path'

const appName = process.argv[2]

if (!appName) {
  console.error('Usage: create-ts-downstream-boilerplate <app-name>')
  process.exit(1)
}

const targetDir = path.join(process.cwd(), appName)
const templateDir = path.join(__dirname, 'Src')

console.log(`Creating new TypeScript API project "${appName}"...`)

// Create target directory
if (fs.existsSync(targetDir)) {
  console.error(`Directory ${appName} already exists.`)
  process.exit(1)
}

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

// Copy the main source files
copy(templateDir, targetDir)

// Copy package.json template
const packageTemplatePath = path.join(__dirname, 'package-template.json')
const packageDestPath = path.join(targetDir, 'package.json')
if (fs.existsSync(packageTemplatePath)) {
  let packageContent = fs.readFileSync(packageTemplatePath, 'utf8')
  packageContent = packageContent.replace(/__APP_NAME__/g, appName)
  fs.writeFileSync(packageDestPath, packageContent)
}

// Copy tsconfig.json template
const tsconfigTemplatePath = path.join(__dirname, 'tsconfig-template.json')
const tsconfigDestPath = path.join(targetDir, 'tsconfig.json')
if (fs.existsSync(tsconfigTemplatePath)) {
  let tsconfigContent = fs.readFileSync(tsconfigTemplatePath, 'utf8')
  tsconfigContent = tsconfigContent.replace(/__APP_NAME__/g, appName)
  fs.writeFileSync(tsconfigDestPath, tsconfigContent)
}

// Copy .env file
const envTemplatePath = path.join(__dirname, '.env')
const envDestPath = path.join(targetDir, '.env')
if (fs.existsSync(envTemplatePath)) {
  fs.copyFileSync(envTemplatePath, envDestPath)
}

// Copy README template
const readmeTemplatePath = path.join(__dirname, 'README-template.md')
const readmeDestPath = path.join(targetDir, 'README.md')
if (fs.existsSync(readmeTemplatePath)) {
  let readmeContent = fs.readFileSync(readmeTemplatePath, 'utf8')
  // Replace __APP_NAME__ placeholder with actual app name
  readmeContent = readmeContent.replace(/__APP_NAME__/g, appName)
  fs.writeFileSync(readmeDestPath, readmeContent)
}

console.log(`✅ ${appName} created successfully!`)
console.log(`\nNext steps:`)
console.log(`  cd ${appName}`)
console.log(`  npm install`)
console.log(`  npm run dev`)
console.log(`\nYour server will start on http://localhost:4001`)
