# Setting Up a React + TypeScript Project with Vite, ESLint, Prettier, Jest, and Bootstrap

NOTE: Ideally, you can start with this repos content. But, if you are interested how this project, here a guide of the beginning steps:

This guide walks through the steps to set up a modern React project with TypeScript, Vite, ESLint, Prettier, Jest, Bootstrap, and other essential tools.

## Overview

Here are the core tools/frameworks:

### Vite

This build tool "transpiles" React's ".tsx" files and Sass ".scss" files, minifies the static output, prevents browser from using a stale version (cache busting), support developers with "Hot Reloads".

### React

This is our choice for a web component development framework.

### TypeScript

Provides type safety (vs traditional JavaScript).

### Bootstrap

Bootstrap provides a rich set of pre-designed UI components (buttons, forms, alerts, etc.), which speeds up development and provides responsive "12 column" grid system that adapts to various screen sizes.

## Step 1: Set up a Vite project with React / React Router and TypeScript

1. **Create a new Vite project**:
    - Use Vite to quickly scaffold a new project with React and TypeScript.
    ```bash
    npx create-vite@latest <project-name-goes-here> --template react-ts
    ```
1. **Navigate to the project directory and install the dependencies**:
    ```
    cd <project-name-goes-here>
    npm install
    npm install react-router-dom
    ```

## Step 2: Configure TypeScript

1. Update TypeScript to the required version if needed:

    ```
    npm install typescript@~5.6.2 --save-dev
    ```

1. Remove any tsconfig.json created by Vite.

1. Update tsconfig.app.json with the content below:

    ```
    {
        "compilerOptions": {
            "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
            "target": "ES2020",
            "useDefineForClassFields": true,
            "lib": ["ES2020", "DOM", "DOM.Iterable"],
            "module": "ESNext",
            "skipLibCheck": true,

            /* Bundle Mode */
            "moduleResolution": "bundler",
            "allowImportingTsExtensions": true,
            "isolatedModules": true,
            "moduleDetection": "force",
            "noEmit": true,
            "jsx": "react-jsx",

            /* Linting */
            "strict": true,
            "noUnusedLocals": true,
            "noUnusedParameters": true,
            "noFallthroughCasesInSwitch": true,
            "noUncheckedSideEffectImports": true
        },
        "include": ["src/**/*"]
    }
    ```

1. Add the contents below to a new file called tsconfig.test.json to guild ESLint for typescript linting:

    ```
    {
        "extends": "./tsconfig.app.json",
        "include": ["src/**/*", "test/**/*"],
        "exclude": ["node_modules"]
    }
    ```

1. Add the contents below to a new file called tsconfig.test.json to support the typescript tests:

    ```
    {
        "extends": "./tsconfig.app.json",
        "compilerOptions": {
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        },
        "include": ["**/*.spec.tsx"]
    }
    ```

## Step 3: Add ESLint and Prettier

1. **Install ESLint and Prettier dependencies**:

    ```
    npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb
    ```

2. **Configure ESLint**:

    - Create a file called eslint.config.js and use contents from below:

    ```
        import { fileURLToPath } from 'url';
        import path from 'path';
        import airbnbConfig from 'eslint-config-airbnb';
        import reactPlugin from 'eslint-plugin-react';
        import reactHooksPlugin from 'eslint-plugin-react-hooks';
        import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
        // @ts-ignore
        import importPlugin from 'eslint-plugin-import';
        import typescriptPlugin from '@typescript-eslint/eslint-plugin';
        import typescriptParser from '@typescript-eslint/parser';
        import reactRefreshPlugin from 'eslint-plugin-react-refresh';

        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        export default [
            {
                files: ['src/**/*.{ts,tsx}'],
                languageOptions: {
                    parser: typescriptParser,
                    parserOptions: {
                        ecmaVersion: 2020,
                        sourceType: 'module',
                        ecmaFeatures: {
                            jsx: true,
                        },
                        tsconfigRootDir: __dirname,
                        project: './tsconfig.eslint.json',
                    },
                    globals: {
                        window: true,
                        document: true,
                        console: true,
                        setTimeout: true,
                        clearTimeout: true,
                        setInterval: true,
                        clearInterval: true,
                        Promise: true,
                    },
                },
                settings: {
                    react: {
                        version: 'detect',
                    },
                    'import/resolver': {
                        node: {
                            extensions: ['.js', '.jsx', '.ts', '.tsx'],
                        },
                    },
                },
                plugins: {
                    react: reactPlugin,
                    'react-hooks': reactHooksPlugin,
                    'jsx-a11y': jsxA11yPlugin,
                    import: importPlugin,
                    '@typescript-eslint': typescriptPlugin,
                    'react-refresh': reactRefreshPlugin,
                },
                rules: {
                    ...airbnbConfig.rules,
                    'no-console': ['warn', { allow: ['warn', 'error'] }], // Warn on console.log but allow console.warn and console.error
                    'prettier/prettier': 'error',
                    indent: ['error', 4],
                    camelcase: ['error', { properties: 'always' }],
                    'no-plusplus': 'off',
                    'prefer-template': 'error', // Enforce template literals
                    'template-curly-spacing': ['error', 'never'], // Enforce no spaces inside ${}
                    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
                    'import/extensions': [
                        'error',
                        'ignorePackages',
                        {
                            js: 'never',
                            jsx: 'never',
                            ts: 'never',
                            tsx: 'never',
                        },
                    ],
                    'react/react-in-jsx-scope': 'off', // Not needed in React 17+
                    'react/prop-types': 'off', // Using TypeScript for prop validation
                    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
                    '@typescript-eslint/no-explicit-any': 'off',
                    '@typescript-eslint/explicit-module-boundary-types': 'off',

                    'import/order': [
                        'warn',
                        {
                            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                            'newlines-between': 'ignore',
                        },
                    ],
                    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
                    'react-refresh/only-export-components': 'off',
                },
            },
        ];
    ```

