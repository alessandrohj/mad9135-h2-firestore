import EditItem from "../EditItem/EditItem";
import { Card, CardContent, Button, Container } from "@mui/material";
import {deleteItem, updateItem} from '../../firebase/firebase.utils';
import { useState } from "react";

export default function Items({data, updateShows, refreshList, category}){
    let shows = data && data[`${category}`];


    const [itemId, setItemId] = useState('');
    const [originalItemTitle, setOriginalItemTitle] = useState('');
    const [updatedTitle, setUpdatedTitle] = useState('');

    function editItem(ev){
        ev.preventDefault();
        const id = ev.target.getAttribute('data-id');
        setItemId(id);
        const itemTitle = shows.find((obj) => obj.id === id)['title'];
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
        setUpdatedTitle(title);
        refreshList(category, obj)
      }

      function saveItem(ev) {
        ev.preventDefault();
        const id = ev.target.getAttribute('data-id');
        updateItem(category, id, updatedTitle);
        setItemId('');
        setOriginalItemTitle('');
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
    setUpdatedTitle('');
    setItemId('');
    setOriginalItemTitle('');
  }


  function deleteIt(ev) {

    ev.preventDefault();
    const id = ev.target.getAttribute('data-id');
    console.log(id);
    let newData = shows.filter((obj) => {
      return obj.id !== id;
    });
    deleteItem(id);
    let newShows = data;
    newShows[`${category}`] = newData;
    updateShows(newShows);
    setUpdatedTitle('');
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
                <Card key={item.id} data-id={item.id} data-cat={item.category} className={item.category} style={{backgroundColor: '#FFF5F7',maxWidth: 300, minWidth: 200, marginTop: '1rem'}}>
                <CardContent>
                  <h2 style={{color:'#661727', fontWeight: 'bold', fontSize:'1.4rem'}}>{item.title}</h2>
                </CardContent>
                <Button data-id={item.id} data-cat={item.category} onClick={editItem} style={{fontSize: '1.2rem', marginBottom: '.5rem', fontWeight: 'bold', color: 'black'}}>Edit</Button>
            </Card>
            )
      }}
    );
   return (
       <Container style={{marginBottom: '2rem'}}>
        {Items}
       </Container>
   );
}