module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@components": "./src/components",
          "@env": "./types/env.d.ts",
          "@navigation": ["./src/navigation"],
          "@screens": "./src/screens",
          "@src": "./src",
        },
      },
    ],
    ["module:react-native-dotenv"],
  ],
};
