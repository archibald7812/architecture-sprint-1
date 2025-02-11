export const mfConfig = {
  name: "cards",
  filename: "remoteEntry.js",
  exposes: {
    "./Cards": "./src/components/Cards",
  },
  shared: ["react", "react-dom"],
};
