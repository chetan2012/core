import errorActions from "../../errorHandler/errorActions";
import Store from "../../store/index";

 jest.mock("../../store/index", () => ({
    store: {
        dispatch: jest.fn()
    }
}));
describe("errorActions ()", () => {
    const action = { type: "ERROR_RECEIVED", key: "any" };
    it("check errorActions called", () => {
        errorActions.errorReceived("any")
        expect(Store.store.dispatch).toBeCalledWith(action);
    });
});