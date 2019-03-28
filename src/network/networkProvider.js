import axios from "axios";
import configuration from "./config";

const networkProvider = axios.create({
	baseURL: configuration.baseURL,
	timeout:100000
});

networkProvider.all = axios.all;

export default networkProvider;