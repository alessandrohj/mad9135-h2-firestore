import {Box, Button, TextField, MenuItem, Container} from '@mui/material'
import { addData } from '../../firebase/firebase.utils';
import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import {Modal, Typography} from '@mui/material';

export default function Add({updateList, setNavBottomValue}){

  const [category, setCategory] = useState('american');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const handleCategory = (ev) => {
        setCategory(ev.target.value);
      };

    
     async function save(ev){
        let title = document.getElementById('show-title');
        if(!title.value.trim() ) {
          ev.preventDefault(); 
          handleOpen();
            return
        } else {
            title.textContent = '';
        await addData(category, { title: title.value});
        setNavBottomValue([0])
          updateList();

        }

      }

      function cancel(ev){
        ev.preventDefault();
        setNavBottomValue(0);
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
//modal styles
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };


    return(
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      className='grid justify-center mb-9'
    >
        <h2 className='text-xl font-bold py-3'>Add a new TV Show</h2>
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
        <div className='flex justify-center gap-8'>
        <Button style={{width: '7rem', fontWeight: 'bold', marginTop: '1.5rem'}} color="success" variant="contained" onClick={save}><NavLink to='/'>Add</NavLink></Button>
        <Button style={{width: '7rem', fontWeight: 'bold', marginTop: '1.5rem'}} color="error" variant="contained" onClick={cancel}><NavLink to='/'>Cancel</NavLink></Button>
        </div>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="error"
        aria-describedby="error-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Error
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Please add a valid title.
          </Typography>
        </Box>
      </Modal>
    </Box>
    )
}