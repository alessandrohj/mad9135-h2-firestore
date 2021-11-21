import {Box} from "@mui/material";
import Items from "../Items/Items";
import spinner from '../../images/Spinner-1s-200px.gif';

export default function Home({data, refreshList, updateShows}){

  let subStyle = 'text-xl font-bold text-center'
  let BoxClass = 'flex-1 text-center justify-center'
    return (
       
        <div className="flex flex-col sm:flex-row justify-center py-3">
           <Box className={`${BoxClass} ml-3`} >
              <h2 className={subStyle}>Americans</h2>
           <Items data={data} category={'american'} refreshList={refreshList} updateShows={updateShows}/>
           </Box>
           <Box className={BoxClass}>
               <h2 className={subStyle}>British</h2>
            <Items data={data} category={'british'} refreshList={refreshList} updateShows={updateShows}/>
           </Box>
           <Box className={BoxClass}>
              <h2 className={subStyle}>Anime</h2>
           <Items data={data} category={'anime'} refreshList={refreshList} updateShows={updateShows}/>
           </Box>
           {data <= 0 &&
     <div className='loading flex flex-col'>
       <img src={spinner} alt='loading'/>
            <h2 className="font-bold text-3xl">Please wait...</h2>
     </div>
      }
        </div>

    )
}