3. **Configure Prettier**:

    - Create a .prettierrc with this content:
        ```
        {
            "singleQuote": true,
            "semi": true,
            "trailingComma": "es5",
            "tabWidth": 4,
            "printWidth": 120
        }
        ```

4. **Add lint scripts to package.json**:
    ```
    "scripts": {
        ...
        "lint": "eslint 'src/**/\*.{ts,tsx}'",
        "lint:fix": "eslint 'src/**/\*.{ts,tsx}' --fix"
        }
    ```

## Step 5: Add Jest for Testing

1. **Install Jest, Testing Library, and other testing-related dependencies**:

    ```
    npm install --save-dev jest @types/jest babel-jest jest-environment-jsdom ts-jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/node @types/jest
    ```

2. **Set up Jest configuration**:

    - Add a fille called jest.config.js with this content:

        ```
        import type { Config } from "jest";

        const config: Config = {
        preset: "ts-jest",
        testEnvironment: "jsdom",
        transform: {
            "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.test.json" }],
        },
        setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
        };

        export default config;
        ```

    - Add a fille called jest.setup.js with this content:

        ```
        import "@testing-library/jest-dom";

        export default {
            testEnvironment: "jsdom",
            transform: {
            "^.+\\.tsx?$": "ts-jest",
            },
            setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
        };
        ```

3. Add the test script to package.json.
    ```
    "scripts": {
        ...
        "test": "jest"
    }
    ```

## Step 6: Install Bootstap and Sass for styling:

- Install packages:

    ```
    npm install bootstrap sass
    ```

- Rename App.css to App.scss

- Update import statement in App.tsx as follows:

    ```
    import './App.scss';
    ```

- Update vite.config.ts so that it does not complain about bootstrap as shown below. (Hopefully this is a temporary workaround.)

    ```
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
                // Temporary Workaround: https://stackoverflow.com/questions/67675422/deprecation-warning-in-bootstrap-scss
                silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import']
            }
        }
    },
    plugins: [react()],
    })
    ```

## Step 7: Browse the app:

1. **Replace App.tsx with this content**:

    ```
    import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

    import './App.scss';

    // Button Component
    export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
        label: string;
        className?: string;
    }

    export const Button: React.FC<ButtonProps> = ({ label, className = '', ...props }) => {
        return (
            <button className={`btn ${className}`} {...props}>
                {label}
            </button>
        );
    };

    export const PrimaryButton: React.FC<ButtonProps> = (props) => {
        return <Button {...props} className={`btn-primary ${props.className}`} />;
    };

    export const SecondaryButton: React.FC<ButtonProps> = (props) => {
        return <Button {...props} className={`btn-secondary ${props.className}`} />;
    };

    // "Pages"
    const Home = () => (
        <div>
            <h1>Home Page</h1>
            <PrimaryButton label="Primary" style={{ marginRight: '10px' }} />
            <SecondaryButton label="Secondary" />
        </div>
    );
    const About = () => (
        <div>
            <h1>About Page</h1>
        </div>
    );

    const App = () => {
        return (
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light horizontal-menu d-none d-lg-flex">
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item" key={0}>
                                <a className="nav-link" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item" key={1}>
                                <a className="nav-link" href="/about">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        );
    };

    export default App;
    ```

2. **Replace App.scss with this content**:

```
@import "bootstrap/scss/functions";
@import "bootstrap/scss/bootstrap.scss";
```

3. **Start the app**

```
npm run dev
```

4. **Browse the link show in the results of the previous command**

## TODO: Setup and Run First Test

## TODO: Run Linter
