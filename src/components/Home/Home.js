import { Container, Box} from "@mui/material";
// import {deleteItem, updateItem} from '../../firebase/firebase.utils';
// import { useState } from "react";
// import EditItem from "../EditItem/EditItem";
import Items from "../Items/Items";


export default function Home({data, refreshList, updateShows}){

  let americans = data && data['american'];
  let british = data && data['british'];
  let animes = data && data['anime'];

//     const [itemId, setItemId] = useState('');
//     const [originalItem, setOriginalItem] = useState('');

//     function editItem(ev){
//         ev.preventDefault();
//         console.log('clicked edit');
//         const id = ev.target.getAttribute('data-id');
//         setItemId(id);
//         const itemName = data.find((obj) => obj.id === id)['title'];
//         setOriginalItem(itemName);
//     }

//     function changeItem(ev) {
//         ev.preventDefault();
//         let obj = {
//           id: ev.target.getAttribute('data-id'),
//           title: ev.target.value,
//         };
//         console.log(obj);
//         refreshList(obj)
//       }

//       //TODO: update App and firebase
//       function saveItem(ev) {
//         ev.preventDefault();
//         const id = ev.target.getAttribute('data-id');
//         let obj = data.find((obj) => {
//           return obj.id === id;
//         });
//         updateItem('american', id, obj.title)
//         setItemId('');
//         setOriginalItem('');
//       }

//   function cancel(ev) {
//     ev.preventDefault();
//     const id = ev.target.getAttribute('data-id');
//     let obj = {
//       id: id,
//       title: originalItem,
//     };
//     console.log(obj);
//     setItemId('');
//     setOriginalItem('');
//   }


//   function deleteIt(ev) {

//     ev.preventDefault();
//     const id = ev.target.getAttribute('data-id');
//     let newData = data.filter((obj) => {
//       return obj.id !== id;
//     });
//     deleteItem(id);
//     updateShows(newData);
//     setItemId('');
//     setOriginalItem('');
// }

  // let americans = data['american'];
  // const Items = americans && americans.map((item) => {
  //     if (item.id === itemId) {
  //       return (
  //         <EditItem
  //           key={item.id}
  //           item={item}
  //           change={changeItem}
  //           save={saveItem}
  //           cancel={cancel}
  //           del={deleteIt}
  //         />
  //       );
  //     } else {
  //         return (
  //             <Card key={item.id} data-id={item.id} style={{maxWidth: 275, marginTop: '1rem'}}>
  //             <CardContent>
  //               <h2>{item.title}</h2>
  //             </CardContent>
  //             <Button data-id={item.id} onClick={editItem}>Edit</Button>
  //         </Card>
  //         )

  //   }}
  // );


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