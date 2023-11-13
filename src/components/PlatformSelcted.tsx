import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatforms'; // Updated the import to usePlatform

const PlatformSelected = () => {
    const { data,error } = usePlatform(); // Updated to usePlatform
if(error) return null;
    return (
        <div>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                    Platform
                </MenuButton>
                <MenuList>
                    {data.map(platform => (
                        <MenuItem key={platform.id}>{platform.name}</MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </div>
    );
}

export default PlatformSelected; // Updated the component name to PlatformSelected
