import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

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
