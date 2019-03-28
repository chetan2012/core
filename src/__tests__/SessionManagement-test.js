import SessionManagementObj from "../SessionManagement";

Storage.prototype.setItem = jest.fn();
const key = "key";
const value = "value";

describe("SessionManagement ()", () => {
  it("check SessionManagement setupSessionManagement with resourcePath called", () => {
    SessionManagementObj.setToken(key, value);
    expect(Storage.prototype.setItem).toBeCalled();
  });
});
