class SessionManagement {

    constructor() {
        this.key = null;
        this.token = null;
    }

    setCookie(key, token) {
        // if(key != "refreshToken") {

        // }
        const tokenInfo = token.split(".")[1];
        // console.log(tokenInfo);

        // const tokenInfo1 = token.split('.')[2];
        // console.log(tokenInfo1)
        const tokenInfoUpdated = tokenInfo.replace(/-/g, "+").replace(/_/g, "/");
        const tokenObject = JSON.parse(window.atob(tokenInfoUpdated));
        if(tokenObject.exp) {
            const expiryTime = tokenObject.exp;
            const cookieExpiryDateTime = new Date(expiryTime*1000);
            document.cookie = `${key}=${token}; expires=${cookieExpiryDateTime} path=/`;
        }
    }

    getCookie(name) {
        let cookie = {};
        document.cookie.split(";").forEach(function(el) {
          let [k,v] = el.split("=");
          cookie[k.trim()] = v;
        })
        return cookie[name];
      }

      removeCookie(key) {
        document.cookie = key +"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        return true;
    }

}

const SessionManagementObj = new SessionManagement();
export default SessionManagementObj;
