//  Actions
const FETCH_DATA = 'pages/Currencies/FETCH_DATA';

// Action Creator
export const FetchData = (data) => ({
  type: FETCH_DATA,
  payload: data,
});

export const CryptoReducer = (state, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
};
