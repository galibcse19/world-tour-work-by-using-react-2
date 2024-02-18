import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'

 

const Countries = () => {

    const [countries,setCountries] =useState([]);
    const [markVisited,setMarkVisited]=useState([]);
    // const [showFlag,setShowFlag]=useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));

    },[])

    const handelVisitedCountry=(country)=>{
        // console.log('Adding the visited country');
        const setNewData = [...markVisited,country]
        setMarkVisited(setNewData);

        // const setFlag=[...showFlag,country]
        // setShowFlag(setFlag);
         
    }

    return (
        <div>
            <h3>Countries data</h3>
            <p>Countries: {countries.length}</p>
            <div>
                <h4>Visited Countries: {markVisited.length}</h4>
                <ul>
                    {
                        markVisited.map(country => <li key={country.cca3}>{country.name.common}<img className="flag" src={country.flags.png} alt="" /></li>)
                    }
                    {/* {
                        showFlag.map(country => <li key={country.cca3}><img src={country.flags.png} alt="" /></li>)
                    } */}
                </ul>
            </div>
            <div className="countries">
            {
                countries.map(country=> <Country key={country.cca3} handelVisitedCountry={handelVisitedCountry} country={country}></Country>)
            }
        </div>
        </div>
    );
};

export default Countries;