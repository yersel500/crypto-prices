import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
        <Currency
          name={element.id}
          key={element.id}
          symbol={element.symbol}
          price={element.priceUsd}
        />
      ))}
    </div>
  );
};

export default Currencies;
