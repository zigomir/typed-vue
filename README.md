# Typed Vue

> Vue, Typescript and Webpack

## Features

- type checking inside `.vue` files with `lang="ts"` attribute (holy grail!)
- hot reload with `webpack`
- no babel

## Conventions / opinions

- no source maps in development for smaller loads
- no vendor splitting and adding hashes to file names at this point, can be easily added

## Usage with vue-cli

```sh
vue init zigomir/typed-vue new-project
```

## Thanks

All ripped off from [Microsoft/TypeScript-Vue-Starter](https://github.com/Microsoft/TypeScript-Vue-Starter)
