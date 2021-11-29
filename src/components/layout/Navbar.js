import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div class={style}>
      <li class='m-2'>
        <Link to='/'>Campaigns</Link>
      </li>
      <li class='m-2'>
        <Link to='/npcs'>Npcs</Link>
      </li>
    </div>
    </>
  )
}

export default Navbar

const style = `
  flex
  list-none
`
