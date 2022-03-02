const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

const deps = require("./package.json").dependencies

module.exports = function override(config, env) {
  config.output.publicPath = "auto"

  if (!config.plugins) {
    config.plugins = []
  }

  config.plugins.unshift(
    new ModuleFederationPlugin({
      name: "shareModules",
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/Header"
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"]
        }
      }
    })
  )

  return config
}
