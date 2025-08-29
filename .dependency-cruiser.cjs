/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  options: {
    tsConfig: {
      fileName: "tsconfig.json"
    },
    doNotFollow: {
      path: ["node_modules"]
    },
    exclude: {
      path: [
        "node_modules",
        "dist",
        "build",
        "coverage",
        "\\.github",
        "\\.next",
        "out"
      ]
    }
  }
};
