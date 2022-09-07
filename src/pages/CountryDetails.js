import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
function CountryDetails({ darkMode, data }) {
  const params = useParams();
  const navigate = useNavigate();

  let name;
  let flagImg;
  let nativeName;
  let population;
  let region;
  let subRegion;
  let capital;
  let topLevelDomain;
  let currencies = [];
  let languages = [];
  let borders = [];

  data.forEach((country) => {
    if (country.alpha3Code === params.countryCode) {
      name = country.name.common;
      flagImg = country.flags.svg;
      nativeName = country.nativeName;
      population = country.population;
      region = country.region;
      subRegion = country.subregion;
      capital = country.capital;
      topLevelDomain = country.topLevelDomain;

      country.currencies?.forEach((currency) => {
        currencies.push(currency.name);
      });
      country.languages?.forEach((language) => {
        languages.push(language.name);
      });
      country.borders?.forEach((border) => {
        borders.push(border);
      });
    }
  });

  const goBack = () => {
    navigate("/");
  };
  return (
    <div className="country-details">
      <button className={`back ${darkMode ? "darkMode" : ""}`} onClick={goBack}>
        <ArrowBackIcon />
        <p>Go back</p>
      </button>

      <div className="country-details-body">
        <div className="img-container">
          <img src={flagImg} alt="" />
        </div>
        <div className="info">
          <h2>{name}</h2>
          <div className="info-container">
            <div className="left-info">
              <p>
                Native Name:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {nativeName}
                </span>
              </p>
              <p>
                Population:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {population}
                </span>
              </p>
              <p>
                Region:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {region}
                </span>
              </p>
              <p>
                Sub Region:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {subRegion}
                </span>
              </p>
              <p>
                Capital:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {capital}
                </span>
              </p>
            </div>
            <div className="right-info">
              <p>
                Top level domain:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {topLevelDomain}
                </span>
              </p>
              <p>
                Currencies:
                {currencies.map((currency) => {
                  if (currencies.indexOf(currency) !== currencies.length - 1) {
                    return (
                      <span className={`values ${darkMode ? "darkMode" : ""}`}>
                        {" "}
                        {currency},
                      </span>
                    );
                  } else {
                    return (
                      <span className={`values ${darkMode ? "darkMode" : ""}`}>
                        {" "}
                        {currency}
                      </span>
                    );
                  }
                })}
              </p>
              <p>
                Languages:
                {languages.map((language) => {
                  if (languages.indexOf(language) !== languages.length - 1) {
                    return (
                      <span
                        key={language}
                        className={`values ${darkMode ? "darkMode" : ""}`}
                      >
                        {" "}
                        {language},
                      </span>
                    );
                  } else {
                    return (
                      <span
                        key={language}
                        className={`values ${darkMode ? "darkMode" : ""}`}
                      >
                        {" "}
                        {language}
                      </span>
                    );
                  }
                })}
              </p>
            </div>
          </div>
          
          <div className="border-container">
          Border Countries: 
          {borders.length ?(
            borders.map((border) => (
            
            <div className={`border-country ${darkMode ? "darkMode" : ""}`}>
            <p>{border}</p>
          </div>
         
            ))
          ) : (
            <div className={`values ${darkMode ? "darkMode" : ""}`}>
            <p>No borders... 😢 </p>
          </div>
          ) }
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
