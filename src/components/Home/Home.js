import {Box} from "@mui/material";
import Items from "../Items/Items";

export default function Home({data, refreshList, updateShows}){

  let subStyle = 'text-xl font-bold py-3'
    return (
        <div className="grid sm:flex justify-center ml-2">
            <Box>
              <h2 className={subStyle}>Americans</h2>
           <Items data={data} category={'american'} refreshList={refreshList} updateShows={updateShows}/>
           </Box>
           <Box>
              <h2 className={subStyle}>British</h2>
           <Items data={data} category={'british'} refreshList={refreshList} updateShows={updateShows}/>
           </Box>
           <Box>
              <h2 className={subStyle}>Anime</h2>
           <Items data={data} category={'anime'} refreshList={refreshList} updateShows={updateShows}/>
           </Box>
        </div>

    )
}