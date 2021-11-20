import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Header(){
    return (
        <Box style={{backgroundColor: '#35535E'}} className="text-center pb-4 text-3xl font-bold">
        <NavLink className="text-center" to="/">Firebase App</NavLink> 
        <NavLink className="text-right" to="/">Add</NavLink> 
      </Box>
    )
}