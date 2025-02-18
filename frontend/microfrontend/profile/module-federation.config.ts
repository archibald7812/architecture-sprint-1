export const mfConfig = (deps: any) => {
  return {
    name: "profile",
    filename: "remoteEntry.js",
    remotes: {
      host: "host@http://localhost:3000/remoteEntry.js",
    },
    exposes: {
      "./Profile": "./src/components/Profile",
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
