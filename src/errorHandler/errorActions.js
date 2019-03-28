import { ERROR_RECEIVED } from "./errorActionConstants";
import Store from "../store/index";

class ErrorAction {
  errorReceived(key) {
    const action = { type: ERROR_RECEIVED, key };
    Store.store.dispatch(action);
  }
}

const ErrorActionInst = new ErrorAction();
export default ErrorActionInst;
