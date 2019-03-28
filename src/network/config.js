const environment = process.env.NODE_ENV ? process.env.NODE_ENV : "DEV";

const configuration = {
  baseURL: "http://kube8.westus.cloudapp.azure.com:31013",
  getURL: "/get",
  postURL: "/post",
  token: "",
  environment: environment
};

export default configuration;
