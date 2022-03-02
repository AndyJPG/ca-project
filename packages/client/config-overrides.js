const rewireYarnWorkspaces = require("react-app-rewire-yarn-workspaces")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

const deps = require("./package.json").dependencies

module.exports = function override(config, env) {
  config.output.publicPath = "auto"

  if (!config.plugins) {
    config.plugins = []
  }

  config.plugins.unshift(
    new ModuleFederationPlugin({
      name: "client",
      remotes: {
        shareModules: "shareModules@http://localhost:3100/remoteEntry.js"
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

  return rewireYarnWorkspaces(config, env)
}
