import React from "react";

function Card({darkMode, country, showDetails, code}) {

const showDetailsHandler = () => {
  showDetails(code);
}

  return (
    <div className={`country ${darkMode ? 'darkMode' : ''}`} onClick={showDetailsHandler}>
      <div className="flag">
        <img src={country.flags.svg} alt="" />
      </div>

      <div className="details">
        <h3 className="name">{country.name.common}</h3>
        <p>
          Population: 
          <span className={`values ${darkMode ? 'darkMode' : ''}`}> {country.population.toLocaleString()}</span>
        </p>
        <p>
          Region: 
          <span className={`values ${darkMode ? 'darkMode' : ''}`}> {country.region}</span>
        </p>
        <p>
          Capital:
          <span className={`values ${darkMode ? 'darkMode' : ''}`}> {country.capital}</span>
        </p>
       
      </div>
    </div>
  );
}

export default Card;
