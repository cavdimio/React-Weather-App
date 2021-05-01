export const CONFIG = {

    //TODO find screen sizes 
    SCREENSIZE : [
        {
            NAME: "Bigger screens", 
            WIDTH : {
                MAX: 10000,
                MIN: 1801
            }
        },
        {  
            NAME: "Desktops, large screens",
            WIDTH : {
                MAX: 1800,
                MIN: 1025
            } 
        },
        {  
            NAME: "Small screens, laptops",
            WIDTH : {
                MAX: 1024,
                MIN: 769
            }    
        }, 
        { 
            NAME: "iPads, Tablets",
            WIDTH : {
                MAX: 768,
                MIN: 481
            }     
        },
        {  
            NAME: "Mobile",
            WIDTH : {
                MAX: 480,
                MIN: 320
            }    
        }
    ],

    DAYS : [ //TODO to be deleted 
        {
            name: "Today",
            date: "Wed 24/04"
        },
        {
            name: "Monday",
            date: "Wed 25/04"
        },
        {
            name: "Tuesday",
            date: "Wed 26/04"
        },
        {
            name: "Wednesday",
            date: "Wed 27/04"
        },
        {
            name: "Thursday",
            date: "Wed 28/04"
        },
        {
            name: "Friday",
            date: "Wed 29/04"
        },
        {
            name: "Saturday",
            date: "Wed 30/04"
        },

    ],

    WEATHERSTATS : { //TODO to be deleted
        description: "Partly Cloudy",
        temperature: 29,
        feels_like: 27,
        pressure: 30.1,
        wind_deg: 272, 
        wind_gust: 2.67, 
        wind_speed: 3.09 
    }

} 

    