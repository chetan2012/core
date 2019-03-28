import LocationManager from "../LocationManager";

const resourcePath = [
  {
    file: "en-US.json",
    key: "en-US",
    lang: "en-US"
  },
  {
    file: "es.json",
    key: "es",
    lang: "es"
  }
];
const language = [{ key: "en-Us" }];

describe("LocationManager ()", () => {
  LocationManager.defaultMessage = true;

  it("call setupLocationManager and  check resourcePath should be defined", () => {
    LocationManager.setupLocationManager(language, resourcePath);
    const resourcePathValue = LocationManager.getResourcePath();
    expect(resourcePathValue).toBe(resourcePath);
  });

  it("call getAppLanguage and check language", () => {
    const languageVal = LocationManager.getAppLanguage();
    expect(languageVal).toBe(language);
  });

  it("call setupLocationManager with resourcePath(empty) called", () => {
    const resourcePath = [];
    try {
      LocationManager.setupLocationManager(language, resourcePath);
    } catch (e) {
      expect(e.message).toBe("language resource file must be non empty array");
    }
  });

  // it("check LocationManager loadLocaleDataFile called", () => {
  //   LocationManager.NetworkManagerMain = {
  //     get: jest.fn()
  //   };
  //   LocationManager.loadLocaleDataFile();
  //   expect(LocationManager.loadLocaleDataFile).toBeDefined();
  // });

  // it("check LocationManager loadLocaleDataFile with mockReturnValue(false) called", () => {
  //   LocationManager.loadLocaleDataFile();
  //   LocationManager.getResourcePath = jest.fn().mockReturnValue(false);
  //   LocationManager.loadLocaleDataFile();
  //   expect(LocationManager.loadLocaleDataFile).toBeDefined();
  // });

  // it("check LocationManager load LocaleDataFile called", () => {
  //   LocationManager.getResourcePath = jest.fn().mockReturnValue(language);
  //   LocationManager.loadLocaleDataFile();
  //   expect(LocationManager.loadLocaleDataFile).toBeDefined();
  // });

  it("check LocationManager formatMessage called", () => {
    const key = "en-US";
    const returnval = LocationManager.formatMessage(key);
    expect(returnval).toBeDefined();
  });

  it("check LocationManager formatMessageAsString called", () => {
    LocationManager.platformLocalIntl = {
      formatMessage: jest.fn()
    };
    LocationManager.formatMessageAsString("en-US");
    expect(LocationManager.platformLocalIntl.formatMessage).toBeCalled();
  });
});
