// import React from 'react';
import { useState } from 'react';
import './country.css'


const Country = ({country,handelVisitedCountry}) => {
    console.log(country);
    const {name,flags,population,area,cca3}=country;

    const [Visited,setVisited]= useState(false);

    const handleVisited =()=>{
        // setVisited(true);
        setVisited(!Visited)
    }
    

    return (
        <div className={`country ${Visited?'visited':''}`}>
            <p style={{color: Visited? 'red':''}}>Name: {name?.common} </p>
            <img src={flags.png} alt=""/>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            {/* <button onClick={handleVisited}>Visited</button> */}
            {/* {Visited && 'I have visited already'} */}
            <button onClick={()=>handelVisitedCountry(country)}>Mark Visited</button> <hr />
            <button onClick={handleVisited}>{Visited? 'Visited':'Going'}</button>
            {Visited ? 'i have visited already': 'i want to visit'}
             
        </div>
    );
};

export default Country;