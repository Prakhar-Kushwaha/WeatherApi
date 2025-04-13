import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {useState} from 'react';
import Card from '@mui/material/Card';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import React from 'react';
import Search from './search.jsx';




export default function WeatherCard(){

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme }) => ({
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
        variants: [
          {
            props: ({ expand }) => !expand,
            style: {
              transform: 'rotate(0deg)',
            },
          },
          {
            props: ({ expand }) => !!expand,
            style: {
              transform: 'rotate(180deg)',
            },
          },
        ],
      }));

      const [expanded, setExpanded] = React.useState(false);
      const today = new Date().toLocaleDateString();

      const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    
    
    
     //Test api - "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=XXXXXXXXXXXXXXXXXXXXXXXXXXX"
    
      const WeatherApi = "https://api.openweathermap.org/data/2.5/weather"; // ?q={city name}&appid={apiKey}
      const ApiKey = import.meta.env.VITE_ApiKey;
    
      let [city , setCity] = useState("Wonderland");
    
    
      let [weather , setWeather] = useState({
        city : "----",
        temp : 0,
        temp_min : 0,
        temp_max : 0,
        description : "",
        humidity : 0,
        feelslike : 0,
      });
    
       let response = async(cityName) => {
        const apiUrl = `${WeatherApi}?q=${cityName}&appid=${ApiKey}`;
        try{
                console.log("API URL: " + apiUrl);
                let res = await fetch(apiUrl);
                let data = await res.json();
                if(!res.ok){
                    throw new Error("City not found");
                }
                console.log(data);
                setWeather({
                    city : data.name,
                    temp : (data.main.temp - 273.15 ).toFixed(2),
                    temp_min : (data.main.temp_min - 273.15 ).toFixed(2),
                    temp_max : (data.main.temp_max   - 273.15) .toFixed(2),
                    description : data.weather[0].description,
                    humidity : data.main.humidity,
                    feelslike : (data.main.feels_like - 273.15) .toFixed(2),
                });
                //Format state of Info gained // Change 'weather' object state
        }catch (err){
                console.error( "Weather API Error", err);
                setWeather({
                    city : "----",
                    temp : 0,
                    temp_min : 0,
                    temp_max : 0,
                    description : "",
                    humidity : 0,
                    feelslike : 0,
                })
       }
    };

       const handleSubmit = (cityName) => {
            setCity(cityName);
            console.log("City Name: " + cityName);
            response(cityName);
        }; 
       
      
return (
    <Card sx={{ width: { xs: '90%', sm: 340 },maxWidth: 450, margin : 'auto', marginTop : '20px'}}>
            <CardHeader 
                    avatar = {
                            <Avatar sx= {{bgcolor : red[500]}}
                                    aria-label = "weather">
                                    {weather.icon ? <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                                     alt="icon" /> : null}
                            </Avatar>
                    }
                    action = {
                            <IconButton aria-label = "settings">
                                    <MoreVertIcon/>
                            </IconButton>
                    }
                    title = "Weather Information"
                    subheader = {today}
            />

            <CardMedia
                    component = "img"
                    height = "194"
                    image = 
                    {weather.humidity >= 80?
                        Images.Rainy :
                        weather.temp >= 30 ?
                        Images.Hot :
                        Images.Cold
                    }
                    alt = "Weather Image"
            />
            <CardContent>
                    <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                        City      : {weather.city}
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                     <span>
                        Temperature : {weather.temp}&deg;C
                        &nbsp;
                        {weather.humidity >=80 ? WeatherIcons.Rain :
                        weather.temp >=30?
                        WeatherIcons.Hot :
                        WeatherIcons.Cold}
                        &nbsp;
                     </span> 
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                        Feels Like : {weather.feelslike}&deg;C
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                        Humidity : {weather.humidity}%
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                        Min Temp : {weather.temp_min}&deg;C
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                        Max Temp : {weather.temp_max}&deg;C
                    </Typography>
                    
                    
            </CardContent>

            <Search onSubmit={handleSubmit} />

            <CardActions disableSpacing>
                 <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                 <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography sx={{ marginBottom: 2 }}>Enjoy:</Typography>
                    <Typography sx={{ marginBottom: 2 }}>
                        .....................................................
                    </Typography>
                    <Typography sx={{ marginBottom: 2 }}>
                        Description     : {weather.description}
                        <br></br>
                        EveryDay is great . Just go and enjoy .☺
                    </Typography>
                    </CardContent>
            </Collapse>
    </Card>
    
  );
}



const Images = {
    Hot : "https://images.unsplash.com/photo-1593558628703-535b2556320b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Cold : "https://images.unsplash.com/photo-1457269449834-928af64c684d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyfGVufDB8fDB8fHww" ,
    Rainy : "https://images.unsplash.com/photo-1583054994298-cc68ddaca862?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
}

const WeatherIcons = {
    Cold : <AcUnitIcon/>,
    Hot : <SunnyIcon/>,
    Rain : <WaterDropIcon/>,
}
