import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Header(){
    return (
        <Box style={{backgroundColor: '#D43C31'}} className="text-center pb-4 text-3xl font-bold py-2 text-white">
        <NavLink className="text-center" to="/">Firebase App</NavLink> 
      </Box>
    )
}