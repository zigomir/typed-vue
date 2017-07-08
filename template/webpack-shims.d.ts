declare module 'html-webpack-plugin' {
  import { Plugin } from 'webpack'

  class HtmlWebpackPlugin extends Plugin {
    constructor(options: {[key: string]: any})
  }

  module HtmlWebpackPlugin {} // https://github.com/Microsoft/TypeScript/issues/6656
  export = HtmlWebpackPlugin
}

declare module 'extract-text-webpack-plugin' {
  import { Plugin } from 'webpack'

  class ExtractTextPlugin extends Plugin {
    constructor(name: string)
  }

  module ExtractTextPlugin {}
  export = ExtractTextPlugin
}
