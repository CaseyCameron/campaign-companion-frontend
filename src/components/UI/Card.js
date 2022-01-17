import React from 'react'

const Card = props => {
  return <div class={`${props.class}`}>{props.children}</div>
}

export default Card
