# create-ts-downstream-boilerplate

A Node.js + TypeScript boilerplate generator for creating downstream API applications using the Controller → Service → Adapter pattern with Circuit Breaker implementation.

## Features

- 🏗️ **Clean Architecture**: Controller → Service → Adapter pattern
- 🔄 **Circuit Breaker**: Built-in fault tolerance for downstream API calls
- 🔒 **TypeScript**: Full TypeScript support with strict configuration
- 🚀 **Express.js**: Fast and minimal web framework
- 📦 **Ready to use**: Includes HTTP client and error handling
- 🎯 **Template replacement**: Automatically replaces `__APP_NAME__` placeholders

## Quick Start

Create a new project using npx (no installation required):

```bash
npx create-ts-downstream-boilerplate my-project-name
```

### Setup your new project

```bash
cd my-project-name
npm install
npm run dev
```
## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server

## Architecture Pattern

This boilerplate implements a clean, scalable architecture:

1. **Controller**: Handles HTTP requests/responses
2. **Service**: Contains business logic
3. **Adapter**: Manages external API communication
4. **Circuit Breaker**: Provides fault tolerance



## Author

**Madhuri Badgujar**
- Email: madhubadgujar25@gmail.com
- GitHub: [@madhubadgujar](https://github.com/madhubadgujar)
