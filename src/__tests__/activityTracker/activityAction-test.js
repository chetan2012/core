import activityAction from "../../activityTracker/activityAction";
import Store from "../../store/index";

beforeAll(() => {
  return activityAction.$http = { get: jest.fn() };
});

jest.mock("../../store/index", ()=> ({
  store: {
    dispatch: jest.fn()
  }
}));
describe("activityAction ()", () => {

  it("check activityAction requestInitiated called", () => {   
    const key ="any";
    const action = { type: "ACTIVITY_REQUEST_INITIATED", key:"any" };
    activityAction.requestInitiated(key);
    expect(Store.store.dispatch).toBeCalledWith(action);
  });

  it("check activityAction requestFinished called", () => {   
    const key ="any";
    const action = { type: "ACTIVITY_REQUEST_INITIATED", key:"any" };
    activityAction.requestFinished(key);
    expect(Store.store.dispatch).toBeCalledWith(action);
  });
});