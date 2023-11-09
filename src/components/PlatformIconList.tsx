import React from "react";
import { platform } from "../hooks/useGames";
import { HStack, Icon, Text, Textarea } from "@chakra-ui/react";
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
  platform: platform[];
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
      <Icon as={iconMap[platform.slug]} color={"gray.500"}/>
      
      ))}
     
    </HStack>
  );
};

export default PlatformIconList;
