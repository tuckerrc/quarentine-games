/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions: { createPage }, graphql }) => {
    const results = await graphql(`
      {
        allGamesJson {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)

    results.data.allGamesJson.edges.forEach(edge => {
      const game = edge.node

      createPage({
          path: `/game/${game.slug}`,
          component: require.resolve("./src/templates/game-graphql.js"),
          context: {
            slug: game.slug,
          }
      })
    })
}
