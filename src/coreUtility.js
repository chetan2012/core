import NetworkManager from "./network";
import RenderApp from "./renderApp";
import connectToStore from "./connect";
import store from "./store";
import webSocket from "./socketIO/socket";
import LocationManagerObj from "./LocationManager";
import * as routeHandler from "./routing/routeHandler";
import SessionManagement from "./SessionManagement";

class coreUtility {
  constructor() {
    this.NetworkManager = NetworkManager;
    this.store= store;
    this.LocationManager=LocationManagerObj;
    this.RenderApp = RenderApp;
    this.connectToStore = connectToStore;
    this.webSocket = webSocket;
    this.SessionManagement = SessionManagement;
    this.RouteHandler = routeHandler;
  }
}
const coreUtil = new coreUtility();
console.log("working");
export default coreUtil;
