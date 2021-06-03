module.exports = {
  siteMetadata: {
    title: "Dev::Log",
    description: "Blog about idk something"
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {

      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      } 
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
  ],
};
