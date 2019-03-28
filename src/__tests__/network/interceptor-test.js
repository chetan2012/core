import { setupInterceptor } from "../../network/interceptor";
import ActivityActionInst from "../../activityTracker/activityAction";
import ErrorActionInst from "../../errorHandler/errorActions";
import * as utility from "../../utility";

jest.mock("../../activityTracker/activityAction");
beforeEach(() => {
  ActivityActionInst.requestInitiated = jest.fn();
  ActivityActionInst.requestFinished = jest.fn();
  utility.handle401 = (value) =>value ? true : false;
  ErrorActionInst.errorReceived  = jest.fn();
});
describe("Test Cases For Interceptor", () => {
    const http = {
        interceptors: {
            request: {
                use: function(a, b) {
                    a({method:"Post",baseURL:"http://kube8.westus.cloudapp.azure.com:31013" , url :"cloudapp" });
                    b({method:"Post",baseURL:"http://kube8.westus.cloudapp.azure.com:31013" , url :"cloudapp" });
                  }
            },
            response: {
                use: function(a, b) {
                  a({config:{method:"Post",baseURL:"http://kube8.westus.cloudapp.azure.com:31013" , url :"cloudapp"  , status:true}});
                  b({config:{method:"Post",baseURL:"http://kube8.westus.cloudapp.azure.com:31013" , url :"cloudapp"  , status:true} ,
                  response:{method:"Post",baseURL:"http://kube8.westus.cloudapp.azure.com:31013" , url :"cloudapp" , response:{ status:true } }});
                }
            }
        }
    }
    const http1 = {
        interceptors: {
            request: {
                use: function(a, b) {
                    a({method:"Post",baseURL:"" , url :"cloudapp" });
                    b({method:"Post",baseURL:"" , url :"cloudapp" });
                  }
            },
            response: {
                use: function(a, b) {
                  a({config:{method:"Post",baseURL:"http://kube8.westus.cloudapp.azure.com:31013" , url :"cloudapp"  , status:true}});
                  b({config:{method:"Post",baseURL:"http://kube8.westus.cloudapp.azure.com:31013" , url :"cloudapp"  , status:true} ,
                  response: null });
                }
            }
        }
    }
    it("should Interceptor all  Component", () => {
        setupInterceptor(http);
        setupInterceptor(http1);
    });
});
