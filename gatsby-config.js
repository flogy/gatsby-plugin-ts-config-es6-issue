module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-ts-config`,
      options: {
        configDir: "src/gatsby",
        // hooks: {
        //   ignore: (filename) => {
        //     const shouldIgnore = filename.indexOf("node_modules") !== -1;
        //     console.log(filename, shouldIgnore);
        //     return shouldIgnore;
        //   },
        // },
      },
    },
  ],
}
