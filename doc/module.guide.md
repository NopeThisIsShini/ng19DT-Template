# Angular Module Structure Guidelines

## Overview
This document outlines the standardized module structure pattern used throughout the application. This structure promotes consistency, maintainability, and scalability across all feature modules.

## Standard Module Structure

```
📁[module-name]/
├── 📁component/
│   ├── 📁[component-name]/
│   │   ├── [component-name].component.html
│   │   ├── [component-name].component.scss
│   │   ├── [component-name].component.spec.ts
│   │   └── [component-name].component.ts
│   └── 📁[another-component]/
│       ├── [another-component].component.html
│       ├── [another-component].component.scss
│       ├── [another-component].component.spec.ts
│       └── [another-component].component.ts
├── 📁model/
│   ├── [entity].model.ts
│   └── [response].model.ts
├── 📁service/
│   └── [module-name].service.ts
├── [module-name]-routing.module.ts
├── [module-name].component.html
├── [module-name].component.scss
├── [module-name].component.spec.ts
├── [module-name].component.ts
└── [module-name].module.ts
```

## Directory Structure Guidelines

### 📁 Root Module Directory
- **Naming**: Use kebab-case (e.g., `auth`, `user-profile`, `product-catalog`)
- **Purpose**: Contains all module-related files and subdirectories
- **Location**: Typically under `src/app/modules/` or `src/app/features/`

### 📁 component/
- **Purpose**: Houses all feature-specific components
- **Structure**: Each component gets its own subdirectory
- **Naming Convention**: 
  - Directory: `kebab-case` (e.g., `login`, `user-profile`)
  - Files: `[component-name].component.[extension]`

**Component Directory Contents:**
- `*.component.ts` - Component logic and metadata
- `*.component.html` - Template markup
- `*.component.scss` - Component-specific styles
- `*.component.spec.ts` - Unit tests

### 📁 model/
- **Purpose**: Contains TypeScript interfaces and types
- **Naming**: `[entity-name].model.ts`
- **Best Practices**:
  - Use descriptive names (e.g., `login.model.ts`, `user-profile.model.ts`)
  - Export interfaces, types, and enums
  - Extend common models when applicable

**Common Model Types:**
- Request models (e.g., `LoginRequest`)
- Response models (e.g., `LoginResponse`)
- Entity models (e.g., `User`, `Product`)
- Enum definitions

### 📁 service/
- **Purpose**: Contains business logic and HTTP operations
- **Naming**: `[module-name].service.ts`
- **Responsibilities**:
  - API communication
  - Data transformation
  - State management (if not using NgRx)
  - Business logic

**Service Structure:**
```typescript
@Injectable({
  providedIn: 'root'
})
export class [ModuleName]Service {
  constructor(private http: HttpClient) {}
  
  // CRUD operations
  // Business logic methods
  // Helper methods
}
```

### Root Module Files

#### [module-name].module.ts
- **Purpose**: Module configuration and dependency management
- **Structure**:
  ```typescript
  @NgModule({
    declarations: [
      // Components specific to this module
    ],
    imports: [
      // Required modules
      CommonModule,
      [ModuleName]RoutingModule,
      // Third-party modules
      // Shared modules
    ],
    providers: [
      // Module-specific providers
    ],
    exports: [
      // Components/services to be used by other modules
    ]
  })
  ```

#### [module-name]-routing.module.ts
- **Purpose**: Defines module-specific routes
- **Pattern**: Lazy loading with child routes
- **Structure**:
  ```typescript
  const routes: Routes = [
    {
      path: '',
      component: [ModuleName]Component,
      children: [
        { path: '', redirectTo: 'default-route', pathMatch: 'full' },
        { path: 'route1', component: Component1 },
        { path: 'route2', component: Component2 }
      ]
    }
  ];
  ```

#### [module-name].component.*
- **Purpose**: Main container component for the module
- **Role**: 
  - Provides layout structure
  - Houses router outlet
  - Manages module-level state
  - Handles navigation

## Angular CLI Commands

### Module Generation
```bash
# Generate module with routing
ng g m module_name --route=route_name --routing --module=parent_module_name 

# Generate standalone module
ng g m feature-name --routing
```

