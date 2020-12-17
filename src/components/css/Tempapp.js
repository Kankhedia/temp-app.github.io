import React, { useEffect, useState } from 'react';
import '../css/style.css';

const Tempapp = () =>{
    const [city,setcity]=useState(null);
    const [search,setsearch]=useState("Mumbai")
    useEffect( () => {

       const fetchApi = async()=>{
           const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263`
           const response = await fetch(url);
           
           const resJson =await response.json();
           //console.log(resJson);
           setcity(resJson.main);
       };
       fetchApi();
       

    },[search])
    return(
        <>
        <div className="box">
            <div className="inputData">
                <input type="search" value={search}className="inputFeild" onChange ={(event)=>{setsearch(event.target.value)}} />

            </div>

            {!city ?(
                <p>No data found</p>
            ) :(
                <div><div className="info">
            <h2 className="location"></h2>
            <i className="fa fa-street-view" aria-hidden="true"></i>{search}
            <h1 className="temp">
                {city.temp}°C
           
            </h1>
            <h3 className="min-max"> Min:{city.temp_min}°C || Max:{city.temp_max}°C</h3>
       
        </div>
        <div className="wave-one"></div>
        <div className="wave-two"></div>
        <div className="wave-three"></div>
        </div>

    )}

        </div>
        
        </>
    )
}

export default Tempapp;