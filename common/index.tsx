export function loginWithFacebook() {
    let authData = "";
    console.log("login")
    FB.login(
       function (response) {
        if (response.authResponse) {
          authData = response.authResponse;
          console.log("authData",response )
          
          localStorage.setItem("TOKEN", response.authResponse.accessToken);
          window.location.href = ("/")
          // localStorage.setIt em("userName", fetchData.data.user.name);
        } else {
        }
      },
      { scope: "email" }
    );
  
    //   return authData;
  }