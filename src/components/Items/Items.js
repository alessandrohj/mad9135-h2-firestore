import EditItem from "../EditItem/EditItem";
import { Card, CardContent, Button, Container } from "@mui/material";
import {deleteItem, updateItem} from '../../firebase/firebase.utils';
import { useState } from "react";

export default function Items({data, updateShows, refreshList, category}){
    let shows = data && data[`${category}`];


    const [itemId, setItemId] = useState('');
    const [originalItemTitle, setOriginalItemTitle] = useState('');

    function editItem(ev){
        ev.preventDefault();
        console.log('clicked edit');
        const id = ev.target.getAttribute('data-id');
        setItemId(id);
        const itemTitle = shows.find((obj) => obj.id === id)['title'];
        console.log()
        setOriginalItemTitle(itemTitle);
    }

    function changeItem(ev) {
        ev.preventDefault();
        let id = ev.target.getAttribute('data-id');
        let title = ev.target.value;
        let obj = {
          id: id,
          category: category,
          title: title,
        };
        console.log(obj);
        refreshList(category, obj)
      }

      function saveItem(ev) {
        ev.preventDefault();
        // const id = ev.target.getAttribute('data-id');
        // let obj = data.find((obj) => {
        //   return obj.id === id;
        // });
        // updateItem('american', id, obj.title)
        // setItemId('');
        // setOriginalItemTitle('');
      }

  function cancel(ev) {
    ev.preventDefault();
    const id = ev.target.getAttribute('data-id');
    let obj = {
      id: id,
      category: category,
      title: originalItemTitle,
    };
    console.log(obj);
    setItemId('');
    setOriginalItemTitle('');
  }


  function deleteIt(ev) {

    ev.preventDefault();
    const id = ev.target.getAttribute('data-id');
    let newData = shows.filter((obj) => {
      return obj.id !== id;
    });
    console.log(newData);
    deleteItem(id);
    let newShows = data;
    newShows[`${category}`] = newData;
    updateShows(newShows);
    setItemId('');
    setOriginalItemTitle('');
}


        const Items = shows && shows.map((item) => {
        if (item.id === itemId) {
          return (
            <EditItem
              key={item.id}
              item={item}
              change={changeItem}
              save={saveItem}
              cancel={cancel}
              del={deleteIt}
            />
          );
        } else {
            return (
                <Card key={item.id} data-id={item.id} data-cat={item.category} className={item.category} style={{maxWidth: 275, marginTop: '1rem'}}>
                <CardContent>
                  <h2>{item.title}</h2>
                </CardContent>
                <Button data-id={item.id} data-cat={item.category} onClick={editItem}>Edit</Button>
            </Card>
            )
      }}
    );
   return (
       <Container>
        {Items}
       </Container>
   );
}