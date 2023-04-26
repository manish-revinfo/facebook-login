import React from "react";


export function initFacebookSdk() {
  const [isInitialized, setIsInitialized] = React.useState(false);

  return new Promise(resolve => {
      // wait for facebook sdk to initialize before starting the react app
      window.fbAsyncInit = function () {
        window.FB.init({
        appId: "6049899188464975",
        cookie: true,
        xfbml: true,
        version: "v16.0",
      });
      
        // auto authenticate with the api if already logged in with facebook
        window.FB.getLoginStatus(({ authResponse }) => {
            if (authResponse) {
                accountService.apiAuthenticate(authResponse.accessToken).then(resolve);
            } else {
                resolve();
            }
        });
    };
      // load facebook sdk script
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
  });
}

// const injectFbSDKScript = () => {
//   (function (d, s, id) {
//     var js,
//       fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) {
//       return;
//     }
//     js = d.createElement(s);
//     js.id = id;
//     js.src = "https://connect.facebook.net/en_US/sdk.js";
//     fjs.parentNode.insertBefore(js, fjs);
//   })(document, "script", "facebook-jssdk");
// };

// export const useInitFbSDK = () => {
//   const [isInitialized, setIsInitialized] = React.useState(false);
//   window.fbAsyncInit = function () {
//     window.FB.init({
//       appId: "6049899188464975",
//       cookie: true,
//       xfbml: true,
//       version: "v16.0",
//     });

//     window.FB.AppEvents.logPageView();
//     setIsInitialized(true);
//   };

//   injectFbSDKScript();

//   return isInitialized;
// };
