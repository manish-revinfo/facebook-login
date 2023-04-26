
import styles from "@/styles/Login.module.css";
import LoginForm from "./LoginForm";
import Link from "next/link";
// import FacebookLogin from "./FacebookLogin";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Nav from 'react-bootstrap/Nav';
import { useInitFbSDK } from "../../hooks/fb-hooks"
import { Button } from "react-bootstrap";
const PAGE_ID = "101640222920468";

const Auth = () => {

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
    }, {
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
      fetchPagesId(fbUserId, fbUserAccessToken).then((res) => {
        setPageList(res.data);
        console.log("page list data", pageList);
      });
    }
  }, [fbUserAccessToken])

  // Fetch Page Access Token
  useEffect(() => {
    if (fbUserAccessToken) {
      fetchPageAccessToken(PAGE_ID, fbUserAccessToken).then((response) => {
        setFbPageAccessToken(response);
      });
    }
  }, [fbUserAccessToken])

  // Fetch User Details
  async function fetchUserDetails(userToken) {
    try {
      window.FB.api(`/me?fields=id,name,location&access_token=${userToken}`, (response) => {
        console.log("User Details", response);
      })
    } catch (error) {
      console.log("Error details", error);
    }
  }

  // Fetch Pages List
  async function fetchPagesId(userId, userToken) {
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
  async function fetchPageAccessToken(pageId, userAccessToken) {
    try {
      window.FB.api(`${pageId}?fields=access_token&access_token=${userAccessToken}`, (response) => {
        console.log("Single Page Access Token", response);
      })
    } catch (error) {
      console.log("Error", error);
    }
  }

  // Get Video Insights
  async function fetchIndVideoEarnings(videoId, pageAccessToken) {
    try {
      window.FB.api(`${videoId}/insights/post_video_ad_break_ad_impressions?access_token=${pageAccessToken}`, (response) => {
        console.log("Video Insights", response);
      })
    } catch (error) {
      console.log("Error", error);
    }
  }

  return (
    <>
      {
        fbUserAccessToken
          ?
          (
            <div className="container">
                <div className="d-flex">
                  <button onClick={logOutOfFB} className="primaryButton ms-auto">Log out</button>
                </div>
                <div className="row">
                  <div className="col-md-6">
                  <h4 className="mb-4">Pages List</h4>
                  {
                    pageList 
                    ?
                    <ul className="list-group">
                      {
                        pageList.map((page, idx) => {
                          return(
                            <li className="list-group-item">{page.name}</li>
                          )
                        })
                      }
                    </ul>  
                    :

                    ""

                  }
                  </div>
                </div>
            </div>
          )
          :
          (
            <div className={styles.authContainer}>
              <div className={styles.authInnerContainer}>
                <div className="signInContainer">
                  <div className={styles.signInForm}>
                    <h1 className={styles.signInTitle}>Login</h1>
                    <LoginForm />
                  </div>
                  <hr className={styles.signInSeparator} />

                  <div className={styles.signInWithSocials}>
                    <span
                      className={styles.textSmall}
                      style={{ color: "#000", padding: "0 0 20px" }}
                    >
                      Sign in via
                    </span>
                    <div className={styles.socials}>
                      <button className={styles.socialButtons}>Google</button>
                      <button onClick={logInToFB} className="primaryButton">
                        Login with Facebook
                      </button>
                      <button className={styles.socialButtons}>Apple</button>
                    </div>
                  </div>
                  <div className={styles.signInFooter}>
                    <Link href="">Privacy Policy</Link>
                  </div>
                </div>
              </div>
            </div>
          )
      }
    </>
  )

}

export default Auth;
