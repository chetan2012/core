import React from "react";
import { addLocaleData, FormattedMessage } from "react-intl";
import es from "react-intl/locale-data/es";
import en from "react-intl/locale-data/en";
import NetworkManagerMain from "./network/networkManager";

addLocaleData([...es, ...en]);

class LocationManager {
  constructor() {
    this.language = null;
    this.platformLocalIntl = null;
    this.getAppLanguage();
    this.defaultMessage = null;
  }

  setupLocationManager(language, resourcePath) {
    this.language = language;
    if (!Array.isArray(resourcePath) || resourcePath.length === 0) {
      throw new Error("language resource file must be non empty array");
    }
    this.resourcePath = resourcePath;
  }

  getResourcePath() {
    return this.resourcePath;
  }

  loadLocaleDataFile() {
    const resources = this.getResourcePath();
    if (resources) {
      let filePath = resources.find(data => data.key === this.language, this);
      if (!filePath) {
        filePath = resources[0] || {};
        this.language = resources[0] && resources[0].key;
      }

      if (typeof filePath.file === "string") {
        const acceptLangHeader = { "Accept-Language": filePath.lang };
        return NetworkManagerMain.get(filePath.file, "", acceptLangHeader).then(
          response => response.data,
          error => {
            return error;
          }
        );
      }
      return Promise.reject();
    }
    return Promise.reject();
  }

  getAppLanguage() {
    if (!this.language) {
      this.language = "en-US";
    }
    return this.language;
  }

  formatMessage(key) {
    return (
      <FormattedMessage
        id={key}
        defaultMessage={this.defaultMessage && this.defaultMessage[key]}
      />
    );
  }

  formatMessageAsString(key) {
    return this.platformLocalIntl.formatMessage({
      id: key,
      defaultMessage: this.defaultMessage && this.defaultMessage[key]
    });
  }
}

const LocationManagerObj = new LocationManager();
export default LocationManagerObj;
