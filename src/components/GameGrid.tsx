

import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GAmeCardSkeleton from './GAmeCardSkeleton'


const GameGrid = () => {
const Skeletons=[1,2,3,4,5,6]
   const {data,error,isLoading }=useGames()
  return (
    <>
      <Text>{error}</Text>
      <SimpleGrid columns={{sm : 1,md:2,lg:3,xl:4}} spacing={10} padding={"10px"}>
        {isLoading&& Skeletons.map((skleton)=><GAmeCardSkeleton key={skleton}/>)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>

)
  }
export default GameGrid
