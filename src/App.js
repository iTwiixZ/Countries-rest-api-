import SearchIcon from "@mui/icons-material/Search";
import "../src/styles/index.scss";
import Header from "./components/Header";
import Card from "./components/Card";
import CountryDetails from "./pages/CountryDetails";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [data, setData] = useState([]);
  const noFound = data.status || data.message;
  const navigate = useNavigate();
  const countriesInputRef = useRef();
  const regionRef = useRef();
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
    // if (data.status === 404) {
    //   setData([]);
    //   return;
  }, []);

  const searchCountries = () => {
    const searchValue = countriesInputRef.current.value;

    if (searchValue.trim()) {
      axios
        .get(`https://restcountries.com/v2/name/${searchValue}`)
        .then((res) => setData(res.data));
    }
  };
  const switchMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  const selectRegion = () => {
    const selectValue = regionRef.current.value;
    if (selectValue.trim()) {
      axios
        .get(`https://restcountries.com/v2/region/${selectValue}`)
        .then((res) => setData(res.data));
    }
    if (selectValue === "All") {
      axios
        .get("https://restcountries.com/v2/all")
        .then((res) => setData(res.data));
    }
  };

  const showDetails = (name) => {
    navigate(`/${name}`);
  };

  return (
    <div className={`app ${darkMode ? "darkMode" : ""}`}>
      <Header onClick={switchMode} darkMode={darkMode} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="app_body">
              <div className="inputs">
                <div className={`search-input ${darkMode ? "darkMode" : ""}`}>
                  <SearchIcon />
                  <input
                    type="text"
                    placeholder="Search for a country..."
                    ref={countriesInputRef}
                    onChange={searchCountries}
                  />
                </div>
                <div className={`select-regions ${darkMode ? "darkMode" : ""}`}>
                  <select ref={regionRef} onChange={selectRegion}>
                    <option>All</option>
                    <option>Africa</option>
                    <option>Americas</option>
                    <option>Asia</option>
                    <option>Europe</option>
                    <option>Oceania</option>
                  </select>
                </div>
              </div>
              <div className="countries">
                {!noFound ? (
                  data
                    .sort((a, b) => b.population - a.population)
                    .map((country,index) => (
                      <Card
                        key={index}
                        country={country}
                        darkMode={darkMode}
                        showDetails={showDetails}
                        code={country.alpha3Code}
                      />
                    ))
                ) : (
                  <p>No Found 😢</p>
                )}
              </div>
            </div>
          }
        />
        <Route
          path="/:countryCode"
          element={<CountryDetails darkMode={darkMode} data={data} />}
        />
      </Routes>
    </div>
  );
}

export default App;
