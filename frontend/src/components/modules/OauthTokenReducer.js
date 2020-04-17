const LOGIN = "Token/login";
const LOGOUT = "Token/logout";

export const login = oAuthToken => ({ type: LOGIN, oAuthToken });
export const logout = () => ({ type: LOGOUT });

const initialState = {
  oAuthToken: null
};

function oAuthTokenReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        oAuthToken: action.oAuthToken
      };
    case LOGOUT:
      return {
        ...state,
        oAuthToken: null
      };
    default:
      return state;
  }
}

export default oAuthTokenReducer;
