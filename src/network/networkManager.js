
import networkProvider from "./networkProvider";
import { setupInterceptor } from "./interceptor";

class NetworkManagerMain {
	constructor() {
		this.$http = networkProvider;
		setupInterceptor(this.$http);
	}

	get(path, params = {}, reqHeaders = {}) {
		return this.$http.get(path, {params: params, headers: reqHeaders});
	}

	post(path, data, reqHeaders = {}) {
		return this.$http.post(path, data, {headers: reqHeaders});
	}

	delete(path, params) {
		return this.$http["delete"](path, params);
	}


	put(path, params, reqHeaders = {}) {
		return this.$http.put(path, params, {headers: reqHeaders});
	}

	all(path) {
		return this.$http.all(path);
	}
}
export default NetworkManagerMain;