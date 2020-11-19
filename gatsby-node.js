const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allStrapiAlbums {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.allStrapiAlbums.nodes.forEach(album => {
    createPage({
      path: `/album/${album.slug}`,
      component: path.resolve(`src/templates/album-template.js`),
      context: {
        slug: album.slug,
      },
    })
  })
}
