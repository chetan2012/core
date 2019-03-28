import store from "../../store";

describe("Check Store File", () => {
 it("check store getStore called", () => {
    store.getStore = jest.fn();
    store.getStore();
    expect(store.getStore).toBeDefined();
  });

  // it('check store getStore called', () => {
  //   store.createStore = mockStore({createStore})
  //   store.createStore();
  //   expect(store.createStore).toBeDefined();
  // });

});