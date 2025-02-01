// NOTE: This array defines the Babel presets used in our project to transform modern JavaScript, React, and TypeScript code
// Babel itself does not perform type-checking for TypeScript. For full type safety, we still rely on the TypeScript compiler (tsc).
export const presets = [
    '@babel/preset-env', // Transpiles ES6+ JavaScript to a version compatible with older browsers based on the target environment.
    '@babel/preset-react', // Transforms JSX syntax into standard JavaScript for React applications.
    '@babel/preset-typescript', // Enables Babel to compile TypeScript code into JavaScript (without type-checking).
];
