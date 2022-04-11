import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Currency from '../components/Currency';
import { LoadData } from '../redux/CryptoReducer';

const Currencies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LoadData());
  }, []);
  const myState = useSelector((state) => state);
  return (
    <div>
      {myState.map((element) => (
        <Currency
          name={element.id}
          key={element.id}
          symbol={element.symbol}
        />
      ))}
    </div>
  );
};

export default Currencies;
