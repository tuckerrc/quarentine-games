import React from "react"
import { Link } from "gatsby"

const GameCard = ({ game }) => (
  <div>
    <Link to={"game/" + game.slug}>
        {game.name}
    </Link>
  </div>
)

export default GameCard
