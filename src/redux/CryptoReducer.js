//  Actions
const FETCH_DATA = 'pages/Currencies/FETCH_DATA';
const URL = 'https://api.coincap.io/v2/assets';

// Action Creator
export const FetchData = (data) => ({
  type: FETCH_DATA,
  payload: data,
});

export const LoadData = () => async (dispatch) => {
  const response = await fetch(URL);
  const { data } = await response.json();
  dispatch(FetchData(data));
};

export const CryptoReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
};
