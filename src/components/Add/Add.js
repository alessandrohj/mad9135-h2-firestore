import {Box, Button, TextField, MenuItem, Container} from '@mui/material'
import {useState} from 'react';

export default function Add(props){
    const [category, setCategory] = useState('american');

    const handleCategory = (ev) => {
        setCategory(ev.target.value);
      };

      const handleClick = () => {
        let title = document.getElementById('show-title');
        
        if(!title.value) {
            return
        } else {
            let data = {
                title: title.value,
                category: category
            }
            console.log(data)
        }

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
        <h2>Add Data</h2>
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
        {/* <TextField
          id="outlined-textarea"
          label="Quote"
          multiline
          rows={4}
        /> */}
        <Button style={{maxWidth:"15vw", marginTop:"2rem"}} variant="contained" onClick={handleClick}>Add</Button>
      </Container>
    </Box>
    )
}