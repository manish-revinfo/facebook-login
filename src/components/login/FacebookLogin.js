import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Nav from 'react-bootstrap/Nav';
import {useInitFbSDK} from "../../hooks/fb-hooks"
const PAGE_ID = "101640222920468";

function FacebookLogin() {
  // Initializes the Facebook SDK
  const isFbSDKInitialized = useInitFbSDK();

  // App state
  const [fbUserId, setFbUserId] = React.useState();
  const [fbUserAccessToken, setFbUserAccessToken] = React.useState();
  const [fbPageAccessToken, setFbPageAccessToken] = React.useState();
  const [userData, setUserData] = useState();


  const [pageList, setPageList] = useState();

  // Logs in a Facebook user
  const logInToFB = React.useCallback(() => {
    window.FB.login((response) => {
      console.log("Logged In Response", response.authResponse);
      setFbUserAccessToken(response.authResponse.accessToken);
      setFbUserId(response.authResponse.userID);
      fetchUserDetails(response.authResponse.accessToken);
    },{
      scope: 'pages_show_list,pages_manage_engagement,pages_manage_metadata', 
      return_scopes: true
    });
  }, []);


  // Logs out the current Facebook user
  const logOutOfFB = React.useCallback(() => {
    window.FB.logout(() => {
      setFbUserAccessToken(null);
      setFbPageAccessToken(null);
    });
  }, []);

  // Checks if the user is logged in to Facebook
  React.useEffect(() => {
    if (isFbSDKInitialized) {
      window.FB.getLoginStatus((response) => {
        setFbUserAccessToken(response.authResponse?.accessToken);
      });
    }
  }, [isFbSDKInitialized]);

  // Fetch Pages List
  useEffect(() => {
    if(fbUserAccessToken){
      fetchPagesId(fbUserId, fbUserAccessToken);
    }
  }, [fbUserAccessToken])

  // Fetch Page Access Token
  useEffect(() => {
    if(fbUserAccessToken){
      fetchPageAccessToken(PAGE_ID, fbUserAccessToken).then((response) => {
        setFbPageAccessToken(response);
      });
    }
  }, [fbUserAccessToken])


  // Fetch User Details
  async function fetchUserDetails(userToken){
    try {
        window.FB.api(`/me?fields=id,name,location&access_token=${userToken}`, (response) => {
          console.log("User Details", response);
        })
    } catch (error) {
      console.log("Error details", error);
    }
  }

  // Fetch Pages List
  async function fetchPagesId(userId, userToken){
    try {
      let apiRequest = new Promise((resolve, reject) => {
        window.FB.api(`${userId}/accounts?access_token=${userToken}`, (response) => {
          console.log("All Pages list", response);
          resolve(response);
        })
      })
      let apiResponse = await apiRequest;
      return apiResponse;
    }
    catch (error) {
      console.log("page list error", error);
    }
  }

  // Generate Page Access Token
  async function fetchPageAccessToken(pageId, userAccessToken){
    try {
        window.FB.api(`${pageId}?fields=access_token&access_token=${userAccessToken}`, (response) => {
          console.log("Single Page Access Token", response);
        })
    } catch (error) {
      console.log("Error", error);
    }
  }

  // Get Video Insights
  async function fetchIndVideoEarnings(videoId, pageAccessToken){
    try {
        window.FB.api(`${videoId}/insights/post_video_ad_break_ad_impressions?access_token=${pageAccessToken}`, (response) => {
          console.log("Video Insights", response);
        })
    } catch (error) {
      console.log("Error", error);
    }
  }

  // UI with custom styling from ./styles.css`
  return (
    <Nav>
            {fbUserAccessToken ? (
            <button onClick={logOutOfFB} className="primaryButton">
              Log out
            </button>
          ) : (
              <button onClick={logInToFB} className="primaryButton">
                Login with Facebook
              </button>
          )}
    </Nav>
  );
}

export default FacebookLogin;
