import renderApp from "../renderApp";

const RootComponent = true;
const documentObject = "<div id='root'></div>";
const appConfig = { "redux": {}, "LocalizationSettings": { "language": "en-US", "resourcePathTypes": [{ "file": "en-US.json", "key": "en-US", "lang": "en-US" }],"messages":{"LOGIN.loginBtn": "Login"} } };

jest.mock("../../core/store", () => ({
    createStore: jest.fn().mockReturnValue("data")
}
));

describe("Test Cases For renderApp", () => {

    it("should renderApp all  Component", () => {
        const wrapper = renderApp(RootComponent, documentObject, appConfig);
        expect(wrapper).toBeDefined();
    });

    it("RenderApp Component values null", () => {
        const RootComponent = false;
        const documentObject = null;
        const appConfig = null;
        const wrapper = renderApp(RootComponent, documentObject, appConfig);
        expect(wrapper).toBeDefined();
    });

    it("RenderApp rootReducer not equal to function", () => {
        appConfig.redux.rootReducer = () => { };
        const wrapper = renderApp(RootComponent, documentObject, appConfig);
        expect(wrapper).toBeDefined();
    });
    it("RenderApp redux values null", () => {
        appConfig.redux = undefined;
        const wrapper = renderApp(RootComponent, documentObject, appConfig);
        expect(wrapper).toBeDefined();
    });

    it("RenderApp LocalizationSettings called", async () => {
        appConfig.LocalizationSettings = undefined;
        const wrapper = renderApp(RootComponent, documentObject, appConfig);
        expect(wrapper).toBeDefined();
    })

    it("RenderApp appConfig messages called", async () => {
        appConfig.messages;
        appConfig.localeMessages = "en-US";
        const wrapper = renderApp(RootComponent, documentObject, appConfig);
        expect(wrapper).toBeDefined();
    })

    it("RenderApp appConfig messages undefined", async () => {
        appConfig.messages= undefined;
        appConfig.localeMessages = undefined;
        const wrapper = renderApp(RootComponent, documentObject, appConfig);
        expect(wrapper).toBeDefined();
    })
});
