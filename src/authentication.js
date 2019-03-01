// Import libraries
import axios from "axios";
import Cookies from "js-cookie";
import formurlencoded from "form-urlencoded";

import settings from "./settings";

export default class AppService {
  init() {
    // Check cookie to see if already authenticated
    if (Cookies.get(settings.token) === undefined) {
      // Run logout tasks since not authenticated
      this.logout();
      // Setup the login process
      // this.initLogin();
    } else {
      // Run login tasks since authenticated
      this.login();
      // Setup the logout process
      // this.initLogout();
    }
  }
  static login(setIsAuthenticated) {
    // Set the loggedIn statis to true

    const creds = {
      username: "apiuser",
      password: "eOfMtAqezmN9oVMlZf&FhHcb"
    };

    // Make request to authenticate
    axios({
      method: "post",
      // Set the URL to authentication endpoint
      url: settings.rest_route + "jwt-auth/v1/token",
      // Make sure form data is encoded properly
      data: formurlencoded(creds),
      // Set the post headers for encoded form data
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
      .then(response => {
        // Check to see response comes back approved
        if (200 === response.status) {
          // Set a secure cookie with the authentication token
          Cookies.set(settings.token, response.data.token, {
            expires: 1,
            secure: true
          });
          console.log("Logged in");
          setIsAuthenticated(true);
          // Kick off the authentication process again
        } else {
          // Executed when response code is not 200
          alert("Login failed, please check credentials and try again!");
        }
      })
      .catch(error => {
        // Also log the actual error
        console.error(error);
      });
  }

  static logout(setIsAuthenticated) {
    // Set the loggedIn statis to true
    console.log("Logout");
    setIsAuthenticated(false);
  }
}
