import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
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
  return (
    <div>
      {myState.map((element) => (
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
