const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');
const _ = require('lodash');

exports.createPages = ({actions, graphql}) => {
  const { createPage } = actions;
  const BlogPostTemplate = path.resolve('src/templates/BlogPostTemplate.js');
  const TagsTemplate = path.resolve('src/templates/TagsTemplate.js');

  return graphql(`
  {
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }

    tags: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
  }`).then(result => {
    if(result.errors) {
      throw result.errors;
    }
    const posts = result.data.posts.nodes;

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index+1];
      const next = index === 0 ? null : posts[index-1];
      createPage({
        path: post.fields.slug,
        component: BlogPostTemplate,
        context: {
          slug: post.fields.slug,
          previous,
          next,
        }
      });
    });

    const tags = result.data.tags.group;
    tags.forEach((tag) => {
      createPage({
        path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
        component: TagsTemplate,
        context: {
          tag: tag.fieldValue,
        },
      });
    });
  })
};

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions;
  if(node.internal.type === `Mdx`) {
    const value = createFilePath({node, getNode});
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
