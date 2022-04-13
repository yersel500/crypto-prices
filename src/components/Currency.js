import PropTypes from 'prop-types';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

const Currency = ({ name, symbol, price }) => {
  const newSymbol = symbol.toLowerCase();
  const myLogo = `https://assets.coincap.io/assets/icons/${newSymbol}@2x.png`;
  return (
    <div>
      <div className="arrow-container">
        <FaRegArrowAltCircleRight title="arrow-detail" />
      </div>
      <img src={myLogo} alt={name} className="currency-logo" />
      <div className="general-info">
        <h2 className="currency-name">{name}</h2>
        <p className="symbol">{symbol}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Currency;
