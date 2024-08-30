module.exports = {
  entry: "./src/index.js", // Вказуємо правильний шлях до index.js
  output: {
    filename: "main.js",
    path: __dirname + "/dist",
  },
  mode: "development", // або 'production'
};
