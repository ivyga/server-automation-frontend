# UI Stater Kit: React + TypeScript + Bootstrap + Vite

This "starter kit" will serve as a base for all React projects for the GIC automation team.

NOTE: If you want to try and build from scratch, see STEPS.md.

## Goals

1. Handle all of the "boiler plate" stuff needed for a new UI.
2. Contribute to the uniformity of all non-ATO GIC sites (good for ATO sites too).
3. Provide common components to simplify React training and development.

## Installation

### Prequisites

1. nodeJs
2. nvm

### Steps

1. clone this repo.
2. From a command line in the root directory of the repo:
    ```
    npm install
    ```
3. Start development server:

    ```
    npm run dev
    ```

4. Browse http://localhost:3000

### Advantages of using this starter kit

1. Global error handling
2. Responsive nav bar
3. Example code

### Key Points To Help Understand the Project Structure

1. Application essentially starts in App.tsx
2. The "pages" are controlled by the "route table" in this file.
