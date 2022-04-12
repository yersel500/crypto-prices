import PropTypes from 'prop-types';

const Currency = ({ name, symbol, price }) => {
  const newSymbol = symbol.toLowerCase();
  const myLogo = `https://assets.coincap.io/assets/icons/${newSymbol}@2x.png`;
  return (
    <div>
      <img src={myLogo} alt={name} />
      <h2>{name}</h2>
      <p>{symbol}</p>
      <p>{price}</p>
    </div>
  );
};

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Currency;
