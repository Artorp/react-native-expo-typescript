# react-native-expo-typescript

This is an example configuration for React Native through Expo with Typescript and Jest (with React Test Renderer) configured. Expo now supports Babel 7 which has built-in typescript type stripping. Typescript is configured in tsconfig to not emit any transpiled files since Babel 7 can do it. `tsc` (or an IDE like WebStorm or Visual Studio Code) is still required for type checking.

In some rare cases custom types were needed, see `src/typings.d.ts` for type declarations.

## Usage

Expo CLI is required. You can install it globally by running `npm install --global expo-cli`. Consult the Expo documentation for more information.

Clone or download the repository, navigate to the extracted folder with a terminal and run

```
npm install
```

Start expo with

```
npm start
```

## Testing

Run all tests with jest by calling

```
npm test
```

## Notes on developing with TypeScript and Expo

### Starred imports

Default Typescript settings requires star imports from e.g. React:

```ts
import * as React from "react";
```

Enable esModuleInterop and allowSyntheticDefaultImports in tsconfig.json

```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  }
}
```

ES style imports should now work for modules without default exports:

```ts
import React from "react";
```

See explanation here: https://itnext.io/great-import-schism-typescript-confusion-around-imports-explained-d512fc6769c2

### Custom declarations

Most typing packages are declared correctly with DefinitelyTyped's @types packages. Sometimes there might be a missing, incomplete, or incorrect declaration. Use a custom declaration file (file that ends with `.d.ts`), see `src/typings.d.ts`.

### Images and media imports

Images can be imported with require(url: string).

```js
const image = require("../assets/image.png");
```

ES style imports will also work, but will confuse the type checker. Declare wildcard modules for your filetypes in a type declaration file. See `typings.d.ts` for an example.

```js
import image from "../assets/image.png";
```


## Thanks to

* [React Native using Expo and Typescript (github repo)](https://github.com/janaagaard75/expo-and-typescript)
* [Creating a Minimal Expo React Native Project with TypeScript and Jest](https://medium.com/@dai_shi/creating-a-minimal-expo-react-native-project-with-typescript-and-jest-5979ab8d7c15)
