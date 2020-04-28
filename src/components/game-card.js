import React from "react"
import { Link } from "gatsby"

const GameCard = ({ game }) => {
  const urllist = game.urls
    .map((url, id) => <li key={id}><a href={url}>{url}</a></li>)

  return <div className="column is-one-third">
    <div className="card">
      <div className="card-header">
        <Link
          to={"game/" + game.slug}
          className="card-header-title"
        >
          {game.name}
        </Link>
      </div>
      <div className="card-content">
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
