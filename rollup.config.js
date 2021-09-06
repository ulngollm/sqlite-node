export default {
  input: "index.mjs",
  external: ["sqlite3"], // <-- suppresses the warning
  output: {
    file: 'bundle.js',
  }
};
