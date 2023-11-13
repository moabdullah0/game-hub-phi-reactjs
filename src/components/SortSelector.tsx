import { Button, Menu, MenuButton, MenuItem,MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  return (
    <div>
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
              order by : Relevance
            </MenuButton>
            <MenuList>
            <MenuItem>DAte Added </MenuItem>
            <MenuItem>Name  </MenuItem>
            <MenuItem>Release Date </MenuItem>
            <MenuItem>Avarage Reading </MenuItem>
               </MenuList>
           
        </Menu>
    </div>
);
}

export default SortSelector
