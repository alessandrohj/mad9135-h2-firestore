import { Container, Box} from "@mui/material";
import Items from "../Items/Items";


export default function Home({data, refreshList, updateShows}){

    return (
        <Container>
            <Box>
              <h2>Americans</h2>
           <Items data={data} category={'american'} refreshList={refreshList} updateShows={updateShows}/>
           </Box>
           <Box>
              <h2>British</h2>
           <Items data={data} category={'british'} refreshList={refreshList} updateShows={updateShows}/>
           </Box>
           <Box>
              <h2>Animes</h2>
           <Items data={data} category={'anime'} refreshList={refreshList} updateShows={updateShows}/>
           </Box>
        </Container>

    )
}