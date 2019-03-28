import ActivityReducer from "../../activityTracker/activityReducer";

const state_ACTIVITY_REQUEST_INITIATED = {
    isInprogress: false, list: []
};
const type_ACTIVITY_REQUEST_INITIATED = {
    type: "ACTIVITY_REQUEST_INITIATED",
    key: "key"
};
const state_ACTIVITY_REQUEST_FINISHED = {
    isInprogress: false, list: ["abc", "key"]
};
const type_ACTIVITY_REQUEST_FINISHED = {
    type: "ACTIVITY_REQUEST_FINISHED",
    key: "key"
};
const state_ACTIVITY_REQUEST_Default = {
    isInprogress: false, list: []
};
const type_ACTIVITY_REQUEST_Default = {
    type: "ACTIVITY_REQUEST_FINISHED",
    key: "key"
};
describe("ActivityReducer", () => {

    it("Should return new state ACTIVITY_REQUEST_INITIATED with isInprogress = false and list value key", () => {
        expect(ActivityReducer(state_ACTIVITY_REQUEST_INITIATED, type_ACTIVITY_REQUEST_INITIATED)).toEqual({ isInprogress: true, list: ["key"] });
    });

    it("Should return new state ACTIVITY_REQUEST_FINISHED with isInprogress = false and non empty list", () => {
        expect(ActivityReducer(state_ACTIVITY_REQUEST_FINISHED, type_ACTIVITY_REQUEST_FINISHED)).toEqual({ isInprogress: true, list: ["abc"] });
    });

    it("Should return new state ACTIVITY_REQUEST_FINISHED with isInprogress = false and empty list", () => {
        expect(ActivityReducer(state_ACTIVITY_REQUEST_Default, type_ACTIVITY_REQUEST_Default)).toEqual({ isInprogress: false, list: [] });
    });

    it("Should return new state ACTIVITY_REQUEST_FINISHED with undefined state", () => {
        expect(ActivityReducer(undefined, {})).toEqual({ isInprogress: false, list: [] });
    });
});