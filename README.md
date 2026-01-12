# create-ts-downstream-boilerplate

A Node.js + TypeScript boilerplate generator for creating downstream API applications using the Controller → Service → Adapter pattern with Circuit Breaker implementation.

## Features

- 🏗️ **Clean Architecture**: Controller → Service → Adapter pattern
- 🔄 **Circuit Breaker**: Built-in fault tolerance for downstream API calls
- 🔒 **TypeScript**: Full TypeScript support with strict configuration
- 🚀 **Express.js**: Fast and minimal web framework
- 📦 **Ready to use**: Includes HTTP client and error handling
- 🎯 **Template replacement**: Automatically replaces `__APP_NAME__` placeholders

## Installation & Usage

### Global Installation (Recommended)

```bash
npm install -g create-ts-downstream-boilerplate
```

### Create a new project

```bash
# Using global installation
create-ts-downstream-boilerplate my-awesome-api

# Or using npx (no installation required)
npx create-ts-downstream-boilerplate my-awesome-api
```

### Setup your new project

```bash
cd my-awesome-api
npm install
npm run dev
```

Your server will start on port 4001!

## Generated Project Structure

```
my-awesome-api/
├── src/
│   ├── app.ts                          # Express app configuration
│   ├── server.ts                       # Server entry point
│   └── Api/
│       └── Resources/
│           └── User/
│               ├── User.Controller.ts   # Request handling
│               ├── User.Router.ts       # Route definitions
│               ├── User.Service.ts      # Business logic
│               ├── Adapters/
│               │   └── ndml.adapter.ts  # External API adapter
│               └── Integration/
│                   ├── circuitBreaker.ts # Circuit breaker implementation
│                   └── httpClient.ts     # HTTP client wrapper
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server

## Environment Setup

The generated project includes a `.env` file template. Update it with your API endpoints:

```env
NDML_BASE_URL=https://your-api.example.com
```

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
