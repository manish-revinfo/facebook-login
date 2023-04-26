import React from "react";

const injectFbSDKScript = () => {
  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
};

export const useInitFbSDK = () => {
  const [isInitialized, setIsInitialized] = React.useState(false);
  if (typeof window !== "undefined") {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "6049899188464975",
        cookie: true,
        xfbml: true,
        version: "v16.0",
      });
  
      window.FB.AppEvents.logPageView();
      setIsInitialized(true);
    };

    injectFbSDKScript();
  
    return isInitialized;
  }
};
