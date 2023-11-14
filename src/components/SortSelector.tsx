import { Button, Menu, MenuButton, MenuItem,MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props{
  onSelecsortOreder:(sortOrder:string)=>void;
  sortorder:string;
}
const SortSelector = ({onSelecsortOreder,sortorder}:Props) => {
  const sortOrder=[
    {value: '',label :'Revance'},
    {value: '-added',label :'Data added'},
    {value: 'name',label :'Name'},
    {value: '-released',label :'Release Date'},
    {value: '-metacritic',label :'Popularity'},
    {value: '-rating',label :'Average reating'},
  ]
  const currentSort =sortOrder.find(order=>order.value===sortorder)
  return (
    <div>
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
              order by : {currentSort?.label || 'Ralavance'}
            </MenuButton>
            <MenuList>
           {sortOrder.map(sortOrder=><MenuItem onClick={()=>onSelecsortOreder(sortOrder.value)} key={sortOrder.value} value={sortOrder.value}>{sortOrder.label}</MenuItem>)}
               </MenuList>
           
        </Menu>
    </div>
);
}

export default SortSelector
