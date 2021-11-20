import React from 'react';
import { Button, Container, Input} from '@mui/material';


export default function EditItem({ item, save, cancel, change, del}) {


  return (
    <div className='grid gap justify-center'>
      <div className='pb-2'>
      <input className="border-2 border-black bg-gray-100 p-1 ml-2 "
        id={'title'}
        data-id={item.id}
        data-cat={item.category}
        value={item.title}
        type="text"
        onChange={change}
      />
      </div>
      <div className='flex gap-4'>
      <Button variant="contained" color='success' data-id={item.id} onClick={save} >Save</Button>
<Button variant="contained" color='error' data-id={item.id} onClick={del}>Delete</Button>
<Button variant="contained" data-id={item.id} onClick={cancel}>Cancel</Button>
      </div>
    </div>
  );
}