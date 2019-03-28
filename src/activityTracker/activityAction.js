import { ACTIVITY_REQUEST_INITIATED, ACTIVITY_REQUEST_FINISHED } from "./activityActionConstants";
import Store from "../store/index"; 

/** Class representing Activity actions. */
class ActivityAction {
  /**
   * To set activity(an api/script chunk call) is in progress.
   * @param {string} key - The unique key to track that API status.
   */
  requestInitiated(key) {
    const action = { type: ACTIVITY_REQUEST_INITIATED, key };
    Store.store.dispatch(action);
  }
  /**
   * To set activity(an api/script chunk call) is finished.
   * @param {string} key - The unique key to track that API status.
   */
  requestFinished(key) {
    const action = { type: ACTIVITY_REQUEST_FINISHED, key };
    Store.store.dispatch(action);
  }
}

const ActivityActionInst = new ActivityAction();
export default ActivityActionInst;
