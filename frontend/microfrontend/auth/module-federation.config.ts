export const mfConfig = (deps: any) => {
  return {
    name: "auth",
    filename: "remoteEntry.js",
    exposes: {
      "./Register": "./src/components/Register",
      "./Login": "./src/components/Login",
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
