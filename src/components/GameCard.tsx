import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/umages-url";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card width={'300px'} borderRadius={10} overflow={'hidden'}>
      <Image src={getCroppedImageUrl(game.background_image) } />
      <CardBody borderRadius={10}>
        <Heading>{game.name}</Heading>
        <HStack justifyContent={'space-between'}>
        <PlatformIconList platform={game.parent_platforms.map(p=>p.platform)}/>
       <CriticScore score={game.metacritic} />
        </HStack>
     
      </CardBody>
    </Card>
  );
};

export default GameCard;
