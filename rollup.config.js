export default {
  input: "index.js",
  external: ["sqlite3"], // <-- suppresses the warning
  output: {
    file: 'bundle.js',
    format: 'cjs'
  }
};
