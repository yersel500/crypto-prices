import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { FaAngleLeft, FaRegSun, FaMicrophone } from 'react-icons/fa';
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
      <nav>
        <ul className="ul-bar-container">
          <li>
            <Link to="/">
              {' '}
              <FaAngleLeft
                style={{ color: 'white', fontSize: '30px' }}
              />
            </Link>
          </li>
          <li>
            <input
              className="input-search"
              placeholder="Search by currency"
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
          </li>
          <li className="last-bar-item">
            <div className="icon-container">
              <div>
                <Link to="/">
                  <FaMicrophone
                    style={{ color: 'white', fontSize: '18px' }}
                  />
                </Link>
              </div>
              <div>
                <Link to="/">
                  <FaRegSun
                    style={{ color: 'white', fontSize: '18px' }}
                  />
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div className="currency-container">
        {myState
          .filter((element) => {
            const filter = searchParams.get('filter');
            if (!filter) return true;
            const name = element.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((element) => (
            <Link to={`/${element.id}`} key={element.id} className="card-currency">
              <Currency
                name={element.id}
                symbol={element.symbol}
                price={parseFloat(element.priceUsd).toFixed(2)}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Currencies;
