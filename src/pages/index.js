import React from "react"

import Layout from "../components/layout"
import GameCard from "../components/game-card"

const IndexPage = ({
    data: {
        allGamesJson: { edges },
    },

}) => {
  const Games = edges
    .map(edge => <GameCard key={edge.node.id} game={edge.node} />)
  return <Layout>
    <div class="columns is-multiline is-mobile">{Games}</div>
  </Layout>
}

export default IndexPage

export const gameQuery = graphql`
  query {
    allGamesJson {
      edges {
        node {
          name
          slug
          game_category
          sub_category
          max_players
          min_players
          min_age
          urls
        }
      }
    }
  }
`
