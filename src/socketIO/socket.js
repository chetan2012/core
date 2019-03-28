export const endpoint = "ws://kube8.westus.cloudapp.azure.com:31009/notifications";
class WebSocketWrappper {
	constructor() {
        this.socket = new WebSocket(endpoint);
        // this.socket.onopen = function (event) {
        // };
        // this.socket.onclose = function (event) {
        // };
	}

}

const webSocket = new WebSocketWrappper();
export default webSocket;