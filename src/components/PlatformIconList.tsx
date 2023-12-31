import React from "react";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaLinux,
  FaApple,
  FaAndroid,
  FaXbox,
} from "react-icons/fa";
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { IconType } from "react-icons";
interface Props {
  platform: Platform[];
}
const PlatformIconList = ({ platform }: Props) => {
    const iconMap :{[key:string]:IconType}={
        pc:FaWindows,
       playstation: FaPlaystation,
       xbox:FaXbox,
       nintendo:SiNintendo,
       mac:FaApple,
   linux: FaLinux,
   Android:FaAndroid,
   ios:MdPhoneIphone,
   web:BsGlobe,

    }
  return (
    <HStack>
      {platform.map((platform) => (
      <Icon as={iconMap[platform.slug]} color={"gray.500"} key={platform.id}/>
      
      ))}
     
    </HStack>
  );
};

export default PlatformIconList;
