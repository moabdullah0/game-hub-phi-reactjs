import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Te } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image} />
      <CardBody borderRadius={10}>
        <Heading>{game.name}</Heading>
       <PlatformIconList platform={game.parent_platforms.map(p=>p.platform)}/>
      </CardBody>
    </Card>
  );
};

export default GameCard;