### Component Generation
```bash
# Generate component with test files
ng g c component-name

# Generate component without test files
ng g c component-name --skip-tests=true

# Generate component in specific module
ng g c components/component-name --module=module-name
```

### Service Generation
```bash
# Generate service
ng g s service-name

# Generate service without test files
ng g s service-name --skip-tests=true

# Generate service in specific folder
ng g s services/service-name
```

## Naming Conventions

### Variables and Functions
- **Variables**: `camelCase` (e.g., `userName`, `isLoading`, `formData`)
- **Functions**: `camelCase` (e.g., `getUserData()`, `onSubmit()`, `validateForm()`)
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `API_BASE_URL`, `MAX_FILE_SIZE`)

### Files and Directories
- **Directories**: `kebab-case` (e.g., `user-profile`, `password-reset`)
- **Component Files**: `[component-name].component.[extension]`
- **Service Files**: `[service-name].service.ts`
- **Model Files**: `[entity].model.ts`

### Classes and Interfaces
- **Classes**: `PascalCase` (e.g., `UserProfileComponent`, `AuthService`)
- **Interfaces**: `PascalCase` (e.g., `LoginResponse`, `UserProfile`)
- **Enums**: `PascalCase` (e.g., `UserRole`, `ApiStatus`)

## Implementation Standards

### Component Guidelines
1. **Single Responsibility**: Each component should have one clear purpose
2. **Reactive Forms**: Use reactive forms for complex form handling
3. **camelCase Variables**: Use camelCase for all variables (e.g., `isLoading`, `formData`)
4. **camelCase Methods**: Use camelCase for all methods (e.g., `onSubmit()`, `validateForm()`)

### Service Guidelines
1. **Injectable**: Use `providedIn: 'root'` for singleton services
2. **Observable Pattern**: Return Observables for async operations
3. **camelCase Methods**: Use camelCase for all service methods (e.g., `getUserData()`, `updateProfile()`)
4. **Type Safety**: Use proper TypeScript types for all methods

### Model Guidelines
1. **Interface Definition**: Use interfaces for object shapes
2. **camelCase Properties**: Use camelCase for all properties (e.g., `firstName`, `isActive`)
3. **PascalCase Interfaces**: Use PascalCase for interface names (e.g., `UserProfile`, `LoginResponse`)

## Module Integration

### Lazy Loading
```typescript
// In app-routing.module.ts
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  }
];
```

## Best Practices

### Organization
1. **Consistent Structure**: Follow the same structure across all modules
2. **Clear Naming**: Use descriptive and consistent naming conventions
3. **camelCase**: Use camelCase for variables and functions throughout the app

### Code Standards
1. **camelCase Variables**: `userName`, `isLoading`, `formData`
2. **camelCase Methods**: `getUserData()`, `onSubmit()`, `validateForm()`
3. **PascalCase Classes**: `UserProfileComponent`, `AuthService`
4. **kebab-case Files**: `user-profile.component.ts`, `auth.service.ts`

## Common Patterns

### Feature Module Pattern
```typescript
@NgModule({
  declarations: [FeatureComponent, ChildComponents...],
  imports: [CommonModule, FeatureRoutingModule, SharedModules...],
  providers: [FeatureServices...]
})
export class FeatureModule {}
```

### Service Pattern
```typescript
@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  
  constructor(private http: HttpClient) {}
  
  getUserData(): Observable<UserData> {
    return this.http.get<UserData>(`api_route_name`);
  }
  
  updateUserProfile(userData: UserProfile): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`api_route_name`, userData);
  }
}
```

### Component Pattern
```typescript
@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  isLoading = false;
  formData: FormData;
  
  constructor(private featureService: FeatureService) {}
  
  ngOnInit(): void {
    this.loadUserData();
  }
  
  onSubmit(): void {
    // Handle form submission
  }
  
  private loadUserData(): void {
    this.isLoading = true;
    this.featureService.getUserData().subscribe({
      next: (data) => {
        this.formData = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading data:', error);
        this.isLoading = false;
      }
    });
  }
}
```

This structure ensures consistency, maintainability, and scalability across your entire Angular application while following Angular best practices and conventions.