import React from "react"
import { Link } from "gatsby"

const GameCard = ({ game }) => {
  const urllist = game.urls
    .map(url => <li><a href={url}>{url}</a></li>)

  return <div class="column is-one-third">
    <div class="card">
      <div class="card-header">
        <Link
          to={"game/" + game.slug}
          className="card-header-title"
        >
          {game.name}
        </Link>
      </div>
      <div class="card-content">
        <p>Slug: {game.slug}</p>
        <p>Game Category: {game.game_category}</p>
        <p>Sub Category: {game.sub_category}</p>
        <p>Max Players: {game.max_players}</p>
        <p>Min Players: {game.min_players}</p>
        <p>Min Age: {game.min_age}</p>
        <ul>
          {urllist}
        </ul>
      </div>
    </div>
  </div>
}

export default GameCard
