import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
export default function Login() {
  const clientId = "{clientId}";
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);
  const onLoginSuccess = (res) => {
    console.log("Login Success", res.profileObj);
    setShowLoginButton(false);
    setShowLogoutButton(true);
  };
  const onFailureSuccess = (res) => {
    console.log("Login Failed", res);
  };
  const onSignedoutSuccess = () => {
    alert("you have been signed out successfully");
    setShowLoginButton(true);
    setShowLogoutButton(false);
    console.clear();
  };

  return (
    <div>
      {showLoginButton ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={onLoginSuccess}
          onFailure={onFailureSuccess}
          cookiePolicy={"single_host_origin"}
        />
      ) : null}
      {showLogoutButton ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={onSignedoutSuccess}
        />
      ) : null}
    </div>
  );
}
/*To generate clientId go to "google developer console" create a project.
After creating, go to oayth consent screen ,choose user type external 
then create then type the name.At the bottom write your email address
Press save and continue button until go to dashboard button appears and go to dashboard.
 Then press on publish app. Go to credentials, create credentials button and select oauth clientId
  add the URL which appears after you run the app(npm start)(remove "/" if it says invalid)
   add 2nd URL as the same (with /) you will get your clientId paste it in the code*/
