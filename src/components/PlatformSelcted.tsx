import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatforms'; // Updated the import to usePlatform
import { Platform } from '../hooks/useGames';

interface Props{
    selectedPlatform:(platform:Platform)=>void
    selectPlatform:Platform|null
}
const PlatformSelected = ({selectedPlatform,selectPlatform}:Props) => {
    const { data,error } = usePlatform(); // Updated to usePlatform
if(error) return null;
    return (
        <div>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                   {selectPlatform?.name || 'PlatForms'}
                </MenuButton>
                <MenuList>
                    {data.map(platform => (
                        <MenuItem onClick={()=>selectedPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </div>
    );
}

export default PlatformSelected; // Updated the component name to PlatformSelected
