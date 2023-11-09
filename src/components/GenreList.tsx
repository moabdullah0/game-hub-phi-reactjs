
import {Genre} from '../hooks/useGenres'
import useData from '../hooks/useData'
 
const GenreList = () => {
    const {data}=useData<Genre>('/genres')
  return (
    <div>
      <ul>
        {data.map(gener=><li key={gener.id}>{gener.name}</li>)}
      </ul>
    </div>
  )
}

export default GenreList
