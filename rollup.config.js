const path = require("path");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const json = require("@rollup/plugin-json");

const inputPath = path.resolve(__dirname, "./src/index.js");
const outputUmdPath = path.resolve(__dirname, "./dist/app.js");

module.exports = {
  input: inputPath,
  output: [
    {
      file: outputUmdPath,
      format: "cjs",
      name: "rollup-test",
    },
  ],
  plugins: [json(), resolve(), commonjs()],
};
