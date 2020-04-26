import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
   gamesJson(slug: { eq: $slug }) {
      slug
      name
      game_category
      min_age
      max_players
      min_players
      urls
      date_added
      learning_curve
      popularity
    }
  }
`

const Game = ({ data }) => {
  const game = data.gamesJson

  const urllist = game.urls.map(function(url) {
    return <li><a href={url} target="_blank">{url}</a></li>;
  })

  return (
    <div>
      <h1>{game.name}</h1>
      <h2>{game.game_category}</h2>
      <p>{game.notes}</p>
      <ul>{urllist}</ul>
    </div>
  )
}

export default Game
