import React from 'react';
import { Button} from '@mui/material';


export default function EditItem({ item, save, cancel, change, del}) {
  return (
    <div>
      <span>
      <input
        id={'title'}
        data-id={item.id}
        value={item.value}
        type="text"
        onChange={change}
      />
      </span>
      <div>
      <Button variant="contained" color='success' data-id={item.id} onClick={save} >Save</Button>
<Button variant="contained" color='error' data-id={item.id} onClick={del}>Delete</Button>
<Button variant="contained" data-id={item.id} onClick={cancel}>Cancel</Button>
      </div>
    </div>
  );
}