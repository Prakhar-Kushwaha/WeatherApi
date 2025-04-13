import React, { useState , useEffect } from 'react';

import CssBaseline from '@mui/material/CssBaseline';

import { ThemeProvider, createTheme, useColorScheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import Search from './search.jsx';
import WeatherCard from './card.jsx';


export default function BasicTextFields() {


      const [mode, setMode] = useState("dark");
      const theme = createTheme({
        palette: {
          mode: mode, // Dynamically set the mode (light or dark)
        },
      });

       // Update the `body` class whenever the theme changes
    // useEffect(() => {
    //   document.body.className = mode; // Set the class on the body element
    // }, [mode]);

    return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
      <div style = {{padding : '20px'}}>
        
        <FormControl>
          <FormLabel id="theme-toggle">Theme</FormLabel>
          <RadioGroup
            aria-labelledby="theme-toggle"
            name="theme-toggle"
            row
            value={mode}
            onChange={(event) => setMode(event.target.value)}
          >
            <FormControlLabel value="light" control={<Radio />} label="Light" />
            <FormControlLabel value="dark" control={<Radio />} label="Dark" />
          </RadioGroup>
        </FormControl>
      </div>

      <div>
        <WeatherCard />
        {/* Main Weather Card */}
      </div>
      </ThemeProvider>
    );
}





