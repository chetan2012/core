import { ERROR_RECEIVED } from "./errorActionConstants";

const ErrorReducer = (state = { httpCode: null }, { type, key }) => {
  switch (type) {
    case ERROR_RECEIVED: {
      const newState = { ...state };
      newState.httpCode = key;
      return newState;
    }
    default:
      return state;
  }
};

export default ErrorReducer;
