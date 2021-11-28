import React, { useEffect, useState } from 'react'
import Card from '../components/UI/Card'
import NpcCard from '../components/layout/npcs/NpcCard.js'
import { getNpcs } from '../services/routes/routes'

const Npcs = () => {
  const [npcs, setNpcs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await getNpcs()
      setNpcs(res)
    }
    fetchData()
  },[])

  return (
    <>
      <div class='m-2 flex'>
        {npcs.map(npc => {
            return <NpcCard {...npc} key={npc.id} />
        })}
      </div>
    </>
  )
}

export default Npcs
