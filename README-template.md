# __APP_NAME__

A TypeScript + Express.js API application built with the Controller → Service → Adapter pattern and Circuit Breaker implementation.

## 🏗️ Architecture

This project follows a clean, scalable architecture:

1. **Controller Layer**: Handles HTTP requests/responses and validation
2. **Service Layer**: Contains business logic and orchestrates data flow
3. **Adapter Layer**: Manages external API communication
4. **Circuit Breaker**: Provides fault tolerance for downstream services

## 🔄 Circuit Breaker

