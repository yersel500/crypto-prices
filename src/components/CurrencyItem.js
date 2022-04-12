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
      <header>
        <nav>
          <ul className="ul-bar-container">
            <li>
              <Link to="/">
                <FaAngleLeft
                  style={{ color: 'red', fontSize: '30px' }}
                />
              </Link>
            </li>
            <li>
              Details Page
            </li>
            <li className="last-bar-item">
              <div className="icon-container">
                <div>
                  <Link to="/">
                    <FaMicrophone />
                  </Link>
                </div>
                <div>
                  <Link to="/">
                    <FaRegSun />
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <img src={myLogo} alt={id} />
      <h2>
        Currency:
        {id}
      </h2>
      <p>
        Rank:
        {rank}
      </p>
      <p>
        symbol:
        {symbol}
      </p>
      <p>
        MarketCapUSD:
        {marketCapUsd}
      </p>
      <p>
        VolumeUSD24Hr:
        {volumeUsd24Hr}
      </p>
      <p>
        Current Price:
        {priceUsd}
      </p>
      <p>
        ChangePercent24Hr:
        {changePercent24Hr}
      </p>
    </div>
  );
};

export default CurrencyItem;
