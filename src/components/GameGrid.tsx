import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { Text } from '@chakra-ui/react'

interface Game{
id:number
name:string

}
interface FetchGame{
    count:number
    results:Game[]
}
const GameGrid = () => {

    const [ games,setGame]=useState<Game[]>([])
    const [error,setError]=useState('')
    useEffect(()=>{
        apiClient.get<FetchGame>('/games').then(res=>{
            setGame(res.data.results)
        })
        .catch(err=>setError(err.message))
    })
  return (
    <>
    <Text>{error}</Text>
   <ul>
    { games.map(games=><li key={games.id}>{games.name}</li>)}
     
    
   </ul>
  
  </>

)
  }
export default GameGrid
