

import { Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'


const GameGrid = () => {

   const {games,error }=useGames()
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
