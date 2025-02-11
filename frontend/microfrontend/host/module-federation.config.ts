export const mfConfig = {
  name: "host",
  remotes: {
    cards: "cards@http://localhost:3003/remoteEntry.js",
    // auth: "auth@http://localhost:3001/remoteEntry.js",
    // profile: "profile@http://localhost:3002/remoteEntry.js",
  },
  exposes: {},
  shared: ["react", "react-dom"],
};
