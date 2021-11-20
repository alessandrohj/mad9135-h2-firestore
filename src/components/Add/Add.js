import {Box, Button, TextField, MenuItem, Container} from '@mui/material'
import { addData } from '../../firebase/firebase.utils';
import {useState} from 'react';
import { NavLink } from 'react-router-dom';

export default function Add({updateList, data}){
  const [category, setCategory] = useState('american');

    const handleCategory = (ev) => {
        setCategory(ev.target.value);
      };

    
     async function save(ev){
        let title = document.getElementById('show-title');
        ev.preventDefault();   
        if(!title.value) {
            return
        } else {
            title.textContent = '';
        let id = await addData(category, { title: title.value});
          data.push({title: title.value, id: id});
           updateList();

        }

      }

      function cancel(ev){
        ev.preventDefault();
      }

    const categories = [
        {
            value: 'american',
            label: 'American'
        },
        {
            value: 'british',
            label: 'British'
        },
        {
            value: 'anime',
            label: 'Anime'
        }
    ]

    return(
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <h2>Add New TV Show</h2>
        <Container style={{display: "flex", flexDirection: "column"}}>
        <TextField
          id="outlined-select-category"
          select
          label="Select"
          value={category}
          onChange={handleCategory}
          helperText="Please select a category"
        >
          {categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
             </TextField>
        <TextField
          id="show-title"
          label="Title"
          placeholder="Title"
          required
        />
        <Button style={{maxWidth:"15vw", marginTop:"2rem"}} variant="contained" onClick={save}><NavLink to='/'>Add</NavLink></Button>
        <Button style={{maxWidth:"15vw", marginTop:"2rem"}} color="warning" variant="contained" onClick={cancel}><NavLink to='/'>Cancel</NavLink></Button>
      </Container>
    </Box>
    )
}