
import { ACTIVITY_REQUEST_INITIATED, ACTIVITY_REQUEST_FINISHED } from "./activityActionConstants";

/**
 * Activity Reducer
 * @param {object} state current state
 * @param {object} action current action
 * @return {object} state - new state of the reducer.
 * @return {boolean} state.isInprogress - This flag is to identify whether any API is in progress or not?.
 * @return {Object[]} state.list - List of all API keys which are currently in progress.
 */
const ActivityReducer = (state = { isInprogress: false, list: [] }, { type, key }) => {
  switch (type) {
    case ACTIVITY_REQUEST_INITIATED: {
      const newState = Object.assign({}, state);

      newState.list.push(key);
      newState.isInprogress = !!newState.list.length;

      return newState;
    }
    case ACTIVITY_REQUEST_FINISHED: {
      const newState = Object.assign({}, state);
      const postition = newState.list.indexOf(key);

      if (postition >= 0) {
        newState.list.splice(postition, 1);
      }
      newState.isInprogress = !!newState.list.length;

      return newState;
    }
    default:
          return state;
  }
};

export default ActivityReducer;
