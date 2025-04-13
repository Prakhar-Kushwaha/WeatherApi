import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import {useState} from 'react';



export default function Search({onSubmit}){
    const [inputCity , SetInputCity] = useState("");

    function submitHandler(event) {
        event.preventDefault();
        console.log("City Name : " + inputCity);
        onSubmit(inputCity);
        SetInputCity("");

    }
    return (
        <form onSubmit = {submitHandler}>
          <TextField id="city" 
          label="City Name"
           variant="outlined" 
           required 
           value={inputCity}
           onChange = {(e) => SetInputCity(e.target.value)}/>
          <IconButton aria-label="delete"  color="secondary" type="submit" >
              <SearchIcon />
          </IconButton>
        </form>

    );
}