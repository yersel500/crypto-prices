import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LoadData } from '../redux/CryptoReducer';

const Currencies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LoadData());
  }, []);

  return (
    <div>
      Currencies
    </div>
  );
};

export default Currencies;
