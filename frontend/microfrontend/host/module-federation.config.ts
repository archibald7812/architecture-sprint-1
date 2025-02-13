export const mfConfig = (deps: any) => {
  return {
    name: "host",
    filename: "remoteEntry.js",
    remotes: {
      // host: "host@http://localhost:3000/remoteEntry.js",
      // auth: "auth@http://localhost:3001/remoteEntry.js",
      profile: "profile@http://localhost:3002/remoteEntry.js",
      cards: "cards@http://localhost:3003/remoteEntry.js",
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
