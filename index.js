#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const appName = process.argv[2];
if (!appName) {
    console.log('Usage: create-ts-downstream-boilerplate <project-name>');
    process.exit(1);
}
const targetDir = path_1.default.join(process.cwd(), appName);
const templateDir = __dirname;
console.log(`Creating new TypeScript API project "${appName}"...`);
if (fs_1.default.existsSync(targetDir)) {
    console.log(`Directory ${appName} already exists!`);
    process.exit(1);
}
fs_1.default.mkdirSync(targetDir, { recursive: true });
const filesToCopy = ['Src', '.env', '.gitignore'];
const templateFiles = {
    'README-template.md': 'README.md',
    'tsconfig-template.json': 'tsconfig.json'
};
function copyRecursive(src, dest) {
    if (fs_1.default.statSync(src).isDirectory()) {
        fs_1.default.mkdirSync(dest, { recursive: true });
        for (const file of fs_1.default.readdirSync(src)) {
            const srcPath = path_1.default.join(src, file);
            const destPath = path_1.default.join(dest, file);
            copyRecursive(srcPath, destPath);
        }
    }
    else {
        let content = fs_1.default.readFileSync(src, 'utf8');
        content = content.replace(/__APP_NAME__/g, appName);
        fs_1.default.writeFileSync(dest, content);
    }
}
for (const file of filesToCopy) {
    const srcPath = path_1.default.join(templateDir, file);
    const destPath = path_1.default.join(targetDir, file);
    if (fs_1.default.existsSync(srcPath)) {
        copyRecursive(srcPath, destPath);
    }
    else {
        console.log(`: ${file} not found, skipping...`);
    }
}
for (const [templateFile, targetFile] of Object.entries(templateFiles)) {
    const srcPath = path_1.default.join(templateDir, templateFile);
    const destPath = path_1.default.join(targetDir, targetFile);
    if (fs_1.default.existsSync(srcPath)) {
        let content = fs_1.default.readFileSync(srcPath, 'utf8');
        content = content.replace(/__APP_NAME__/g, appName);
        fs_1.default.writeFileSync(destPath, content);
    }
    else {
        console.log(`: ${templateFile} not found, skipping...`);
    }
}
const packageTemplatePath = path_1.default.join(templateDir, 'package-template.json');
const packagePath = path_1.default.join(targetDir, 'package.json');
if (fs_1.default.existsSync(packageTemplatePath)) {
    let packageContent = fs_1.default.readFileSync(packageTemplatePath, 'utf8');
    packageContent = packageContent.replace(/__APP_NAME__/g, appName);
    fs_1.default.writeFileSync(packagePath, packageContent);
}
else {
    console.log(` Err: package-template.json not found at: ${packageTemplatePath}`);
    console.log('Available files in template directory:');
    if (fs_1.default.existsSync(templateDir)) {
        fs_1.default.readdirSync(templateDir).forEach(file => {
            console.log(` - ${file}`);
        });
    }
    console.log('This will cause npm install to fail!');
    process.exit(1);
}
console.log(`✅ Project "${appName}" created successfully!`);
console.log(`\nNext steps:`);
console.log(`  cd ${appName}`);
console.log(`  npm install`);
console.log(`  npm run dev`);
console.log(`\nHappy coding! 🚀`);
//# sourceMappingURL=index.js.map