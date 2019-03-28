import NetworkManager from "../../network/index";

describe("NetworkManager ()", () => {

  it("check NetworkManager get called", () => {
    NetworkManager.$http = { get: jest.fn() };
    NetworkManager.get();
    expect(NetworkManager.get).toBeDefined();
  });

  it("check get method with error", () => {
    NetworkManager.get = jest.fn().mockReturnValue(Promise.reject([]));
    const res = NetworkManager.get();
    expect(typeof res).toBe("object");
  });

  it("check NetworkManager post called", () => {
    NetworkManager.$http = { post: jest.fn() };
    NetworkManager.post();
    expect(NetworkManager.post).toBeDefined();
  });

  it("check post method with error", () => {
    NetworkManager.post = jest.fn().mockReturnValue(Promise.reject([]));
    const res = NetworkManager.post();
    expect(typeof res).toBe("object");
  });

  it("check NetworkManager delete called", () => {
    NetworkManager.$http = { delete: jest.fn() };
    NetworkManager.delete();
    expect(NetworkManager.delete).toBeDefined();
  });

  it("check delete method with error", () => {
    NetworkManager.delete = jest.fn().mockReturnValue(Promise.reject([]));
    const res = NetworkManager.delete();
    expect(typeof res).toBe("object");
  });

  it("check NetworkManager put called", () => {
    NetworkManager.$http = { put: jest.fn() };
    NetworkManager.put();
    expect(NetworkManager.put).toBeDefined();
  });

  it("check put method with error", () => {
    NetworkManager.put = jest.fn().mockReturnValue(Promise.reject([]));
    const res = NetworkManager.put();
    expect(typeof res).toBe("object");
  });

  it("check NetworkManager all called", () => {
    NetworkManager.$http = { all: jest.fn() };
    NetworkManager.all();
    expect(NetworkManager.all).toBeDefined();
  });

  it("check all method with error", () => {
    NetworkManager.all = jest.fn().mockReturnValue(Promise.reject([]));
    const res = NetworkManager.all();
    expect(typeof res).toBe("object");
  });
});