import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { FaAngleLeft, FaRegSun, FaMicrophone } from 'react-icons/fa';

const CurrencyItem = () => {
  const params = useParams();
  const myState = useSelector((state) => state);
  const myCurrency = myState.find((currency) => currency.id === params.currencyId);
  const {
    id, rank, symbol, marketCapUsd, volumeUsd24Hr, priceUsd, changePercent24Hr,
  } = myCurrency;
  const newSymbol = symbol.toLowerCase();
  const myLogo = `https://assets.coincap.io/assets/icons/${newSymbol}@2x.png`;
  return (
    <div>
      <nav>
        <ul className="ul-bar-container">
          <li>
            <Link to="/">
              <FaAngleLeft
                style={{ color: 'white', fontSize: '30px' }}
              />
            </Link>
          </li>
          <li className="details-title">
            Details Page
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
      <img
        src={myLogo}
        alt={id}
        className="logo-details"
      />
      <h2 className="title-currency">
        Currency:
        {id}
      </h2>
      <div className="details-text-container">
        <div>
          <h3>Rank:</h3>
          <p>{rank}</p>
        </div>
        <div>
          <h3>Symbol:</h3>
          <p>{symbol}</p>
        </div>
        <div>
          <h3>MarketCapUSD:</h3>
          <p>{parseFloat(marketCapUsd).toFixed(2)}</p>
        </div>
        <div>
          <h3>VolumeUSD24Hr:</h3>
          <p>{parseFloat(volumeUsd24Hr).toFixed(2)}</p>
        </div>
        <div>
          <h3>Current Price:</h3>
          <p>{parseFloat(priceUsd).toFixed(2)}</p>
        </div>
        <div>
          <h3>ChangePercent24Hr:</h3>
          <p>
            {parseFloat(changePercent24Hr).toFixed(2)}
            %
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyItem;
