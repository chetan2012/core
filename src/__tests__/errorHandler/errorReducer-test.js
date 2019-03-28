import errorReducer from "../../errorHandler/errorReducer";

describe("errorReducer ()", () => {
  const params = [{ httpCode: null }, { type: "ERROR_RECEIVED", key: "any" }];
  const newState = { "0": { "httpCode": null }, "1": { "key": "any", "type": "ERROR_RECEIVED" }, "httpCode": "any" };
  it("check errorReducer called", () => {
    const wrapper = errorReducer(params, { type: "ERROR_RECEIVED", key: "any" });
    expect(wrapper).toEqual(newState);
  });

  it("check errorReducer with type null called", () => {    
    const params = [{ httpCode: null }, { type: "ERROR_RECEIVED", key: "any" }];
    const newState = [{"httpCode": null}, {"key": "any", "type": "ERROR_RECEIVED"}];
    const wrapper = errorReducer(params, { type: "null", key: "any" });
    expect(wrapper).toEqual(newState);
  });

  it("check errorReducer with type null called", () => {
    const wrapper = errorReducer(undefined, { type: "", key: "undefined" });
    expect(wrapper).toEqual({ httpCode: null });
  });
});