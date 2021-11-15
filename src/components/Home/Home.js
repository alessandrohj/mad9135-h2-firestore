import { Card, CardContent, Container, Button } from "@mui/material";


export default function Home({data, updateData}){

    function handleClick(ev){
        ev.preventDefault();
        console.log(ev.target.getAttribute('data-id'))
    }


    return (
        <Container>
          { 
            data && data.map((item)=>(
                <Card key={item.id} data-id={item.id} style={{maxWidth: 275, marginTop: '1rem'}}>
                <CardContent>
                  <h2>{item.title}</h2>
                </CardContent>
                <Button data-id={item.id} onClick={handleClick}>Edit</Button>
            </Card>
            ))
            }
        </Container>

    )
}