import styles from './CountryList.module.css'
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from '../hooks/context-hooks';

const CountryList = () => {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message="Add your first city by clicking on the map" />;

  const countries = cities.reduce((arr, city) => 
{  if (!arr.map(el => el.country).includes(city.country)) {
    return [...arr, {country: city.country, emoji: city.emoji}]
  } else {
    return arr
  }}
  , []);

  // console.log(countries);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => {
        return <CountryItem key={country.country}  country={country} />;
      })}
    </ul>
  );
};

export default CountryList;