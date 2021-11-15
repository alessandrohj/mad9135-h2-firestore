import { Card, CardContent, Container, Button } from "@mui/material";
import {deleteData} from '../../firebase/firebase.utils';
import { useState } from "react";
import EditItem from "../EditItem/EditItem";


export default function Home({data, updateData, updateShows}){
    const [itemId, setItemId] = useState('');
    const [originalItem, setOriginalItem] = useState('');

    function editItem(ev){
        ev.preventDefault();
        console.log('clicked edit');
        const id = ev.target.getAttribute('data-id');
        setItemId(id);
        const itemName = data.find((obj) => obj.id === id)['title'];
        setOriginalItem(itemName);
    }

    function changeItem(ev) {
        ev.preventDefault();
        let obj = {
          id: ev.target.getAttribute('data-id'),
          value: ev.target.value,
        };
        updateData(obj);
      }

      //TODO: update App and firebase
      function saveItem(ev) {
        ev.preventDefault();
        const id = ev.target.getAttribute('data-id');
        data.find((obj) => {
          return obj.id === id;
        });
        setItemId('');
        setOriginalItem('');
      }

  function cancel(ev) {
    ev.preventDefault();
    const id = ev.target.getAttribute('data-id');
    let obj = {
      id: id,
      value: originalItem,
    };
    console.log(obj);
    setItemId('');
    setOriginalItem('');
  }


  function deleteItem(ev) {

    ev.preventDefault();
    const id = ev.target.getAttribute('data-id');
    let newData = data.filter((obj) => {
      return obj.id !== id;
    });
    deleteData(id);
    updateShows(newData);
    setItemId('');
    setOriginalItem('');
}


  const Items = data && data.map((item) => {
    if (item.id === itemId) {
      return (
        <EditItem
          key={item.id}
          item={item}
          change={changeItem}
          save={saveItem}
          cancel={cancel}
          del={deleteItem}
        />
      );
    } else {
        // return <Item key={item.id} item={item} edit={editItem} />;
        return (
            <Card key={item.id} data-id={item.id} style={{maxWidth: 275, marginTop: '1rem'}}>
            <CardContent>
              <h2>{item.title}</h2>
            </CardContent>
            <Button data-id={item.id} onClick={editItem}>Edit</Button>
        </Card>
        )
    }
});


    return (
        <Container>
            {Items}
        </Container>

    )
}