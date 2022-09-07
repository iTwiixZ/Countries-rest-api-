const countriesInputRef = useRef();
const searchCountries = () => {
const searchValue = countriesInputRef.current.value;

    if (searchValue.trim()) {
      axios
        .get(`https://restcountries.com/v3.1/name/${searchValue}`)
        .then((res) => setData(res.data));
    }
  };
  <input
  type="text"
  placeholder="Search for a country..."
  ref={countriesInputRef}
  onChange={searchCountries}
/>