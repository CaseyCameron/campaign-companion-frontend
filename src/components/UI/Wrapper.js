import React from 'react'

const Wrapper = props => {
  return <div class={`${props.class}`}>{props.children}</div>
} 

export default Wrapper
