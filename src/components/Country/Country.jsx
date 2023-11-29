import React from 'react';

const Country = (props) => {
    // console.log(props.country.name.nativeName)
    const {name, flags, population, region} = props.country;
    const handleAddCountry = props.handleAddCountry;
    const countryStyle = {border: '1px solid red', margin:'10px', padding: '10px'}
    return(
        <div style={countryStyle}>
            <h3>{name.common}</h3>
            <img style={{height:'50px'}} src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={ () => handleAddCountry(props.country)}>Add</button>
        </div>
    );
};

export default Country