export const mfConfig = (deps: any) => {
  return {
    name: "cards",
    filename: "remoteEntry.js",
    remotes: {
      host: "host@http://localhost:3000/remoteEntry.js",
    },
    exposes: {
      "./Cards": "./src/components/Cards",
    },
    shared: {
      react: { singleton: true, requiredVersion: deps.react },
      "react-dom": { singleton: true, requiredVersion: deps["react-dom"] },
      "react-router-dom": {
        singleton: true,
        requiredVersion: deps["react-router-dom"],
      },
      "shared-context_shared-library": {
        import: "shared-context_shared-library",
        requiredVersion: require("../shared-context/package.json").version,
      },
    },
  };
};
