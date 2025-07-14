# Angular Application Startup Guide

## Prerequisites
- Node.js and npm installed
- Angular CLI installed globally (`npm install -g @angular/cli`)

## Step-by-Step Setup Process

### 1. Install Dependencies
```bash
npm install
```
This command installs all the required dependencies listed in your `package.json` file.

### 2. Generate Environment Configuration
```bash
ng generate environments
```
This command creates the environment configuration files for your Angular application.

### 3. Environment File Structure
After running the generate command, you'll have the following structure:
```
└── 📁environments
    ├── environment.development.ts
    └── environment.ts
```

### 4. Configure Environment Files

#### environment.ts (Production)
```typescript
export const environment = {
    production: true,
    baseUrl: 'https://your-production-api.com/'
};
```

#### environment.development.ts (Development)
```typescript
export const environment = {
    production: false,
    baseUrl: 'http://localhost:3000/'
};
```

### 5. Start the Development Server

#### Default Port (4200)
```bash
ng serve
```
or
```bash
ng s
```

#### Custom Port
```bash
ng serve --port 4201
```
or
```bash
ng s --port 4201
```

## Common Port Options
- **Default**: `http://localhost:4200`
- **Custom**: `http://localhost:4201` (or any available port)

## Additional Serve Options
- `--open` or `-o`: Automatically opens the browser
- `--host`: Specify the host (default is localhost)
- `--ssl`: Serve using HTTPS

### Example with multiple options:
```bash
ng serve --port 4201 --open --host 0.0.0.0
```

## Environment Usage in Components
```typescript
import { environment } from '../environments/environment';

// Use the baseUrl in your services
const apiUrl = environment.baseUrl + 'api/users';
```

## Quick Start Checklist
- [ ] Run `npm install`
- [ ] Generate environments with `ng generate environments`
- [ ] Configure environment files with appropriate URLs
- [ ] Start development server with `ng serve`
- [ ] Access application at `http://localhost:4200` (or custom port)