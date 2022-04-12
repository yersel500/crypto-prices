import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import Currency from '../components/Currency';
import { LoadData } from '../redux/CryptoReducer';

const Currencies = () => {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state);
  useEffect(() => {
    if (myState.length === 0) {
      dispatch(LoadData());
    }
  }, []);
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <input
        value={searchParams.get('filter') || ''}
        onChange={(e) => {
          const filter = e.target.value;
          if (filter) {
            setSearchParams({ filter });
          } else {
            setSearchParams({});
          }
        }}
      />
      {myState
        .filter((element) => {
          const filter = searchParams.get('filter');
          if (!filter) return true;
          const name = element.name.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        })
        .map((element) => (
          <Link to={`/${element.id}`} key={element.id}>
            <Currency
              name={element.id}
              symbol={element.symbol}
              price={element.priceUsd}
            />
          </Link>
        ))}
      <Outlet />
    </div>
  );
};

export default Currencies;
