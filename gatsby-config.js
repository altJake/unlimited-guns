// copied and added prefix from node_modules/mdx-deck/gatsby-config.js
module.exports = {
  pathPrefix: '/unlimited-guns',
  plugins: [
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        cli: true,
        contentPath: process.cwd(),
      },
    },
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['mdx-deck', '@mdx-deck/themes'],
      },
    },
  ],
}
